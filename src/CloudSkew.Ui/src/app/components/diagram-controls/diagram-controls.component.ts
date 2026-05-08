import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SymbolFamilyConstants } from 'src/app/constants/symbol-family-constants';
import { SymbolGroupConstants } from 'src/app/constants/symbol-group-constants';
import { SymbolIdConstants } from 'src/app/constants/symbol-id-constants';
import { UIConstants } from 'src/app/constants/ui-constants';
import { DiagramService, IDiagramLockRequestArgs, IDiagramToolRequestArgs, IDiagramUndoRedoRequestArgs, IDiagramZoomRequestArgs } from '../diagram/diagram.service';
import { SymbolFamilyDefinitions } from '../../constants/symbol-family-definitions';
import { DiagramControlsRequestArgs, DiagramControlsService } from './diagram-controls.service';

@Component({
    selector: 'app-diagram-controls',
    templateUrl: './diagram-controls.component.html',
    styleUrls: ['./diagram-controls.component.css'],
    standalone: false
})
export class DiagramControlsComponent implements OnInit, OnDestroy {

  //
  spinnerDiameter = UIConstants.diagramControlSpinnerDefaultDiameter;

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  //
  printInProgress = false;
  exportInProgress = false;
  deleteInProgress = false;
  isLocked = false;
  isUndoPossible = false;
  isRedoPossible = false;
  isZoomInPossible = false;
  isZoomOutPossible = false;
  isZoomResetPossible = false;
  isSelectMode = false;
  isPanMode = false;

  //
  @Output() printButtonClick = new EventEmitter();
  @Output() exportButtonClick = new EventEmitter();
  @Output() deleteButtonClick = new EventEmitter();

  constructor(
    private diagramControlsService: DiagramControlsService,
    private diagramService: DiagramService,
  ) { }

  //#region lifecycle hooks

