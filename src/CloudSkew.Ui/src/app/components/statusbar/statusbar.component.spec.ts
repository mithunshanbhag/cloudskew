import { StatusbarComponent } from './statusbar.component';
import { StatusbarService } from './statusbar.service';

describe('StatusbarComponent', () => {
  let statusbarService: StatusbarService;
  let component: StatusbarComponent;

  beforeEach(() => {
    statusbarService = new StatusbarService();
    component = new StatusbarComponent(statusbarService);
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  // #region Positive Cases

  it('should format the select/edit tool label for display', () => {
    component.tool = 'select/edit';

    expect(component.displayTool).toBe('Select');
  });

  it('should format the pan/swipe tool label for display', () => {
    component.tool = 'pan/swipe';

    expect(component.displayTool).toBe('Pan');
  });

  // #endregion

  // #region Negative Cases

  it('should return undefined for display text when no tool is selected', () => {
    component.tool = undefined;

    expect(component.displayTool).toBeUndefined();
  });

  // #endregion

  // #region Boundary/Edge Cases

  it('should update zoom and tool values from status bar events', () => {
    component.ngOnInit();

    statusbarService.request({
      kind: 'IDiagramToolChangedEventArgs',
      value: 'select/edit',
    });
    statusbarService.request({
      kind: 'IDiagramZoomChangedEventArgs',
      value: 1.25,
    });

    expect(component.displayTool).toBe('Select');
    expect(component.zoomPercentage).toBe(1.25);
  });

  // #endregion
});
