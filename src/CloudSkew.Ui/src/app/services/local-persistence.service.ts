import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ErrorMessageConstants } from '../constants/error-message-constants';
import { SymbolFamilyConstants } from '../constants/symbol-family-constants';
import { DiagramDTO } from '../models/dto/diagramDTO';
import { DiagramImportDTO } from '../models/dto/diagramImportDTO';
import { ImageGenerationRequestDTO } from '../models/dto/imageGenerationRequestDTO';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class LocalPersistenceService {
  private static readonly activeDiagramRecordKey = 'activeDiagram';
  private static readonly defaultDiagramHelperUserId = '294de3557d9d00b3d2d8a1e6aab028cf';
  private static readonly preferencesRecordKey = 'preferences';

  private readonly databaseName = 'cloudskew-local';
  private readonly databaseVersion = 4;
  private readonly activeDiagramsStoreName = 'activeDiagrams';
  private readonly legacyDiagramsStoreName = 'diagrams';
  private readonly preferencesStoreName = 'preferences';
  private readonly userProfilesStoreName = 'userProfiles';
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

  get diagramHelperUserId(): string {
    return LocalPersistenceService.defaultDiagramHelperUserId;
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

  loadPreferences(): Observable<number> {
    return from(this.get<IPreferencesRecord>(this.preferencesStoreName, LocalPersistenceService.preferencesRecordKey)).pipe(
      map(record => record?.preferences ?? SymbolFamilyConstants.Default),
      tap(preferences => this.preferencesSubject.next(preferences)),
      catchError(err => this.handleError<number>(err, ErrorMessageConstants.preferencesGetError)),
    );
  }

  updatePreferences(modifiedPreferences: number): Observable<number> {
    const record: IPreferencesRecord = {
      id: LocalPersistenceService.preferencesRecordKey,
      preferences: modifiedPreferences,
    };

    return from(this.put(this.preferencesStoreName, record)).pipe(
      map(() => modifiedPreferences),
      tap(preferences => this.preferencesSubject.next(preferences)),
      catchError(err => this.handleError<number>(err, ErrorMessageConstants.preferencesUpdateError)),
    );
  }

  getActiveDiagram(): Observable<DiagramDTO | undefined> {
    return from(this.get<IActiveDiagramRecord>(this.activeDiagramsStoreName, LocalPersistenceService.activeDiagramRecordKey)).pipe(
      map(record => record?.diagram),
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
    );

    return this.saveDiagram(diagram, ErrorMessageConstants.diagramCreateError);
  }

  updateDiagram(modifiedDiagram: DiagramDTO): Observable<void> {
    const diagram: DiagramDTO = {
      ...modifiedDiagram,
      lastUpdatedUTC: new Date(),
      visibility: modifiedDiagram.visibility || 'private',
    };

    return from(this.put(this.activeDiagramsStoreName, {
      id: LocalPersistenceService.activeDiagramRecordKey,
      diagram,
    } as IActiveDiagramRecord)).pipe(
      map(() => undefined),
      catchError(err => this.handleError<void>(err, ErrorMessageConstants.diagramUpdateError)),
    );
  }

  updateDiagramThumbnail(imageGenerationRequest: ImageGenerationRequestDTO): Observable<void> {
    return from(this.get<IActiveDiagramRecord>(this.activeDiagramsStoreName, LocalPersistenceService.activeDiagramRecordKey)).pipe(
      mergeMap(record => {
        if (!record?.diagram) {
          return of(undefined);
        }

        const updatedDiagram: DiagramDTO = {
          ...record.diagram,
          thumbnailUrl: this.getLocalThumbnailUrl(imageGenerationRequest),
          lastUpdatedUTC: new Date(),
        };

        return from(this.put(this.activeDiagramsStoreName, {
          id: LocalPersistenceService.activeDiagramRecordKey,
          diagram: updatedDiagram,
        } as IActiveDiagramRecord)).pipe(
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

  private saveDiagram(diagram: DiagramDTO, errorMessage: string): Observable<DiagramDTO> {
    return from(this.put(this.activeDiagramsStoreName, {
      id: LocalPersistenceService.activeDiagramRecordKey,
      diagram,
    } as IActiveDiagramRecord)).pipe(
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

          if (!transaction) {
            reject(new Error('CloudSkew local database upgrade transaction was unavailable.'));
            return;
          }

          const diagramSourceStoreName = database.objectStoreNames.contains(this.activeDiagramsStoreName)
            ? this.activeDiagramsStoreName
            : database.objectStoreNames.contains(this.legacyDiagramsStoreName)
              ? this.legacyDiagramsStoreName
              : undefined;
          const hasUserProfilesStore = database.objectStoreNames.contains(this.userProfilesStoreName);

          if (!diagramSourceStoreName && !hasUserProfilesStore) {
            this.rebuildStores(database, transaction);
            return;
          }

          let pendingReads = 0;
          let legacyDiagrams: ILegacyDiagramRecord[] = [];
          let migratedPreferences: number | undefined;

          const completeUpgradeIfReady = () => {
            pendingReads -= 1;

            if (pendingReads === 0) {
              this.rebuildStores(database, transaction, legacyDiagrams, migratedPreferences);
            }
          };

          if (diagramSourceStoreName) {
            pendingReads += 1;
            const getLegacyDiagramsRequest = transaction.objectStore(diagramSourceStoreName).getAll();
            getLegacyDiagramsRequest.onsuccess = () => {
              legacyDiagrams = getLegacyDiagramsRequest.result as ILegacyDiagramRecord[];
              completeUpgradeIfReady();
            };
            getLegacyDiagramsRequest.onerror = () => reject(getLegacyDiagramsRequest.error);
          }

          if (hasUserProfilesStore) {
            pendingReads += 1;
            const getUserProfilesRequest = transaction.objectStore(this.userProfilesStoreName).getAll();
            getUserProfilesRequest.onsuccess = () => {
              migratedPreferences = this.selectPreferencesForMigration(getUserProfilesRequest.result as IUserProfileRecord[]);
              completeUpgradeIfReady();
            };
            getUserProfilesRequest.onerror = () => reject(getUserProfilesRequest.error);
          }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
        request.onblocked = () => reject(new Error('CloudSkew local database upgrade was blocked.'));
      });
    }

    return this.databasePromise;
  }

  private rebuildStores(
    database: IDBDatabase,
    transaction: IDBTransaction,
    legacyDiagrams: ILegacyDiagramRecord[] = [],
    migratedPreferences?: number,
  ) {
    if (database.objectStoreNames.contains(this.userProfilesStoreName)) {
      database.deleteObjectStore(this.userProfilesStoreName);
    }

    if (database.objectStoreNames.contains(this.activeDiagramsStoreName)) {
      database.deleteObjectStore(this.activeDiagramsStoreName);
    }

    if (database.objectStoreNames.contains(this.legacyDiagramsStoreName)) {
      database.deleteObjectStore(this.legacyDiagramsStoreName);
    }

    if (database.objectStoreNames.contains('templates')) {
      database.deleteObjectStore('templates');
    }

    this.createStore(database, this.preferencesStoreName, 'id');
    this.createStore(database, this.activeDiagramsStoreName, 'id');

    if (migratedPreferences !== undefined) {
      transaction.objectStore(this.preferencesStoreName).put({
        id: LocalPersistenceService.preferencesRecordKey,
        preferences: migratedPreferences,
      } as IPreferencesRecord);
    }

    const migratedDiagram = this.selectDiagramForMigration(legacyDiagrams);

    if (migratedDiagram) {
      transaction.objectStore(this.activeDiagramsStoreName).put({
        id: LocalPersistenceService.activeDiagramRecordKey,
        diagram: migratedDiagram,
      } as IActiveDiagramRecord);
    }
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
    );
  }

  private selectPreferencesForMigration(userProfiles: IUserProfileRecord[]): number | undefined {
    const latestProfile = [...userProfiles]
      .sort((left, right) => this.getTicks(right.lastUpdatedUTC) - this.getTicks(left.lastUpdatedUTC))[0];

    return latestProfile?.preferences;
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
}

interface IPreferencesRecord {
  id: string;
  preferences: number;
}

interface IActiveDiagramRecord {
  id: string;
  diagram: DiagramDTO;
}

interface IUserProfileRecord {
  preferences?: number;
  lastUpdatedUTC?: Date | string;
}
