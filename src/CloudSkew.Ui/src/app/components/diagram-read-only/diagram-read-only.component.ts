import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ContextMenuSettingsModel, DiagramComponent as SyncFusionDiagramComponent, DiagramConstraints, DiagramTools, IScrollChangeEventArgs } from '@syncfusion/ej2-angular-diagrams';
import { PageSettingsModel, ScrollSettingsModel } from '@syncfusion/ej2-diagrams';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UIConstants } from 'src/app/constants/ui-constants';
import { DiagramDTO } from 'src/app/models/dto/diagramDTO';
import { DiagramComponentHelper } from 'src/app/utilities/diagram-component-helper';
import { DiagramControlsReadOnlyService } from '../diagram-controls-read-only/diagram-controls-read-only.service';
import { IDiagramZoomChangedEventArgs, StatusbarReadOnlyService } from '../statusbar-read-only/statusbar-read-only.service';
import { DiagramReadOnlyRequestArgs, DiagramReadOnlyService } from './diagram-read-only.service';


@Component({
    selector: 'app-diagram-read-only',
    templateUrl: './diagram-read-only.component.html',
    styles: [],
    standalone: false
})
export class DiagramReadOnlyComponent implements OnInit, OnDestroy {

  // inputs
  @Input() diagram: DiagramDTO;

  // subscriptions
  private onDestroy$: Subject<void> = new Subject<void>();

  //#region diagram settings
  @ViewChild('diagramReadOnlyControl') diagramReadOnlyControl: SyncFusionDiagramComponent;
  diagramControlPageSettings: PageSettingsModel = {
    multiplePage: true,
    boundaryConstraints: 'Infinity',
    height: UIConstants.diagramControlPageHeight,
    width: UIConstants.diagramControlPageWidth,
  };
  diagramControlScrollSettings: ScrollSettingsModel = {
    minZoom: 0.3,
    maxZoom: 3,
    canAutoScroll: true,
    scrollLimit: 'Infinity',
  };
  diagramControlContextMenuSettings: ContextMenuSettingsModel = {
    show: false,
  };
  diagramControlTool: DiagramTools = DiagramTools.ZoomPan; // set the diagram to pan mode

  //#endregion

  constructor(
    private diagramControlsReadOnlyService: DiagramControlsReadOnlyService,
    private diagramReadOnlyService: DiagramReadOnlyService,
    private statusbarReadOnlyService: StatusbarReadOnlyService,
  ) { }

  //#region lifecycle hooks

