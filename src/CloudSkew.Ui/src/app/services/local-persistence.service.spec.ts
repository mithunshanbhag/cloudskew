import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { AnonymousUserConstants } from '../constants/anonymous-user-constants';
import { SymbolFamilyConstants } from '../constants/symbol-family-constants';
import { DiagramDTO } from '../models/dto/diagramDTO';
import { ImageGenerationRequestDTO } from '../models/dto/imageGenerationRequestDTO';
import { NotificationService } from './notification.service';
import { LocalPersistenceService } from './local-persistence.service';

describe('LocalPersistenceService', () => {
  const databaseName = 'cloudskew-local';
  let service: LocalPersistenceService;

  beforeEach(async () => {
    await deleteDatabase(databaseName);
    localStorage.clear();
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [LocalPersistenceService, NotificationService],
    });

    service = TestBed.inject(LocalPersistenceService);
  });

  afterEach(async () => {
    await closeDatabase(service);
    await deleteDatabase(databaseName);
    localStorage.clear();
    TestBed.resetTestingModule();
  });

  // #region Positive Cases

  it('should create the anonymous user profile with default preferences', async () => {
    const profile = await firstValueFrom(service.ensureAnonymousUserProfile());

    expect(profile.email).toBe(AnonymousUserConstants.email);
    expect(profile.emailMD5).toBe(AnonymousUserConstants.emailMD5);
    expect(profile.preferences).toBe(SymbolFamilyConstants.Default);
    expect(service.preferences).toBe(SymbolFamilyConstants.Default);
  });

  it('should persist active diagram updates and thumbnails', async () => {
    const createdDiagram = await firstValueFrom(service.createBlankDiagram());
    const updatedDiagram = {
      ...createdDiagram,
      name: 'Updated Diagram',
      notes: 'Updated Notes',
    } as DiagramDTO;

    await firstValueFrom(service.updateDiagram(updatedDiagram));
    await firstValueFrom(service.updateDiagramThumbnail(
      new ImageGenerationRequestDTO('<svg />', 100, 100, 'SVG'),
    ));

    const reloadedDiagram = await firstValueFrom(service.getActiveDiagram());

    expect(reloadedDiagram?.name).toBe('Updated Diagram');
    expect(reloadedDiagram?.notes).toBe('Updated Notes');
    expect(reloadedDiagram?.thumbnailUrl).toContain('data:image/svg+xml;charset=utf-8,');
  });

  // #endregion

  // #region Negative Cases

  it('should return no active diagram before one is created', async () => {
    const diagram = await firstValueFrom(service.getActiveDiagram());

    expect(diagram).toBeUndefined();
  });

  // #endregion

  // #region Boundary/Edge Cases

  it('should remove only the legacy CloudSkew localStorage keys', async () => {
    await closeDatabase(service);
    TestBed.resetTestingModule();

    localStorage.setItem('preferences', 'legacy-preferences');
    localStorage.setItem('user', 'legacy-user');
    localStorage.setItem('lastFlushedDiagramDtoMd5', 'legacy-hash');
    localStorage.setItem('unrelated-key', 'keep-me');

    TestBed.configureTestingModule({
      providers: [LocalPersistenceService, NotificationService],
    });

    const rehydratedService = TestBed.inject(LocalPersistenceService);

    expect(localStorage.getItem('preferences')).toBeNull();
    expect(localStorage.getItem('user')).toBeNull();
    expect(localStorage.getItem('lastFlushedDiagramDtoMd5')).toBeNull();
    expect(localStorage.getItem('unrelated-key')).toBe('keep-me');
    expect(rehydratedService.preferences).toBe(SymbolFamilyConstants.Default);

    await closeDatabase(rehydratedService);
  });

  it('should publish preference updates from persisted profile changes', async () => {
    const emittedPreferences: number[] = [];
    const expectedPreferences = SymbolFamilyConstants.General | SymbolFamilyConstants.GCP;
    const subscription = service.preferences$.subscribe(preferences => emittedPreferences.push(preferences));

    await firstValueFrom(service.ensureAnonymousUserProfile());
    await firstValueFrom(service.updatePreferences(expectedPreferences));
    subscription.unsubscribe();

    expect(service.preferences).toBe(expectedPreferences);
    expect(emittedPreferences[emittedPreferences.length - 1]).toBe(expectedPreferences);
  });

  // #endregion
});

async function closeDatabase(service?: LocalPersistenceService) {
  const databasePromise = (service as unknown as { databasePromise?: Promise<IDBDatabase> })?.databasePromise;

  if (!databasePromise) {
    return;
  }

  const database = await databasePromise;
  database.close();
}

async function deleteDatabase(databaseName: string) {
  return new Promise<void>((resolve, reject) => {
    const request = indexedDB.deleteDatabase(databaseName);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
    request.onblocked = () => reject(new Error(`Delete database blocked: ${databaseName}`));
  });
}
