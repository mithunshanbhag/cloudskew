import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AnonymousUserConstants } from '../constants/anonymous-user-constants';
import { ErrorMessageConstants } from '../constants/error-message-constants';
import { NewUserConstants } from '../constants/new-user-constants';
import { SymbolFamilyConstants } from '../constants/symbol-family-constants';
import { DiagramDTO } from '../models/dto/diagramDTO';
import { DiagramImportDTO } from '../models/dto/diagramImportDTO';
import { ImageGenerationRequestDTO } from '../models/dto/imageGenerationRequestDTO';
import { UserProfileDTO } from '../models/dto/userProfileDTO';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class LocalPersistenceService {
  private readonly databaseName = 'cloudskew-local';
  private readonly databaseVersion = 3;
  private readonly userProfilesStoreName = 'userProfiles';
  private readonly activeDiagramsStoreName = 'activeDiagrams';
  private readonly legacyDiagramsStoreName = 'diagrams';
  private readonly legacyStorageKeys = ['preferences', 'user', 'lastFlushedDiagramDtoMd5'];

  private readonly preferencesSubject = new BehaviorSubject<number>(SymbolFamilyConstants.Default);
  readonly preferences$ = this.preferencesSubject.asObservable();

  private databasePromise?: Promise<IDBDatabase>;
  private lastFlushedDiagramDtoMd5Value?: string;

  constructor(
    private notificationService: NotificationService,
  ) {
    this.clearLegacyStorageKeys();
  }

  get user(): string {
    return AnonymousUserConstants.emailMD5;
  }

  get preferences(): number {
    return this.preferencesSubject.value;
  }

  get lastFlushedDiagramDtoMd5(): string | undefined {
    return this.lastFlushedDiagramDtoMd5Value;
  }

  set lastFlushedDiagramDtoMd5(diagramDtoMd5: string | undefined) {
    this.lastFlushedDiagramDtoMd5Value = diagramDtoMd5;
  }

  setCurrentPreferences(preferences: number) {
    this.preferencesSubject.next(preferences);
  }

  ensureAnonymousUserProfile(): Observable<UserProfileDTO> {
    return from(this.get<UserProfileDTO>(this.userProfilesStoreName, this.user)).pipe(
      catchError(err => this.handleError<UserProfileDTO>(err, ErrorMessageConstants.userProfileGetError)),
      mergeMap(existingProfile => this.saveUserProfile(
        existingProfile
          ? new UserProfileDTO(
            existingProfile.subscriptionName,
            AnonymousUserConstants.email,
            this.user,
            existingProfile.preferences,
            true,
            AnonymousUserConstants.displayName,
            '',
            new Date(),
          )
          : new UserProfileDTO(
            NewUserConstants.subscriptionName,
            AnonymousUserConstants.email,
            this.user,
            this.preferences,
            true,
            AnonymousUserConstants.displayName,
            '',
            new Date(),
          ),
        existingProfile ? ErrorMessageConstants.userProfileUpdateError : ErrorMessageConstants.userProfileCreateError,
      )),
      tap(profile => this.preferencesSubject.next(profile.preferences)),
    );
  }

  updatePreferences(modifiedPreferences: number): Observable<UserProfileDTO> {
    return from(this.get<UserProfileDTO>(this.userProfilesStoreName, this.user)).pipe(
      catchError(err => this.handleError<UserProfileDTO>(err, ErrorMessageConstants.userProfileGetError)),
      mergeMap(existingProfile => this.saveUserProfile(
        new UserProfileDTO(
          existingProfile?.subscriptionName || NewUserConstants.subscriptionName,
          AnonymousUserConstants.email,
          this.user,
          modifiedPreferences,
          true,
          AnonymousUserConstants.displayName,
          '',
          new Date(),
        ),
        ErrorMessageConstants.userProfileUpdateError,
      )),
      tap(profile => this.preferencesSubject.next(profile.preferences)),
    );
  }

  getActiveDiagram(): Observable<DiagramDTO | undefined> {
    return from(this.get<DiagramDTO>(this.activeDiagramsStoreName, this.user)).pipe(
      map(diagram => diagram && diagram.emailMD5 === this.user ? diagram : undefined),
      catchError(err => this.handleError<DiagramDTO | undefined>(err, ErrorMessageConstants.diagramGetError)),
    );
  }

  loadOrCreateActiveDiagram(): Observable<DiagramDTO> {
    return this.getActiveDiagram().pipe(
      mergeMap(diagram => diagram ? of(diagram) : this.createBlankDiagram()),
    );
  }

  createBlankDiagram(): Observable<DiagramDTO> {
    const now = new Date();
    const diagram = new DiagramDTO(
      'Untitled Diagram',
      undefined,
      'private',
      undefined,
      undefined,
      now,
      this.user,
    );

    return this.saveDiagram(diagram, ErrorMessageConstants.diagramCreateError);
  }

  importDiagram(sourceDiagram: DiagramImportDTO): Observable<DiagramDTO> {
    const now = new Date();
    const diagram = new DiagramDTO(
      this.removeJsonExtension(sourceDiagram.name || 'Imported Diagram'),
      sourceDiagram.notes,
      'private',
      sourceDiagram.diagramDetails,
      sourceDiagram.thumbnailUrl,
      now,
      this.user,
    );

    return this.saveDiagram(diagram, ErrorMessageConstants.diagramCreateError);
  }

  updateDiagram(modifiedDiagram: DiagramDTO): Observable<void> {
    const diagram = {
      ...modifiedDiagram,
      emailMD5: this.user,
      lastUpdatedUTC: new Date(),
      visibility: modifiedDiagram.visibility || 'private',
    } as DiagramDTO;

    return from(this.put(this.activeDiagramsStoreName, diagram)).pipe(
      map(() => undefined),
      catchError(err => this.handleError<void>(err, ErrorMessageConstants.diagramUpdateError)),
    );
  }

  updateDiagramThumbnail(imageGenerationRequest: ImageGenerationRequestDTO): Observable<void> {
    return from(this.get<DiagramDTO>(this.activeDiagramsStoreName, this.user)).pipe(
      mergeMap(diagram => {
        if (!diagram) {
          return of(undefined);
        }

        diagram.thumbnailUrl = this.getLocalThumbnailUrl(imageGenerationRequest);
        diagram.lastUpdatedUTC = new Date();

        return from(this.put(this.activeDiagramsStoreName, diagram)).pipe(
          map(() => undefined),
        );
      }),
      catchError(err => this.handleError<void>(err, ErrorMessageConstants.uploadThumbnailError)),
    );
  }

  private clearLegacyStorageKeys() {
    if (typeof localStorage === 'undefined') {
      return;
    }

    this.legacyStorageKeys.forEach(key => localStorage.removeItem(key));
  }

  private saveUserProfile(userProfile: UserProfileDTO, errorMessage: string): Observable<UserProfileDTO> {
    const profile = {
      ...userProfile,
      email: userProfile.email || AnonymousUserConstants.email,
      emailMD5: userProfile.emailMD5 || this.user,
      lastUpdatedUTC: new Date(),
      name: userProfile.name || AnonymousUserConstants.displayName,
      subscriptionName: userProfile.subscriptionName || NewUserConstants.subscriptionName,
    } as UserProfileDTO;

    return from(this.put(this.userProfilesStoreName, profile)).pipe(
      map(() => profile),
      catchError(err => this.handleError<UserProfileDTO>(err, errorMessage)),
    );
  }

  private saveDiagram(diagram: DiagramDTO, errorMessage: string): Observable<DiagramDTO> {
    return from(this.put(this.activeDiagramsStoreName, diagram)).pipe(
      map(() => diagram),
      catchError(err => this.handleError<DiagramDTO>(err, errorMessage)),
    );
  }

  private removeJsonExtension(fileName: string): string {
    return fileName.replace(/\.json$/i, '');
  }

  private getLocalThumbnailUrl(imageGenerationRequest: ImageGenerationRequestDTO): string {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(imageGenerationRequest.htmlData)}`;
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
      latestDiagram.emailMD5 || this.user,
    );
  }

  private async get<T>(storeName: string, key: IDBValidKey): Promise<T | undefined> {
    return this.request<T | undefined>(storeName, 'readonly', store => store.get(key));
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

  private handleError<T>(err: any, message: string): Observable<T> {
    this.notificationService.request({
      kind: 'IDiagramNotificationRequestArgs',
      type: 'error',
      title: 'Error',
      content: message,
    });

    if (!environment.production) {
      console.error(err);
    }

    return throwError(() => err);
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
