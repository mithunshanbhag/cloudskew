import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { of } from 'rxjs';
import { SymbolFamilyConstants } from '../../constants/symbol-family-constants';
import { LocalPersistenceService } from '../../services/local-persistence.service';
import { PreferenceGridComponent } from './preference-grid.component';
import { PreferenceService } from './preference.service';

class LocalPersistenceServiceStub {
  preferences = SymbolFamilyConstants.Default;
  updatePreferences = jasmine.createSpy('updatePreferences').and.returnValue(of(SymbolFamilyConstants.Default));
  setCurrentPreferences = jasmine.createSpy('setCurrentPreferences').and.callFake((preferences: number) => {
    this.preferences = preferences;
  });
}

describe('PreferenceGridComponent', () => {
  let fixture: ComponentFixture<PreferenceGridComponent>;
  let component: PreferenceGridComponent;
  let localPersistenceService: LocalPersistenceServiceStub;
  let preferenceService: PreferenceService;

  beforeEach(async () => {
    localPersistenceService = new LocalPersistenceServiceStub();

    await TestBed.configureTestingModule({
      declarations: [PreferenceGridComponent],
      imports: [MatCheckboxModule],
      providers: [
        PreferenceService,
        { provide: LocalPersistenceService, useValue: localPersistenceService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PreferenceGridComponent);
    component = fixture.componentInstance;
    preferenceService = TestBed.inject(PreferenceService);
    spyOn(preferenceService, 'request').and.callThrough();
  });

  it('should render grouped material checkbox rows for symbol families', () => {
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const groupTitles = Array.from(host.querySelectorAll('.preferenceChecklistGroupTitle'))
      .map(node => node.textContent?.trim());
    const checklistLabels = Array.from(host.querySelectorAll('.preferenceChecklistItem .mdc-label'))
      .map(node => node.textContent?.trim());

    expect(groupTitles).toEqual(['Cloud providers', 'Platforms and tools']);
    expect(checklistLabels).toContain('AWS');
    expect(checklistLabels).toContain('Cloudflare');
    expect(checklistLabels).not.toContain('General');
  });

  it('should enable a symbol family when a checkbox is checked', () => {
    fixture.detectChanges();

    component.onPreferenceItemCheckboxChange(
      { id: SymbolFamilyConstants.GCP, displayName: 'GCP' },
      { checked: true } as MatCheckboxChange,
    );

    expect(localPersistenceService.setCurrentPreferences).toHaveBeenCalledWith(
      SymbolFamilyConstants.Default | SymbolFamilyConstants.GCP,
    );
    expect(preferenceService.request).toHaveBeenCalledWith(
      SymbolFamilyConstants.Default | SymbolFamilyConstants.GCP,
    );
  });

  it('should disable a symbol family when a checkbox is unchecked', () => {
    fixture.detectChanges();

    component.onPreferenceItemCheckboxChange(
      { id: SymbolFamilyConstants.AWS, displayName: 'AWS' },
      { checked: false } as MatCheckboxChange,
    );

    expect(localPersistenceService.setCurrentPreferences).toHaveBeenCalledWith(
      SymbolFamilyConstants.Default & ~SymbolFamilyConstants.AWS,
    );
    expect(preferenceService.request).toHaveBeenCalledWith(
      SymbolFamilyConstants.Default & ~SymbolFamilyConstants.AWS,
    );
  });

  it('should persist preferences requested by the feed after debounce', fakeAsync(() => {
    fixture.detectChanges();

    preferenceService.requestFeed$.next(SymbolFamilyConstants.Azure | SymbolFamilyConstants.GCP);
    tick(1001);

    expect(localPersistenceService.updatePreferences).toHaveBeenCalledWith(
      SymbolFamilyConstants.Azure | SymbolFamilyConstants.GCP,
    );
  }));
});