  ngOnInit() {
    this.diagramReadOnlyService.requestFeed$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((event: DiagramReadOnlyRequestArgs) => {
        switch (event.kind) {
          case 'IDiagramReadOnlyZoomRequestArgs':
            switch (event.type) {
              case 'zoomIn':
                DiagramComponentHelper.zoomIn(this.diagramReadOnlyControl);
                break;
              case 'zoomReset':
                DiagramComponentHelper.zoomReset(this.diagramReadOnlyControl);
                break;
              case 'zoomOut':
                DiagramComponentHelper.zoomOut(this.diagramReadOnlyControl);
                break;
            }
            break;
        }
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  //#endregion lifecycle hooks

  //#region callbacks

  onDiagramControlCreated() {
    this.initialize();
  }

  onDiagramControlScrollChange(args: IScrollChangeEventArgs) {
    this.diagramControlsReadOnlyService.request({
      kind: 'IDiagramControlsReadOnlyZoomArgs',
      isZoomInPossible: DiagramComponentHelper.isZoomInPossible(this.diagramReadOnlyControl),
      isZoomOutPossible: DiagramComponentHelper.isZoomOutPossible(this.diagramReadOnlyControl),
      isZoomResetPossible: DiagramComponentHelper.isZoomResetPossible(this.diagramReadOnlyControl),
    });

    this.statusbarReadOnlyService.request({
      kind: 'IDiagramZoomChangedEventArgs',
      value: args.newValue.CurrentZoom,
    } as IDiagramZoomChangedEventArgs);
  }

  //#endregion callbacks

  //#region utility methods

  lock() {
    DiagramComponentHelper.lock(this.diagramReadOnlyControl);

    this.diagramControlsReadOnlyService.request({
      kind: 'IDiagramControlsReadOnlyLockArgs',
      isLocked: true,
    });
  }

  unlock() {
    DiagramComponentHelper.unlock(this.diagramReadOnlyControl);

    this.diagramControlsReadOnlyService.request({
      kind: 'IDiagramControlsReadOnlyLockArgs',
      isLocked: false,
    });
  }

  //#endregion utility methods

  //#region private methods

  private initialize() {
    this.diagramReadOnlyControl.clear();

    if (this.diagram) {
      if (!this.diagram.diagramDetails) {
        // @todo: this is an error case
      }

      const updatedDiagramDetails = this.getUpdatedDiagramDetails();
      this.diagramReadOnlyControl.loadDiagram(updatedDiagramDetails);

      // let us ensure that the diagram is unlocked (to enable zoom in/out/reset)
      this.unlock();

      // let us also ensure that diagram is in pan mode (so user cannot interact with symbols)
      DiagramComponentHelper.setPanMode(this.diagramReadOnlyControl);

      this.diagramReadOnlyControl.updateViewPort();

      this.diagramControlsReadOnlyService.request({
        kind: 'IDiagramControlsReadOnlyLockArgs',
        isLocked: DiagramComponentHelper.isLocked(this.diagramReadOnlyControl),
      });

      this.diagramControlsReadOnlyService.request({
        kind: 'IDiagramControlsReadOnlyZoomArgs',
        isZoomInPossible: DiagramComponentHelper.isZoomInPossible(this.diagramReadOnlyControl),
        isZoomOutPossible: DiagramComponentHelper.isZoomOutPossible(this.diagramReadOnlyControl),
        isZoomResetPossible: DiagramComponentHelper.isZoomResetPossible(this.diagramReadOnlyControl),
      });

      this.statusbarReadOnlyService.request({
        kind: 'IDiagramZoomChangedEventArgs',
        value: this.diagramReadOnlyControl.scrollSettings.currentZoom,
      } as IDiagramZoomChangedEventArgs);
    }
  }

  // note: when a diagram is serialized to json, a bunch of 'extraneous' stuff also inadvertently gets
  // serialized into that json. One of these things is the context menu items, which really has nothing
  // to do with the diagram itself.
  // Consequently, when we modify the context menu items in the app, they get overridden by the stale
  // values from the json (when we call loadDiagram() method).
  // As a workaround, we modify the json and re-override the stale values with newer values.
  // See more: https://www.syncfusion.com/forums/149620/old-context-menu-items-override-new-context-menu-items
  // Notes:
  // 1: Initially, we used to set the diagram control's height and width to 900px and 500px respectively.
  // Now we no longer do that. Instead we now set diagram pageSetting's height and width instead.
  // Hence we need to 'unset' the diagram control's height and width for all legacy/older diagrams.
  // 2: Initially, we used to disable zoom at diagram level (using diagram constraints) and then selectively
  // enable/disable zoom when the diagram control bar was used. This is because along with zoom in/out/reset
  // actions, we also needed to adjust the diagram height/width. We wanted all users to use the diagram control
  // bar to zoom in/out/reset instead.
  // We could not disable the SyncFusion's built-in 'ctrl + mousewheel' shortcut) since this was not possible
  // via the commandManager as this forum thread explains:
  // https://www.syncfusion.com/forums/150137/unable-to-disable-override-the-quotzoomquot-command-ctrl-mousewheel
  // In any event, we're reverting back to built-in default behavior (i.e. enabling ctrl + mousewheel zoom).
  private getUpdatedDiagramDetails(): string {
    const diagramDetailsObj = JSON.parse(this.diagram.diagramDetails);
    diagramDetailsObj.height = undefined; // see note above
    diagramDetailsObj.width = undefined; // see note above
    (diagramDetailsObj.constraints as DiagramConstraints) = DiagramConstraints.Default; // see note above
    (diagramDetailsObj.pageSettings as PageSettingsModel).height = this.diagramControlPageSettings.height;
    (diagramDetailsObj.pageSettings as PageSettingsModel).width = this.diagramControlPageSettings.width;
    (diagramDetailsObj.pageSettings as PageSettingsModel).multiplePage = this.diagramControlPageSettings.multiplePage;
    (diagramDetailsObj.pageSettings as PageSettingsModel).boundaryConstraints = this.diagramControlPageSettings.boundaryConstraints;
    (diagramDetailsObj.scrollSettings as ScrollSettingsModel) = this.diagramControlScrollSettings;
    (diagramDetailsObj.contextMenuSettings as ContextMenuSettingsModel) = this.diagramControlContextMenuSettings;
    return JSON.stringify(diagramDetailsObj);
  }

  //#endregion private methods
}
