import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { DiagramService } from '../diagram/diagram.service';
import { PaletteGridComponent } from './palette-grid.component';
import { LocalPersistenceService } from '../../services/local-persistence.service';
import { SymbolFamilyConstants } from '../../constants/symbol-family-constants';
import { MatDialog } from '@angular/material/dialog';

class LocalPersistenceServiceStub {
  private readonly preferencesSubject = new BehaviorSubject<number>(SymbolFamilyConstants.Default);

  readonly preferences$ = this.preferencesSubject.asObservable();

  get preferences(): number {
    return this.preferencesSubject.value;
  }

  setPreferences(preferences: number) {
    this.preferencesSubject.next(preferences);
  }
}

describe('PaletteGridComponent', () => {
  let fixture: ComponentFixture<PaletteGridComponent>;
  let component: PaletteGridComponent;
  let localPersistenceService: LocalPersistenceServiceStub;
  let diagramService: jasmine.SpyObj<DiagramService>;

  beforeEach(async () => {
    diagramService = jasmine.createSpyObj<DiagramService>('DiagramService', ['request']);
    localPersistenceService = new LocalPersistenceServiceStub();

    await TestBed.configureTestingModule({
      declarations: [PaletteGridComponent],
      providers: [
        { provide: DiagramService, useValue: diagramService },
        { provide: LocalPersistenceService, useValue: localPersistenceService },
        { provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>('MatDialog', ['open']) },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PaletteGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // #region Positive Cases

  it('should render the simplified palette header without family chips', () => {
    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelector('.palettePanelTitle')?.textContent?.trim()).toBe('Symbol palette');
    expect(host.querySelector('.palettePanelDescription')?.textContent?.trim()).toBe('3 libraries enabled');
    expect(host.querySelector('.palettePanelEyebrow')).toBeNull();
    expect(host.querySelector('.palettePanelFamilyPills')).toBeNull();
  });

  it('should render the documentation action as a quiet vertical ellipsis button', () => {
    expect(component.faInfoIcon.iconName).toBe('ellipsis-vertical');
  });

  it('should delegate group toggles to the Syncfusion control', () => {
    const groupRow = document.createElement('tr');
    groupRow.className = 'e-groupcaptionrow';

    const toggleCell = document.createElement('td');
    toggleCell.className = 'e-recordplusexpand';

    const syncfusionToggle = document.createElement('a');
    toggleCell.appendChild(syncfusionToggle);

    const captionCell = document.createElement('td');
    captionCell.className = 'e-groupcaption';

    const groupToggleButton = document.createElement('button');
    captionCell.appendChild(groupToggleButton);

    groupRow.append(toggleCell, captionCell);
    document.body.appendChild(groupRow);

    const preventDefault = jasmine.createSpy('preventDefault');
    const stopPropagation = jasmine.createSpy('stopPropagation');
    const dispatchEventSpy = spyOn(syncfusionToggle, 'dispatchEvent').and.returnValue(true);

    component.onPaletteGridGroupToggleClicked({
      currentTarget: groupToggleButton,
      preventDefault,
      stopPropagation,
    } as unknown as MouseEvent);

    expect(preventDefault).toHaveBeenCalled();
    expect(stopPropagation).toHaveBeenCalled();
    expect(dispatchEventSpy).toHaveBeenCalledWith(jasmine.objectContaining({
      type: 'click',
      bubbles: true,
      cancelable: true,
    }));

    groupRow.remove();
  });

  it('should request the custom image symbol when the footer action is clicked', () => {
    const host = fixture.nativeElement as HTMLElement;
    const addImageButton = host.querySelector('.paletteFooterButton') as HTMLButtonElement;

    addImageButton.click();

    expect(diagramService.request).toHaveBeenCalledWith(jasmine.objectContaining({
      kind: 'IDiagramAddSymbolRequestArgs',
      symbolFamilyId: SymbolFamilyConstants.General,
    }));
  });

  // #endregion
});
