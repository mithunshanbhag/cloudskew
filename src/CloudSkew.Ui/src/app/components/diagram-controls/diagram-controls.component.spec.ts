import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { DiagramService } from '../diagram/diagram.service';
import { DiagramControlsComponent } from './diagram-controls.component';
import { DiagramControlsService } from './diagram-controls.service';

describe('DiagramControlsComponent', () => {
  let diagramService: jasmine.SpyObj<DiagramService>;
  let component: DiagramControlsComponent;

  beforeEach(() => {
    diagramService = jasmine.createSpyObj<DiagramService>('DiagramService', ['request']);

    component = new DiagramControlsComponent(
      new DiagramControlsService(),
      diagramService,
    );
  });

  // #region Positive Cases

  it('should request select mode when the diagram is unlocked and not already in select mode', () => {
    component.isLocked = false;
    component.isSelectMode = false;

    component.onSelectModeButtonClick();

    expect(diagramService.request).toHaveBeenCalledOnceWith({
      kind: 'IDiagramToolRequestArgs',
      type: 'select',
    });
  });

  it('should request pan mode when the diagram is unlocked and not already in pan mode', () => {
    component.isLocked = false;
    component.isPanMode = false;

    component.onPanModeButtonClick();

    expect(diagramService.request).toHaveBeenCalledOnceWith({
      kind: 'IDiagramToolRequestArgs',
      type: 'pan',
    });
  });

  it('should expose the correct lock status label', () => {
    component.isLocked = true;
    expect(component.lockStatusLabel).toBe('Locked');

    component.isLocked = false;
    expect(component.lockStatusLabel).toBe('Unlocked');
  });

  // #endregion

  // #region Negative Cases

  it('should not re-request select mode when select mode is already active', () => {
    component.isLocked = false;
    component.isSelectMode = true;

    component.onSelectModeButtonClick();

    expect(diagramService.request).not.toHaveBeenCalled();
  });

  it('should not re-request pan mode when pan mode is already active', () => {
    component.isLocked = false;
    component.isPanMode = true;

    component.onPanModeButtonClick();

    expect(diagramService.request).not.toHaveBeenCalled();
  });

  // #endregion

  // #region Boundary/Edge Cases

  it('should not request a tool change when the diagram is locked', () => {
    component.isLocked = true;

    component.onSelectModeButtonClick();
    component.onPanModeButtonClick();

    expect(diagramService.request).not.toHaveBeenCalled();
  });

  // #endregion
});

describe('DiagramControlsComponent template', () => {
  let fixture: ComponentFixture<DiagramControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiagramControlsComponent],
      imports: [MatMenuModule],
      providers: [
        DiagramControlsService,
        { provide: DiagramService, useValue: jasmine.createSpyObj<DiagramService>('DiagramService', ['request']) },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DiagramControlsComponent);
    fixture.detectChanges();
  });

  // #region Positive Cases

  it('should keep add/remove symbols out of the top control bar and render a dedicated danger zone group', () => {
    const host = fixture.nativeElement as HTMLElement;
    const insertGroup = host.querySelector('[aria-label="Insert commands"]');
    const dangerZoneGroup = host.querySelector('.diagram-controls-group--danger-zone');

    expect(host.querySelector('[aria-label="Add or remove symbols"]')).toBeNull();
    expect(dangerZoneGroup).not.toBeNull();
    expect(host.querySelector('.diagram-controls-group--destructive')).toBeNull();
    expect(insertGroup?.classList.contains('diagram-controls-group--offset-start')).toBeTrue();
    expect(dangerZoneGroup?.classList.contains('diagram-controls-group--offset-danger')).toBeTrue();
  });

  // #endregion
});
