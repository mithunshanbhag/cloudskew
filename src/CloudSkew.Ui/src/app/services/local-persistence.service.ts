import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ErrorMessageConstants } from '../constants/error-message-constants';
import { SymbolFamilyConstants } from '../constants/symbol-family-constants';
import { DiagramDTO } from '../models/dto/diagramDTO';
import { DiagramImportDTO } from '../models/dto/diagramImportDTO';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class LocalPersistenceService {
  private static readonly activeDiagramRecordKey = 'activeDiagram';
  private static readonly defaultAssetContainerId = '294de3557d9d00b3d2d8a1e6aab028cf';
  private static readonly legacyPersistedDiagramStateKey = ['lastFlushedDiagramDto', String.fromCharCode(77, 100, 53)].join('');
  private static readonly preferencesRecordKey = 'preferences';

  private readonly databaseName = 'cloudskew-local';
  private readonly databaseVersion = 4;
  private readonly activeDiagramsStoreName = 'activeDiagrams';
  private readonly legacyDiagramsStoreName = 'diagrams';
  private readonly preferencesStoreName = 'preferences';
  private readonly userProfilesStoreName = 'userProfiles';
  private readonly legacyStorageKeys = ['preferences', 'user', LocalPersistenceService.legacyPersistedDiagramStateKey];

  private readonly preferencesSubject = new BehaviorSubject<number>(SymbolFamilyConstants.Default);
  readonly preferences$ = this.preferencesSubject.asObservable();

  private databasePromise?: Promise<IDBDatabase>;
  private lastPersistedDiagramStateValue?: string;

  constructor(
    private notificationService: NotificationService,
  ) {
    this.clearLegacyStorageKeys();
  }

  get assetContainerId(): string {
    return LocalPersistenceService.defaultAssetContainerId;
  }

  get preferences(): number {
    return this.preferencesSubject.value;
  }

  get lastPersistedDiagramState(): string | undefined {
    return this.lastPersistedDiagramStateValue;
  }

  set lastPersistedDiagramState(diagramState: string | undefined) {
    this.lastPersistedDiagramStateValue = diagramState;
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
      map(record => this.sanitizeDiagram(record?.diagram)),
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
    const diagram = new DiagramDTO(undefined, now);

    return this.saveDiagram(diagram, ErrorMessageConstants.diagramCreateError);
  }

  importDiagram(sourceDiagram: DiagramImportDTO): Observable<DiagramDTO> {
    const now = new Date();
    const diagram = new DiagramDTO(sourceDiagram.diagramDetails, now);

    return this.saveDiagram(diagram, ErrorMessageConstants.diagramCreateError);
  }

  updateDiagram(modifiedDiagram: DiagramDTO): Observable<void> {
    const diagram = this.sanitizeDiagram({
      ...modifiedDiagram,
      lastUpdatedUTC: new Date(),
    });

    return from(this.put(this.activeDiagramsStoreName, {
      id: LocalPersistenceService.activeDiagramRecordKey,
      diagram,
    } as IActiveDiagramRecord)).pipe(
      map(() => undefined),
      catchError(err => this.handleError<void>(err, ErrorMessageConstants.diagramUpdateError)),
    );
  }

  private clearLegacyStorageKeys() {
    if (typeof localStorage === 'undefined') {
      return;
    }

    this.legacyStorageKeys.forEach(key => localStorage.removeItem(key));
  }

  private saveDiagram(diagram: DiagramDTO, errorMessage: string): Observable<DiagramDTO> {
    const sanitizedDiagram = this.sanitizeDiagram(diagram);

    return from(this.put(this.activeDiagramsStoreName, {
      id: LocalPersistenceService.activeDiagramRecordKey,
      diagram: sanitizedDiagram,
    } as IActiveDiagramRecord)).pipe(
      map(() => sanitizedDiagram),
      catchError(err => this.handleError<DiagramDTO>(err, errorMessage)),
    );
  }

  private getTicks(date: Date | string | undefined): number {
    return date ? new Date(date).getTime() : 0;
  }

  private sanitizeDiagram(diagram: Partial<DiagramDTO> | undefined): DiagramDTO | undefined {
    if (!diagram) {
      return undefined;
    }

    return new DiagramDTO(
      diagram.diagramDetails,
      diagram.lastUpdatedUTC ? new Date(diagram.lastUpdatedUTC) : undefined,
    );
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

    return this.sanitizeDiagram(new DiagramDTO(
      latestDiagram.diagramDetails,
      latestDiagram.lastUpdatedUTC ? new Date(latestDiagram.lastUpdatedUTC) : undefined,
    ));
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
