import { Injectable } from '@angular/core';
import { AnonymousUserConstants } from '../constants/anonymous-user-constants';
import { NewUserConstants } from '../constants/new-user-constants';
import { DiagramCompactDTO } from '../models/dto/diagramCompactDTO';
import { DiagramDTO } from '../models/dto/diagramDTO';
import { DiagramImportDTO } from '../models/dto/diagramImportDTO';
import { UserProfileDTO } from '../models/dto/userProfileDTO';

@Injectable({
  providedIn: 'root'
})
export class LocalApiStorageService {
  private readonly databaseName = 'cloudskew-local';
  private readonly databaseVersion = 2;
  private readonly userProfilesStoreName = 'userProfiles';
  private readonly diagramsStoreName = 'diagrams';

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

  async diagramGetLastUpdatedAsync(user: string): Promise<DiagramDTO | undefined> {
    const diagrams = await this.getUserDiagrams(user);
    return diagrams
      .sort((left, right) => this.getTicks(right.lastUpdatedUTC) - this.getTicks(left.lastUpdatedUTC))[0];
  }

  async diagramsListAsync(user: string): Promise<DiagramCompactDTO[]> {
    const diagrams = await this.getUserDiagrams(user);
    return diagrams
      .sort((left, right) => this.getTicks(right.lastUpdatedUTC) - this.getTicks(left.lastUpdatedUTC))
      .map(diagram => this.toDiagramCompactDTO(diagram));
  }

  async diagramGetAsync(user: string, diagramId: string): Promise<DiagramDTO | undefined> {
    const diagram = await this.get<DiagramDTO>(this.diagramsStoreName, diagramId);
    return diagram && diagram.emailMD5 === user ? diagram : undefined;
  }

  async diagramGetByNameAsync(user: string, diagramName: string): Promise<DiagramCompactDTO | undefined> {
    const normalizedName = this.normalizeName(diagramName);
    const diagrams = await this.getUserDiagrams(user);
    const diagram = diagrams.find(item => this.normalizeName(item.name) === normalizedName);
    return diagram ? this.toDiagramCompactDTO(diagram) : undefined;
  }

  async diagramCreateBlankAsync(user: string): Promise<DiagramDTO> {
    const now = new Date();
    const diagramName = await this.getUniqueDiagramName(user, 'Untitled Diagram');
    const diagram = new DiagramDTO(
      this.createId(),
      diagramName,
      undefined,
      'private',
      undefined,
      undefined,
      now,
      user,
    );

    await this.put(this.diagramsStoreName, diagram);
    return diagram;
  }

  async diagramImportAsync(user: string, sourceDiagram: DiagramImportDTO): Promise<DiagramDTO> {
    const now = new Date();
    const diagramName = await this.getUniqueDiagramName(user, this.removeJsonExtension(sourceDiagram.name || 'Imported Diagram'));
    const diagram = new DiagramDTO(
      this.createId(),
      diagramName,
      sourceDiagram.notes,
      'private',
      sourceDiagram.diagramDetails,
      sourceDiagram.thumbnailUrl,
      now,
      user,
    );

    await this.put(this.diagramsStoreName, diagram);
    return diagram;
  }

  async diagramUpdateAsync(user: string, existingDiagramId: string, modifiedDiagram: DiagramDTO): Promise<void> {
    const diagram = {
      ...modifiedDiagram,
      id: existingDiagramId,
      emailMD5: user,
      lastUpdatedUTC: new Date(),
      visibility: modifiedDiagram.visibility || 'private',
    } as DiagramDTO;

    await this.put(this.diagramsStoreName, diagram);
  }

  async diagramDeleteAsync(user: string, diagramId: string): Promise<void> {
    const diagram = await this.diagramGetAsync(user, diagramId);
    if (diagram) {
      await this.delete(this.diagramsStoreName, diagramId);
    }
  }

  async diagramUpdateThumbnailAsync(user: string, diagramId: string, thumbnailUrl?: string): Promise<void> {
    const diagram = await this.diagramGetAsync(user, diagramId);
    if (!diagram) {
      return;
    }

    diagram.thumbnailUrl = thumbnailUrl || diagram.thumbnailUrl;
    diagram.lastUpdatedUTC = new Date();
    await this.put(this.diagramsStoreName, diagram);
  }

  private async getUserDiagrams(user: string): Promise<DiagramDTO[]> {
    const diagrams = await this.getAll<DiagramDTO>(this.diagramsStoreName);
    return diagrams.filter(diagram => diagram.emailMD5 === user);
  }

  private toDiagramCompactDTO(diagram: DiagramDTO): DiagramCompactDTO {
    return new DiagramCompactDTO(
      diagram.id,
      diagram.name,
      diagram.notes,
      diagram.visibility,
      diagram.thumbnailUrl,
      diagram.lastUpdatedUTC,
      diagram.emailMD5,
    );
  }

  private async getUniqueDiagramName(user: string, requestedName: string): Promise<string> {
    const existingNames = (await this.getUserDiagrams(user)).map(diagram => this.normalizeName(diagram.name));
    return this.getUniqueName(requestedName, existingNames);
  }

  private getUniqueName(requestedName: string, existingNames: string[]): string {
    const baseName = (requestedName || 'Untitled Diagram').trim();
    let candidate = baseName;
    let suffix = 2;

    while (existingNames.includes(this.normalizeName(candidate))) {
      candidate = `${baseName} ${suffix}`;
      suffix++;
    }

    return candidate;
  }

  private removeJsonExtension(fileName: string): string {
    return fileName.replace(/\.json$/i, '');
  }

  private normalizeName(name: string): string {
    return (name || '').trim().toLocaleLowerCase();
  }

  private getTicks(date: Date | string | undefined): number {
    return date ? new Date(date).getTime() : 0;
  }

  private createId(): string {
    return crypto.randomUUID
      ? crypto.randomUUID()
      : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, token => {
        const random = Math.random() * 16 | 0;
        const value = token === 'x' ? random : (random & 0x3 | 0x8);
        return value.toString(16);
      });
  }

  private async openDatabase(): Promise<IDBDatabase> {
    if (!this.databasePromise) {
      this.databasePromise = new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(this.databaseName, this.databaseVersion);

        request.onupgradeneeded = () => {
          const database = request.result;
          this.createStore(database, this.userProfilesStoreName, 'emailMD5');
          this.createStore(database, this.diagramsStoreName, 'id');
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

  private async get<T>(storeName: string, key: IDBValidKey): Promise<T | undefined> {
    return this.request<T | undefined>(storeName, 'readonly', store => store.get(key));
  }

  private async getAll<T>(storeName: string): Promise<T[]> {
    return this.request<T[]>(storeName, 'readonly', store => store.getAll());
  }

  private async put<T>(storeName: string, value: T): Promise<void> {
    await this.request<IDBValidKey>(storeName, 'readwrite', store => store.put(value));
  }

  private async delete(storeName: string, key: IDBValidKey): Promise<void> {
    await this.request<undefined>(storeName, 'readwrite', store => store.delete(key));
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
