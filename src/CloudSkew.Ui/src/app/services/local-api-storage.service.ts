import { Injectable } from '@angular/core';
import { AnonymousUserConstants } from '../constants/anonymous-user-constants';
import { NewUserConstants } from '../constants/new-user-constants';
import { DiagramDTO } from '../models/dto/diagramDTO';
import { DiagramImportDTO } from '../models/dto/diagramImportDTO';
import { UserProfileDTO } from '../models/dto/userProfileDTO';

@Injectable({
  providedIn: 'root'
})
export class LocalApiStorageService {
  private readonly databaseName = 'cloudskew-local';
  private readonly databaseVersion = 3;
  private readonly userProfilesStoreName = 'userProfiles';
  private readonly activeDiagramsStoreName = 'activeDiagrams';
  private readonly legacyDiagramsStoreName = 'diagrams';

  private databasePromise?: Promise<IDBDatabase>;

  async userProfilesListAsync(): Promise<UserProfileDTO[]> {
    return this.getAll<UserProfileDTO>(this.userProfilesStoreName);
  }

  async userProfileGetAsync(user: string): Promise<UserProfileDTO | undefined> {
    return this.get<UserProfileDTO>(this.userProfilesStoreName, user);
  }

  async userProfileSaveAsync(userProfile: UserProfileDTO): Promise<UserProfileDTO> {
    const profile = {
      ...userProfile,
      email: userProfile.email || AnonymousUserConstants.email,
      emailMD5: userProfile.emailMD5 || AnonymousUserConstants.emailMD5,
      lastUpdatedUTC: new Date(),
      name: userProfile.name || AnonymousUserConstants.displayName,
      subscriptionName: userProfile.subscriptionName || NewUserConstants.subscriptionName,
    } as UserProfileDTO;

    await this.put(this.userProfilesStoreName, profile);
    return profile;
  }

  async userProfileUpdatePreferencesAsync(user: string, modifiedPreferences: number): Promise<void> {
    const existingProfile = await this.userProfileGetAsync(user);
    const profile = existingProfile || new UserProfileDTO(
      NewUserConstants.subscriptionName,
      AnonymousUserConstants.email,
      user,
      modifiedPreferences,
      true,
      AnonymousUserConstants.displayName,
      '',
      new Date(),
    );

    profile.preferences = modifiedPreferences;
    profile.lastUpdatedUTC = new Date();
    await this.userProfileSaveAsync(profile);
  }

  async diagramGetAsync(user: string): Promise<DiagramDTO | undefined> {
    const diagram = await this.get<DiagramDTO>(this.activeDiagramsStoreName, user);
    return diagram && diagram.emailMD5 === user ? diagram : undefined;
  }

  async diagramCreateBlankAsync(user: string): Promise<DiagramDTO> {
    const now = new Date();
    const diagram = new DiagramDTO(
      'Untitled Diagram',
      undefined,
      'private',
      undefined,
      undefined,
      now,
      user,
    );

    await this.put(this.activeDiagramsStoreName, diagram);
    return diagram;
  }

  async diagramImportAsync(user: string, sourceDiagram: DiagramImportDTO): Promise<DiagramDTO> {
    const now = new Date();
    const diagram = new DiagramDTO(
      this.removeJsonExtension(sourceDiagram.name || 'Imported Diagram'),
      sourceDiagram.notes,
      'private',
      sourceDiagram.diagramDetails,
      sourceDiagram.thumbnailUrl,
      now,
      user,
    );

    await this.put(this.activeDiagramsStoreName, diagram);
    return diagram;
  }

  async diagramUpdateAsync(user: string, modifiedDiagram: DiagramDTO): Promise<void> {
    const diagram = {
      ...modifiedDiagram,
      emailMD5: user,
      lastUpdatedUTC: new Date(),
      visibility: modifiedDiagram.visibility || 'private',
    } as DiagramDTO;

    await this.put(this.activeDiagramsStoreName, diagram);
  }

  async diagramUpdateThumbnailAsync(user: string, thumbnailUrl?: string): Promise<void> {
    const diagram = await this.diagramGetAsync(user);
    if (!diagram) {
      return;
    }

    diagram.thumbnailUrl = thumbnailUrl || diagram.thumbnailUrl;
    diagram.lastUpdatedUTC = new Date();
    await this.put(this.activeDiagramsStoreName, diagram);
  }

