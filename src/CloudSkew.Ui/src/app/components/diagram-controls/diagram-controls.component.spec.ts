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

  it('should expose the correct tool mode status label', () => {
    component.isPanMode = false;
    expect(component.toolModeIndicatorLabel).toBe('MODE: Edit');

    component.isPanMode = true;
    expect(component.toolModeIndicatorLabel).toBe('MODE: Pan');
  });

  it('should expose the correct tool mode icon', () => {
    component.isPanMode = false;
    expect(component.toolModeIconName).toBe('near_me');

    component.isPanMode = true;
    expect(component.toolModeIconName).toBe('swipe');
  });

  it('should expose the zoom indicator label as a rounded percentage', () => {
    component.zoomPercentage = 1.246;
    expect(component.zoomIndicatorLabel).toBe('Zoom: 125%');
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
    component.onToolModeButtonClick();

    expect(diagramService.request).not.toHaveBeenCalled();
  });

  it('should request pan mode when toggle is clicked in edit mode', () => {
    component.isLocked = false;
    component.isPanMode = false;

    component.onToolModeButtonClick();

    expect(diagramService.request).toHaveBeenCalledOnceWith({
      kind: 'IDiagramToolRequestArgs',
      type: 'pan',
    });
  });

  it('should request select mode when toggle is clicked in pan mode', () => {
    component.isLocked = false;
    component.isPanMode = true;
    component.isSelectMode = false;

    component.onToolModeButtonClick();

    expect(diagramService.request).toHaveBeenCalledOnceWith({
      kind: 'IDiagramToolRequestArgs',
      type: 'select',
    });
  });

  // #endregion
});

describe('DiagramControlsComponent template', () => {
  let fixture: ComponentFixture<DiagramControlsComponent>;
  let component: DiagramControlsComponent;

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
    component = fixture.componentInstance;
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

  it('should render one tool mode toggle icon and the MODE: Edit chip', () => {
    const host = fixture.nativeElement as HTMLElement;
    const toolModesGroup = host.querySelector('[aria-label="Tool modes"]') as HTMLElement;

    component.isSelectMode = true;
    component.isPanMode = false;
    fixture.detectChanges();

    const modeButtons = toolModesGroup.querySelectorAll('button.diagram-control-button');
    const modeIndicator = toolModesGroup.querySelector('.diagram-controls-indicator--mode') as HTMLElement;
    const modeIcon = toolModesGroup.querySelector('mat-icon') as HTMLElement;

    expect(modeButtons.length).toBe(1);
    expect(modeIndicator).not.toBeNull();
    expect(modeIndicator.textContent?.trim()).toBe('MODE: Edit');
    expect(modeIcon.textContent?.trim()).toBe('near_me');
  });

  it('should render MODE: Pan chip text and swipe icon while pan mode is active', () => {
    const host = fixture.nativeElement as HTMLElement;
    const toolModesGroup = host.querySelector('[aria-label="Tool modes"]') as HTMLElement;

    component.isSelectMode = false;
    component.isPanMode = true;
    fixture.detectChanges();

    const modeIndicator = toolModesGroup.querySelector('.diagram-controls-indicator--mode') as HTMLElement;
    const modeIcon = toolModesGroup.querySelector('mat-icon') as HTMLElement;

    expect(modeIndicator).not.toBeNull();
    expect(modeIndicator.textContent?.trim()).toBe('MODE: Pan');
    expect(modeIcon.textContent?.trim()).toBe('swipe');
  });

  it('should render the zoom indicator chip inside the view commands group', () => {
    const host = fixture.nativeElement as HTMLElement;
    const viewGroup = host.querySelector('[aria-label="View commands"]') as HTMLElement;

    component.zoomPercentage = 1.5;
    fixture.detectChanges();

    const zoomIndicator = viewGroup.querySelector('.diagram-controls-indicator--zoom') as HTMLElement;
    expect(zoomIndicator).not.toBeNull();
    expect(zoomIndicator.textContent?.trim()).toBe('Zoom: 150%');
  });

  // #endregion
});