  ngOnInit() {
    this.diagramControlsService.requestFeed$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((event: DiagramControlsRequestArgs) => {
        switch (event.kind) {
          case 'IDiagramControlsPrintArgs':
            this.printInProgress = event.printInProgress;
            break;
          case 'IDiagramControlsExportArgs':
            this.exportInProgress = event.exportInProgress;
            break;
          case 'IDiagramControlsZoomArgs':
            this.isZoomInPossible = event.isZoomInPossible;
            this.isZoomOutPossible = event.isZoomOutPossible;
            this.isZoomResetPossible = event.isZoomResetPossible;
            break;
          case 'IDiagramControlsUndoRedoArgs':
            this.isUndoPossible = event.isUndoPossible;
            this.isRedoPossible = event.isRedoPossible;
            break;
          case 'IDiagramControlsToolArgs':
            this.isSelectMode = event.isSelectMode;
            this.isPanMode = event.isPanMode;
            break;
          case 'IDiagramControlsLockArgs':
            this.isLocked = event.isLocked;
            break;
          case 'IDiagramControlsDeleteArgs':
            this.deleteInProgress = event.deleteInProgress;
            break;
          default:
            break;
        }
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  //#endregion

  //#region callbacks

  onZoomInButtonClick() {
    this.diagramService.request({
      kind: 'IDiagramZoomRequestArgs',
      type: 'zoomIn',
    } as IDiagramZoomRequestArgs);
  }

  onZoomResetButtonClick() {
    this.diagramService.request({
      kind: 'IDiagramZoomRequestArgs',
      type: 'zoomReset',
    } as IDiagramZoomRequestArgs);
  }

  onZoomOutButtonClick() {
    this.diagramService.request({
      kind: 'IDiagramZoomRequestArgs',
      type: 'zoomOut',
    } as IDiagramZoomRequestArgs);
  }

  onCenterViewButtonClick() { 
    this.diagramService.request({
      kind: 'IDiagramZoomRequestArgs',
      type: 'centerView',
    } as IDiagramZoomRequestArgs);
  }

  onUndoButtonClick() {
    this.diagramService.request({
      kind: 'IDiagramUndoRedoRequestArgs',
      type: 'undo',
    } as IDiagramUndoRedoRequestArgs);
  }

  onRedoButtonClick() {
    this.diagramService.request({
      kind: 'IDiagramUndoRedoRequestArgs',
      type: 'redo',
    } as IDiagramUndoRedoRequestArgs);
  }

  onLockButtonClick() {
    this.diagramService.request({
      kind: 'IDiagramLockRequestArgs',
      type: 'lock',
    } as IDiagramLockRequestArgs);
  }

  onUnlockButtonClick() {
    this.diagramService.request({
      kind: 'IDiagramLockRequestArgs',
      type: 'unlock',
    } as IDiagramLockRequestArgs);
  }

  onSelectModeButtonClick() {
    this.diagramService.request({
      kind: 'IDiagramToolRequestArgs',
      type: 'select',
    } as IDiagramToolRequestArgs);
  }

  onPanModeButtonClick() {
    this.diagramService.request({
      kind: 'IDiagramToolRequestArgs',
      type: 'pan',
    } as IDiagramToolRequestArgs);
  }

  onLineConnectorSelect() {
    this.onItemSelect(SymbolIdConstants.LineConnector);
  }

  onLineConnector2WaySelect() {
    this.onItemSelect(SymbolIdConstants.LineConnectorTwoWay);
  }

  onElbowConnectorSelect() {
    this.onItemSelect(SymbolIdConstants.ElbowConnector);
  }

  onElbowConnector2WaySelect() {
    this.onItemSelect(SymbolIdConstants.ElbowConnectorTwoWay);
  }

  onCurvedConnectorSelect() {
    this.onItemSelect(SymbolIdConstants.CurvedConnector);
  }

  onCurvedConnector2WaySelect() {
    this.onItemSelect(SymbolIdConstants.CurvedConnectorTwoWay);
  }

  onCircleSelect() {
    this.onItemSelect(SymbolIdConstants.Circle);
  }

  onRectangleSelect() {
    this.onItemSelect(SymbolIdConstants.Rectangle);
  }

  onTextSelect() {
    this.onItemSelect(SymbolIdConstants.Text);
  }

  onCustomImageSelect() {
    this.onItemSelect(SymbolIdConstants.CustomImage);
  }

  //#endregion

  //#region private helper methods

  private onItemSelect(id: string) {

    const generalSymbolFamily = SymbolFamilyDefinitions
      .find(symbolFamilyDefinition => symbolFamilyDefinition.id === SymbolFamilyConstants.General);

    const connectorsSymbolGroup = generalSymbolFamily.SymbolGroups
      .find(symbolGroupDefinition => symbolGroupDefinition.id === SymbolGroupConstants.Connectors);

    const generalSymbolGroup = generalSymbolFamily.SymbolGroups
      .find(symbolGroupDefinition => symbolGroupDefinition.id === SymbolGroupConstants.General);

    const shapesSymbolGroup = generalSymbolFamily.SymbolGroups
      .find(symbolGroupDefinition => symbolGroupDefinition.id === SymbolGroupConstants.Shapes);

    const requestedSymbolFamilyId: SymbolFamilyConstants = SymbolFamilyConstants.General;
    let requestedSymbolGroupId: string;
    let requestedSymbolId: string;

    switch (id) {
      case SymbolIdConstants.LineConnector:
        requestedSymbolGroupId = connectorsSymbolGroup.id;
        requestedSymbolId = connectorsSymbolGroup.symbols.find(symbol => symbol.id === SymbolIdConstants.LineConnector).id;
        break;
      case SymbolIdConstants.LineConnectorTwoWay:
        requestedSymbolGroupId = connectorsSymbolGroup.id;
        requestedSymbolId = connectorsSymbolGroup.symbols.find(symbol => symbol.id === SymbolIdConstants.LineConnectorTwoWay).id;
        break;
      case SymbolIdConstants.ElbowConnector:
        requestedSymbolGroupId = connectorsSymbolGroup.id;
        requestedSymbolId = connectorsSymbolGroup.symbols.find(symbol => symbol.id === SymbolIdConstants.ElbowConnector).id;
        break;
      case SymbolIdConstants.ElbowConnectorTwoWay:
        requestedSymbolGroupId = connectorsSymbolGroup.id;
        requestedSymbolId = connectorsSymbolGroup.symbols.find(symbol => symbol.id === SymbolIdConstants.ElbowConnectorTwoWay).id;
        break;
      case SymbolIdConstants.CurvedConnector:
        requestedSymbolGroupId = connectorsSymbolGroup.id;
        requestedSymbolId = connectorsSymbolGroup.symbols.find(symbol => symbol.id === SymbolIdConstants.CurvedConnector).id;
        break;
      case SymbolIdConstants.CurvedConnectorTwoWay:
        requestedSymbolGroupId = connectorsSymbolGroup.id;
        requestedSymbolId = connectorsSymbolGroup.symbols.find(symbol => symbol.id === SymbolIdConstants.CurvedConnectorTwoWay).id;
        break;
      case SymbolIdConstants.Circle:
        requestedSymbolGroupId = shapesSymbolGroup.id;
        requestedSymbolId = shapesSymbolGroup.symbols.find(symbol => symbol.id === SymbolIdConstants.Circle).id;
        break;
      case SymbolIdConstants.Rectangle:
        requestedSymbolGroupId = shapesSymbolGroup.id;
        requestedSymbolId = shapesSymbolGroup.symbols.find(symbol => symbol.id === SymbolIdConstants.Rectangle).id;
        break;
      case SymbolIdConstants.CustomImage:
        requestedSymbolGroupId = generalSymbolGroup.id;
        requestedSymbolId = generalSymbolGroup.symbols.find(symbol => symbol.id === SymbolIdConstants.CustomImage).id;
        break;
      case SymbolIdConstants.Text:
      default:
        requestedSymbolGroupId = generalSymbolGroup.id;
        requestedSymbolId = generalSymbolGroup.symbols.find(symbol => symbol.id === SymbolIdConstants.Text).id;
        break;
    }

    this.diagramService.request({
      kind: 'IDiagramAddSymbolRequestArgs',
      symbolId: requestedSymbolId,
      symbolGroupId: requestedSymbolGroupId,
      symbolFamilyId: requestedSymbolFamilyId,
    });
  }

  //#endregion
}