  private removeJsonExtension(fileName: string): string {
    return fileName.replace(/\.json$/i, '');
  }

  private getTicks(date: Date | string | undefined): number {
    return date ? new Date(date).getTime() : 0;
  }

  private async openDatabase(): Promise<IDBDatabase> {
    if (!this.databasePromise) {
      this.databasePromise = new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(this.databaseName, this.databaseVersion);

        request.onupgradeneeded = () => {
          const database = request.result;
          const transaction = request.transaction;
          this.createStore(database, this.userProfilesStoreName, 'emailMD5');

          if (database.objectStoreNames.contains(this.legacyDiagramsStoreName) && transaction) {
            const legacyStore = transaction.objectStore(this.legacyDiagramsStoreName);
            const getAllRequest = legacyStore.getAll();

            getAllRequest.onsuccess = () => {
              const migratedDiagram = this.selectDiagramForMigration(getAllRequest.result as ILegacyDiagramRecord[]);
              database.deleteObjectStore(this.legacyDiagramsStoreName);
              this.createStore(database, this.activeDiagramsStoreName, 'emailMD5');

              if (migratedDiagram) {
                transaction.objectStore(this.activeDiagramsStoreName).put(migratedDiagram);
              }
            };
          } else {
            this.createStore(database, this.activeDiagramsStoreName, 'emailMD5');
          }

          if (database.objectStoreNames.contains('templates')) {
            database.deleteObjectStore('templates');
          }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
        request.onblocked = () => reject(new Error('CloudSkew local database upgrade was blocked.'));
      });
    }

    return this.databasePromise;
  }

  private createStore(database: IDBDatabase, storeName: string, keyPath: string) {
    if (!database.objectStoreNames.contains(storeName)) {
      database.createObjectStore(storeName, { keyPath });
    }
  }

  private selectDiagramForMigration(diagrams: ILegacyDiagramRecord[]): DiagramDTO | undefined {
    const latestDiagram = [...diagrams]
      .sort((left, right) => this.getTicks(right.lastUpdatedUTC) - this.getTicks(left.lastUpdatedUTC))[0];

    if (!latestDiagram) {
      return undefined;
    }

    return new DiagramDTO(
      latestDiagram.name || 'Untitled Diagram',
      latestDiagram.notes,
      latestDiagram.visibility || 'private',
      latestDiagram.diagramDetails,
      latestDiagram.thumbnailUrl,
      latestDiagram.lastUpdatedUTC ? new Date(latestDiagram.lastUpdatedUTC) : undefined,
      latestDiagram.emailMD5 || AnonymousUserConstants.emailMD5,
    );
  }

  private async get<T>(storeName: string, key: IDBValidKey): Promise<T | undefined> {
    return this.request<T | undefined>(storeName, 'readonly', store => store.get(key));
  }

  private async getAll<T>(storeName: string): Promise<T[]> {
    return this.request<T[]>(storeName, 'readonly', store => store.getAll());
  }

  private async put<T>(storeName: string, value: T): Promise<void> {
    await this.request<IDBValidKey>(storeName, 'readwrite', store => store.put(value));
  }

  private async request<T>(
    storeName: string,
    mode: IDBTransactionMode,
    operation: (store: IDBObjectStore) => IDBRequest,
  ): Promise<T> {
    const database = await this.openDatabase();

    return new Promise<T>((resolve, reject) => {
      const transaction = database.transaction(storeName, mode);
      const store = transaction.objectStore(storeName);
      const request = operation(store);

      request.onsuccess = () => resolve(request.result as T);
      request.onerror = () => reject(request.error);
      transaction.onerror = () => reject(transaction.error);
      transaction.onabort = () => reject(transaction.error);
    });
  }
}

interface ILegacyDiagramRecord {
  id?: string;
  name?: string;
  notes?: string;
  visibility?: string;
  diagramDetails?: string;
  thumbnailUrl?: string;
  lastUpdatedUTC?: Date | string;
  emailMD5?: string;
}
