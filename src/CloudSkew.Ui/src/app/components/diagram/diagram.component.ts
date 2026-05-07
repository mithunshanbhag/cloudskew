import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommandManagerModel, Connector, DiagramBeforeMenuOpenEventArgs, DiagramComponent as SyncFusionDiagramComponent, DiagramConstraints, DiagramTools, IClickEventArgs, ImageModel, IScrollChangeEventArgs, Node } from '@syncfusion/ej2-angular-diagrams';
import { FileInfo } from '@syncfusion/ej2-angular-inputs';
import { ConnectorModel, ContextMenuSettingsModel, FileFormats, ICollectionChangeEventArgs, IConnectionChangeEventArgs, IEndChangeEventArgs, IExportOptions, IHistoryChangeArgs, ISelectionChangeEventArgs, KeyModifiers, Keys, NativeModel, NodeModel, PageSettingsModel, PointModel, PointPortModel, RulerSettingsModel, ScrollSettingsModel, SnapConstraints, SnapSettingsModel } from '@syncfusion/ej2-diagrams';
import { BeforeOpenCloseMenuEventArgs, MenuEventArgs } from '@syncfusion/ej2-navigations';
import { interval, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { DiagramRequestArgs, DiagramService, IDiagramAddCustomImageRequestArgs, IDiagramSaveRequestArgs } from 'src/app/components/diagram/diagram.service';
import { VisualPropertiesEditorService } from 'src/app/components/visual-properties-editor/visual-properties-editor.service';
import { DiagramConstants } from 'src/app/constants/diagram-constants';
import { SymbolGroupConstants } from 'src/app/constants/symbol-group-constants';
import { SymbolIdConstants } from 'src/app/constants/symbol-id-constants';
import { UIConstants } from 'src/app/constants/ui-constants';
import { UrlConstants } from 'src/app/constants/url-constants';
import { WarningMessageConstants } from 'src/app/constants/warning-message-constants';
import { DiagramDTO } from 'src/app/models/dto/diagramDTO';
import { APIService } from 'src/app/services/api.service';
import { LoggingService } from 'src/app/services/logging.service';
import { NotificationService } from 'src/app/services/notification.service';
import { SessionService } from 'src/app/services/session.service';
import { DiagramComponentHelper } from 'src/app/utilities/diagram-component-helper';
import { SymbolDefinitionHelper } from 'src/app/utilities/symbol-definition-helper';
import { TypeGuards } from 'src/app/utilities/type-guards';
import { Md5 } from 'ts-md5';
import { SymbolFamilyConstants } from '../../constants/symbol-family-constants';
import { ISymbolDefinition } from '../../interfaces/symbol-definition';
import { DiagramControlsService, IDiagramControlsToolArgs } from '../diagram-controls/diagram-controls.service';
import { ImageUploadDialogComponent } from '../image-upload-dialog/image-upload-dialog.component';
import { IDiagramToolChangedEventArgs, StatusbarEventArgs, StatusbarService } from '../statusbar/statusbar.service';


@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styles: []
})
export class DiagramComponent implements OnInit, OnDestroy, OnChanges {

  // inputs
  @Input() diagram: DiagramDTO;

  // subscriptions
  private onDestroy$: Subject<void> = new Subject<void>();

  //
  private lastRecordedClickPosition: PointModel = {
    x: UIConstants.diagramControlSymbolDefaultOffsetX,
    y: UIConstants.diagramControlSymbolDefaultOffsetY,
  };

  //#region diagram settings
  @ViewChild('diagramControl') diagramControl: SyncFusionDiagramComponent;
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
  diagramControlRulerSettings: RulerSettingsModel = {
    showRulers: true,
    horizontalRuler: {
      interval: 10,
    },
    verticalRuler: {
      interval: 10,
    },
  };
  diagramControlContextMenuSettings: ContextMenuSettingsModel = {
    show: true,
    showCustomMenuOnly: false,
    items: [
      {
        id: 'delete',
        text: 'Delete',
      },
    ],
  };
  diagramControlSnapSettings: SnapSettingsModel = {
    constraints: SnapConstraints.All,
    horizontalGridlines: {
      lineIntervals: [1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75],
      snapIntervals: [10],
    },
    verticalGridlines: {
      lineIntervals: [1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75],
      snapIntervals: [10],
    },
  };
  diagramControlTool: DiagramTools = DiagramTools.Default; // set the diagram to selection mode
  diagramControlCommandManager: CommandManagerModel = {
    commands: [
      {
        name: 'zoom-in',
        canExecute: () => true,
        execute: () => DiagramComponentHelper.zoomIn(this.diagramControl),
        gesture: {
          key: Keys.Plus,
          keyModifiers: KeyModifiers.Control,
        },
      },
      {
        name: 'zoom-out',
        canExecute: () => true,
        execute: () => DiagramComponentHelper.zoomOut(this.diagramControl),
        gesture: {
          key: Keys.Minus,
          keyModifiers: KeyModifiers.Control,
        },
      },
    ],
  };

  //#endregion

  constructor(
    private notificationService: NotificationService,
    private visualPropertiesEditorService: VisualPropertiesEditorService,
    private apiService: APIService,
    private diagramControlsService: DiagramControlsService,
    private diagramService: DiagramService,
    private dialog: MatDialog,
    private statusbarService: StatusbarService,
    private sessionService: SessionService,
    private logger: LoggingService,
  ) { }

  //#region lifecycle hooks

  ngOnInit() {

    this.diagramService.requestFeed$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((event: DiagramRequestArgs) => {
        switch (event.kind) {
          case 'IDiagramAddSymbolRequestArgs':
            const symbol = SymbolDefinitionHelper.getSymbolDefinition(event.symbolId, event.symbolGroupId, event.symbolFamilyId);
            switch (symbol.kind) {
              case 'TextModel':
                this.addTextModelToDiagram(symbol);
                break;
              case 'ConnectorModel':
                this.addConnectorModelToDiagram(symbol);
                break;
              case 'BasicShapeModel':
                this.addBasicShapeModelToDiagram(symbol);
                break;
              case 'ImageModel':
                const dialogRef = this.dialog.open(ImageUploadDialogComponent, { width: UIConstants.imageUploadOptionsDialogWidth } as MatDialogConfig);
                dialogRef.afterClosed()
                  .pipe(
                    filter(result => !!result),
                    takeUntil(this.onDestroy$)
                  )
                  .subscribe(result => this.addCustomImage(result));
                break;
              case 'NativeModel':
                this.addNativeModelToDiagram(symbol, event.symbolGroupId, event.symbolFamilyId);
                break;
            }
            break;
          case 'IDiagramAddCustomImageRequestArgs':
            this.addImageModelToDiagram(event);
            break;
          case 'IDiagramExportRequestArgs':
            this.export(event.format);
            break;
          case 'IDiagramPrintRequestArgs':
            this.print();
            break;
          case 'IDiagramUploadThumbnailRequestArgs':
            this.uploadThumbnail();
            break;
          case 'IDiagramZoomRequestArgs':
            switch (event.type) {
              case 'zoomIn':
                DiagramComponentHelper.zoomIn(this.diagramControl);
                break;
              case 'zoomReset':
                DiagramComponentHelper.zoomReset(this.diagramControl);
                break;
              case 'zoomOut':
                DiagramComponentHelper.zoomOut(this.diagramControl);
                break;
              case 'centerView':
                DiagramComponentHelper.resetView(this.diagramControl);
                break;
            }
            break;
          case 'IDiagramToolRequestArgs':
            switch (event.type) {
              case 'select':
                this.setSelectMode();
                break;
              case 'pan':
                this.setPanMode();
                break;
            }
            break;
          case 'IDiagramAlignRequestArgs':
            DiagramComponentHelper.align(this.diagramControl, event.type, event.symbolIds);
            break;
          case 'IDiagramDistributeRequestArgs':
            DiagramComponentHelper.distribute(this.diagramControl, event.type, event.symbolIds);
            break;
          case 'IDiagramUndoRedoRequestArgs':
            switch (event.type) {
              case 'undo':
                this.diagramControl.undo();
                break;
              case 'redo':
                this.diagramControl.redo();
                break;
            }
            break;
          case 'IDiagramLockRequestArgs':
            switch (event.type) {
              case 'lock':
                this.lock();
                break;
              case 'unlock':
                this.unlock();
                break;
            }
            break;
          case 'IDiagramUpdateViewPortRequestArgs':
            this.diagramControl.updateViewPort();
            break;
          case 'IDiagramSaveRequestArgs':
            this.save(event.force);
            break;
        }
      });

    interval(10000)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.diagramService.request({
          kind: 'IDiagramSaveRequestArgs',
          force: false,
        } as IDiagramSaveRequestArgs);
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.diagram && !changes.diagram.firstChange) {
      this.initialize();
    }
  }

  //#endregion lifecycle hooks

  //#region callbacks

  diagramControlGetConnectorDefaults(connector: Connector): ConnectorModel {
    return {
      annotations: DiagramConstants.defaultConnectorAnnotationModels,
      constraints: DiagramConstants.defaultConnectorConstraints,
      cornerRadius: DiagramConstants.defaultConnectorCornerRadius,
      style: DiagramConstants.defaultConnectorStyle,
    } as ConnectorModel;
  }

  diagramControlGetNodeDefaults(node: Node): NodeModel {
    return {
      height: UIConstants.diagramControlSymbolDefaultHeight,
      width: UIConstants.diagramControlSymbolDefaultWidth,
      constraints: DiagramConstants.defaultNodeConstraints,
      ports: DiagramConstants.defaultNodePorts,
      // see: https://www.syncfusion.com/forums/171536/error-while-ungrouping-symbols-typeerror-labelsj-is-undefined
      annotations: TypeGuards.symbolIsGroup(node) ? undefined : DiagramConstants.defaultShapeAnnotationModels,
    } as NodeModel;
  }

  onDiagramControlCreated() {
    this.initialize();
  }

  onDiagramControlSelectionChange(args: ISelectionChangeEventArgs) {
    if (DiagramComponentHelper.isLocked(this.diagramControl)) { // if diagram is locked, then ignore everything
      this.showDiagramNotEditableNotification();
      return;
    }

    if (args.state === 'Changed') {
      switch (args.newValue.length) {
        case 0:
          this.visualPropertiesEditorService.request(this.diagramControl);
          break;
        case 1:
          this.visualPropertiesEditorService.request(args.newValue[0]);
          break;
        default:
          this.visualPropertiesEditorService.request(args.newValue);
          break;
      }
    }
  }

  onDiagramControlHistoryChange(args: IHistoryChangeArgs) {
    this.diagramControlsService.request({
      kind: 'IDiagramControlsUndoRedoArgs',
      isUndoPossible: this.diagramControl.historyManager.undoStack.length > 0,
      isRedoPossible: this.diagramControl.historyManager.redoStack.length > 0,
    });
  }

  onDiagramControlScrollChange(args: IScrollChangeEventArgs) {

    this.diagramControlsService.request({
      kind: 'IDiagramControlsZoomArgs',
      isZoomInPossible: DiagramComponentHelper.isZoomInPossible(this.diagramControl),
      isZoomOutPossible: DiagramComponentHelper.isZoomOutPossible(this.diagramControl),
      isZoomResetPossible: DiagramComponentHelper.isZoomResetPossible(this.diagramControl),
    });

    this.statusbarService.request({
      kind: 'IDiagramZoomChangedEventArgs',
      value: args.newValue.CurrentZoom,
    } as StatusbarEventArgs);
  }

  onDiagramControlClick(args: IClickEventArgs) {
    if (args.position) {
      this.lastRecordedClickPosition = args.position;
    }
  }

  onDiagramControlContextMenuOpen(args: BeforeOpenCloseMenuEventArgs) {
    // if diagram locked, then hide all context menu items
    if (DiagramComponentHelper.isLocked(this.diagramControl) || DiagramComponentHelper.isPanMode(this.diagramControl)) {
      for (const item of args.items) {
        (args as DiagramBeforeMenuOpenEventArgs).hiddenItems.push(item.id);
      }
      this.showDiagramNotEditableNotification();
    } else {
      for (const item of args.items) {
        switch (item.id) {
          case 'delete': // if no nodes/connectors are selected, then hide the 'delete' item from context menu.
            if (!this.diagramControl.selectedItems.nodes.length && !this.diagramControl.selectedItems.connectors.length) {
              (args as DiagramBeforeMenuOpenEventArgs).hiddenItems.push(item.id);
            }
            break;
        }
      }
    }
  }

  onDiagramControlContextMenuClick(args: MenuEventArgs) {
    if (args.item && args.item.id) {
      switch (args.item.id) {
        case 'delete':
          for (const node of this.diagramControl.selectedItems.nodes) {
            this.diagramControl.remove(node);
          }
          for (const connector of this.diagramControl.selectedItems.connectors) {
            this.diagramControl.remove(connector);
          }
          this.diagramControl.dataBind();
          break;
      }
    }
  }

  onDiagramControlSourceOrTargetPointChange(args: IEndChangeEventArgs) {
    if (args.state === 'Completed') {
      this.pruneNodes(this.diagramControl.nodes, this.diagramControl.connectors);
      this.diagramControl.dataBind();
    }
  }

  onDiagramControlConnectionChange(args: IConnectionChangeEventArgs) {
    if (args.state === 'Changed') {
      this.pruneNodes(this.diagramControl.nodes, this.diagramControl.connectors);
      this.diagramControl.dataBind();
    }
  }

  onDiagramControlCollectionChange(args: ICollectionChangeEventArgs) {
    if (args.state === 'Changed') {
      this.pruneNodes(this.diagramControl.nodes, this.diagramControl.connectors);
      this.diagramControl.dataBind();
    }
  }

  //#endregion callbacks

  //#region private methods

  private initialize() {
    this.diagramControl.clear();

    if (this.diagram) {
      if (!this.diagram.diagramDetails) {
        this.diagram.diagramDetails = this.diagramControl.saveDiagram();
      }

      const updatedDiagramDetails = this.getUpdatedDiagramDetails();
      this.diagramControl.loadDiagram(updatedDiagramDetails);

      this.setSelectMode();

      this.diagramControl.updateViewPort();

      this.uploadThumbnail();

      this.diagramControlsService.request({
        kind: 'IDiagramControlsLockArgs',
        isLocked: DiagramComponentHelper.isLocked(this.diagramControl),
      });

      this.diagramControlsService.request({
        kind: 'IDiagramControlsZoomArgs',
        isZoomInPossible: DiagramComponentHelper.isZoomInPossible(this.diagramControl),
        isZoomOutPossible: DiagramComponentHelper.isZoomOutPossible(this.diagramControl),
        isZoomResetPossible: DiagramComponentHelper.isZoomResetPossible(this.diagramControl),
      });

      // properties bar should display diagram page properties when diagram is unlocked
      this.visualPropertiesEditorService.request(DiagramComponentHelper.isLocked(this.diagramControl) ? null : this.diagramControl);

      this.statusbarService.request({
        kind: 'IDiagramZoomChangedEventArgs',
        value: this.diagramControl.scrollSettings.currentZoom,
      } as StatusbarEventArgs);
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
    (diagramDetailsObj.snapSettings as SnapSettingsModel) = this.diagramControlSnapSettings;
    (diagramDetailsObj.contextMenuSettings as ContextMenuSettingsModel) = this.diagramControlContextMenuSettings;
    (diagramDetailsObj.commandManager as CommandManagerModel) = this.diagramControlCommandManager;
    (diagramDetailsObj.rulerSettings as RulerSettingsModel) = this.diagramControlRulerSettings;
    // now that we've replaced [nodeDefaults] with [getNodeDefaults] and [connectorDefaults] with [getConnectorDefaults]
    // respectively, we can safely null out the [nodeDefaults] and [connectorDefaults] properties from the json.
    (diagramDetailsObj.nodeDefaults as NodeModel) = undefined; // see note above
    (diagramDetailsObj.connectorDefaults as ConnectorModel) = undefined; // see note above
    (diagramDetailsObj.nodes as NodeModel[]) = this.pruneNodes(
      diagramDetailsObj.nodes as NodeModel[],
      diagramDetailsObj.connectors as ConnectorModel[]);
    (diagramDetailsObj.nodes as NodeModel[]) = this.pruneGhostGroups<NodeModel>(diagramDetailsObj.nodes as NodeModel[]);
    (diagramDetailsObj.connectors as ConnectorModel[]) = this.pruneGhostGroups<ConnectorModel>(diagramDetailsObj.connectors as ConnectorModel[]);
    return JSON.stringify(diagramDetailsObj);
  }

  private pruneGhostGroups<TObject>(items: TObject[]): TObject[] {
    for (let item of items) {
      const itemParentId = (item as any).parentId;
      if (itemParentId) {
        if (!this.diagramControl.getNodeObject(itemParentId)) {
          (item as any).parentId = '';
          this.logger.logWarning(`Pruning ghost group: ${itemParentId}`, window.location.href, this.sessionService.user);
        }
      }
    }
    return items;
  }

  // remove ghost connectors from nodes
  private pruneNodes(nodes: NodeModel[], existingConnectors: readonly ConnectorModel[]): NodeModel[] {
    for (let node of nodes) {
      node = this.pruneNode(node, existingConnectors);
    }
    return nodes;
  }

  private pruneNode(node: NodeModel, existingConnectors: readonly ConnectorModel[]): NodeModel {
    (node as any).inEdges = this.pruneNodeInEdges(node, existingConnectors);
    (node as any).outEdges = this.pruneNodeOutEdges(node, existingConnectors);

    for (const port of node.ports) {
      port.inEdges = this.prunePortInEdges(node, port, existingConnectors);
      port.outEdges = this.prunePortOutEdges(node, port, existingConnectors);
    }

    return node;
  }

  private pruneNodeInEdges(node: Readonly<NodeModel>, existingConnectors: readonly ConnectorModel[]): string[] {
    const nodeInEdges: string[] = (node as any).inEdges;
    const existingConnectorIdsWithNodeAsTarget = existingConnectors
      .filter(connector => connector.targetID === node.id)
      .map(connector => connector.id);

    const ghostConnectorIds = nodeInEdges.filter(cId => existingConnectorIdsWithNodeAsTarget.indexOf(cId) === -1);
    for (const ghostConnectorId of ghostConnectorIds) {
      this.logger.logWarning(`Pruning ghost connector: ${ghostConnectorId} from node: ${node.id} inEdges`, window.location.href, this.sessionService.user);
    }

    return nodeInEdges.filter(edge => existingConnectorIdsWithNodeAsTarget.indexOf(edge) !== -1); // return pruned set
  }

  private pruneNodeOutEdges(node: Readonly<NodeModel>, existingConnectors: readonly ConnectorModel[]): string[] {
    const nodeOutEdges: string[] = (node as any).outEdges;
    const existingConnectorIdsWithNodeAsSource = existingConnectors
      .filter(connector => connector.sourceID === node.id)
      .map(connector => connector.id);

    const ghostConnectorIds = nodeOutEdges.filter(cId => existingConnectorIdsWithNodeAsSource.indexOf(cId) === -1);
    for (const ghostConnectorId of ghostConnectorIds) {
      this.logger.logWarning(`Pruning ghost connector: ${ghostConnectorId} from node: ${node.id} outEdges`, window.location.href, this.sessionService.user);
    }

    return nodeOutEdges.filter(edge => existingConnectorIdsWithNodeAsSource.indexOf(edge) !== -1); // return pruned set
  }

  private prunePortInEdges(node: Readonly<NodeModel>, port: Readonly<PointPortModel>, existingConnectors: readonly ConnectorModel[]): string[] {
    const portInEdges: string[] = port.inEdges;
    const existingConnectorIdsWithPortAsTarget = existingConnectors
      .filter(connector => connector.targetPortID === port.id && connector.targetID === node.id)
      .map(connector => connector.id);

    const ghostConnectorIds = portInEdges.filter(cId => existingConnectorIdsWithPortAsTarget.indexOf(cId) === -1);
    for (const ghostConnectorId of ghostConnectorIds) {
      this.logger.logWarning(`Pruning ghost connector: ${ghostConnectorId} from port: ${port.id} inEdges`, window.location.href, this.sessionService.user);
    }

    return portInEdges.filter(edge => existingConnectorIdsWithPortAsTarget.indexOf(edge) !== -1); // return pruned set
  }

  private prunePortOutEdges(node: Readonly<NodeModel>, port: Readonly<PointPortModel>, existingConnectors: readonly ConnectorModel[]): string[] {
    const portOutEdges: string[] = port.outEdges;
    const existingConnectorIdsWithPortAsSource = existingConnectors
      .filter(connector => connector.sourcePortID === port.id && connector.sourceID === node.id)
      .map(connector => connector.id);

    const ghostConnectorIds = portOutEdges.filter(cId => existingConnectorIdsWithPortAsSource.indexOf(cId) === -1);
    for (const ghostConnectorId of ghostConnectorIds) {
      this.logger.logWarning(`Pruning ghost connector: ${ghostConnectorId} from port: ${port.id} outEdges`, window.location.href, this.sessionService.user);
    }

    return portOutEdges.filter(edge => existingConnectorIdsWithPortAsSource.indexOf(edge) !== -1); // return pruned set
  }

  // note: please do not use this method directly to save the diagram. Instead call the request()
  // method on DiagramService
  private save(force: boolean) {
    this.diagramControl.dataBind();
    this.diagram.diagramDetails = this.diagramControl.saveDiagram();

    const diagramDtoMd5 = Md5.hashStr(JSON.stringify(this.diagram)) as string;

    // check with last write to db
    if (force || diagramDtoMd5 !== this.sessionService.lastFlushedDiagramDtoMd5) {

      // flush to db
      this.apiService.diagramUpdateAsync(this.diagram.emailMD5, this.diagram.id, this.diagram)
        .pipe(
          filter(apiResponse => !apiResponse.error),
          map(apiResponse => apiResponse.dto),
          takeUntil(this.onDestroy$))
        .subscribe(() => this.sessionService.lastFlushedDiagramDtoMd5 = diagramDtoMd5);
    }
  }

  private addCustomImage(args: any) {
    const containerName = this.sessionService.user;
    const blobName = (args.file as FileInfo).name;
    const uploadedBlobUri = `${UrlConstants.customImagesUrlPrefix}/${containerName}/${blobName}`;

    this.diagramService.request({
      kind: 'IDiagramAddCustomImageRequestArgs',
      source: uploadedBlobUri,
      sizeInBytes: (args.file as FileInfo).size,
      type: (args.file as FileInfo).type,
    } as IDiagramAddCustomImageRequestArgs);
  }

  private addNativeModelToDiagram(symbol: ISymbolDefinition, symbolGroupId: string, symbolFamilyId: SymbolFamilyConstants) {
    if (DiagramComponentHelper.isLocked(this.diagramControl) || DiagramComponentHelper.isPanMode(this.diagramControl)) {
      this.showDiagramNotEditableNotification();
      return;
    }

    this.apiService.getFileAsStringAsync(symbol.svgUrl)
      .pipe(
        filter(apiResponse => !apiResponse.error),
        // please see the following for more context:
        // - https://www.syncfusion.com/forums/148545/diagramcomponent39s-nodedefaults-for-svg-nativemodel-ignored-in-firefox
        // - https://www.syncfusion.com/forums/148546/diagramcomponent-quotcorruptsquot-the-svg-nativemodel
        map(apiResponse => apiResponse.dto.replace(/<svg.*>/ig, '<g>').replace(/<\/svg>/ig, '</g>')),
        takeUntil(this.onDestroy$),
      )
      .subscribe(dto => {
        const node: NodeModel = {
          addInfo: SymbolDefinitionHelper.generateMetadataForSymbolDefinition(symbol, symbolGroupId, symbolFamilyId),
          tooltip: {
            content: symbol.displayName,
          },
          shape: {
            type: 'Native',
            content: dto
          } as NativeModel
        };
        node.offsetX = this.lastRecordedClickPosition.x;
        node.offsetY = this.lastRecordedClickPosition.y;

        const addedNode = this.diagramControl.addNode(node);
        this.diagramControl.select([addedNode]);
        return addedNode;
      });
  }

  private addImageModelToDiagram(args: IDiagramAddCustomImageRequestArgs): Node | Connector {
    if (DiagramComponentHelper.isLocked(this.diagramControl) || DiagramComponentHelper.isPanMode(this.diagramControl)) {
      this.showDiagramNotEditableNotification();
      return;
    }

    const symbol = SymbolDefinitionHelper.getSymbolDefinition(SymbolIdConstants.CustomImage, SymbolGroupConstants.General, SymbolFamilyConstants.General);

    symbol.model.tooltip = {
      content: symbol.displayName,
    };
    (symbol.model.shape as ImageModel).source = args.source;
    (symbol.model as NodeModel).offsetX = this.lastRecordedClickPosition.x;
    (symbol.model as NodeModel).offsetY = this.lastRecordedClickPosition.y;

    const addedNode = this.diagramControl.add(symbol.model);
    this.diagramControl.select([addedNode]);
    return addedNode;
  }

  private addBasicShapeModelToDiagram(symbol: ISymbolDefinition): Node | Connector {
    if (DiagramComponentHelper.isLocked(this.diagramControl) || DiagramComponentHelper.isPanMode(this.diagramControl)) {
      this.showDiagramNotEditableNotification();
      return;
    }

    symbol.model.tooltip = {
      content: symbol.displayName,
    };
    (symbol.model as NodeModel).offsetX = this.lastRecordedClickPosition.x;
    (symbol.model as NodeModel).offsetY = this.lastRecordedClickPosition.y;

    const addedNode = this.diagramControl.add(symbol.model);
    this.diagramControl.select([addedNode]);
    return addedNode;
  }

  private addTextModelToDiagram(symbol: ISymbolDefinition): Node | Connector {
    if (DiagramComponentHelper.isLocked(this.diagramControl) || DiagramComponentHelper.isPanMode(this.diagramControl)) {
      this.showDiagramNotEditableNotification();
      return;
    }

    symbol.model.annotations = []; // because we don't want default annotations for texts.
    symbol.model.tooltip = {
      content: symbol.displayName,
    };
    (symbol.model as NodeModel).offsetX = this.lastRecordedClickPosition.x;
    (symbol.model as NodeModel).offsetY = this.lastRecordedClickPosition.y;

    const addedNode = this.diagramControl.add(symbol.model);
    this.diagramControl.select([addedNode]);
    return addedNode;
  }

  private addConnectorModelToDiagram(symbol: ISymbolDefinition, useDefault?: boolean): Node | Connector {
    if (DiagramComponentHelper.isLocked(this.diagramControl) || DiagramComponentHelper.isPanMode(this.diagramControl)) {
      this.showDiagramNotEditableNotification();
      return;
    }

    symbol.model.tooltip = {
      content: symbol.displayName,
    };
    (symbol.model as ConnectorModel).sourcePoint = this.getSourcePointForConnectorPlacement(useDefault);
    (symbol.model as ConnectorModel).targetPoint = this.getTargetPointForConnectorPlacement(useDefault);

    const addedConnector = this.diagramControl.add(symbol.model);
    this.diagramControl.select([addedConnector]);
    return addedConnector;
  }

  private getSourcePointForConnectorPlacement(useDefault?: boolean): PointModel {
    return {
      x: useDefault
        ? (UIConstants.diagramControlSymbolDefaultWidth / 2)
        : this.lastRecordedClickPosition.x - (UIConstants.diagramControlSymbolDefaultWidth / 2),
      y: useDefault
        ? (UIConstants.diagramControlSymbolDefaultHeight / 2)
        : this.lastRecordedClickPosition.y - (UIConstants.diagramControlSymbolDefaultHeight / 2),
    };
  }

  private getTargetPointForConnectorPlacement(useDefault?: boolean): PointModel {
    return {
      x: useDefault
        ? (UIConstants.diagramControlSymbolDefaultWidth / 2)
        : this.lastRecordedClickPosition.x + (UIConstants.diagramControlSymbolDefaultWidth / 2),
      y: useDefault
        ? (UIConstants.diagramControlSymbolDefaultHeight / 2)
        : this.lastRecordedClickPosition.y + (UIConstants.diagramControlSymbolDefaultHeight / 2),
    };
  }

  private print() {
    const imageConversionRequest = DiagramComponentHelper.generateImageGenerationRequest(this.diagramControl, 'JPG'); // using 'JPG' as a default format.
    this.diagramControlsService.request({
      kind: 'IDiagramControlsPrintArgs',
      printInProgress: true,
    });

    this.apiService.generateImageAsync(this.sessionService.user, imageConversionRequest)
      .pipe(
        tap(() => this.diagramControlsService.request({
          kind: 'IDiagramControlsPrintArgs',
          printInProgress: false,
        })),
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$),
      )
      .subscribe(dto => {
        const exportOptions = this.generateExportOptions();
        this.diagramControl.printImage(dto, exportOptions);
        this.uploadThumbnail(); // might as well upload a thumbnail at the same time.
      });
  }

  private uploadThumbnail() {
    const imageGenerationRequest = DiagramComponentHelper.generateImageGenerationRequest(this.diagramControl, 'JPG'); // using 'JPG' as a default format.
    this.apiService.uploadThumbnailAsync(this.sessionService.user, this.diagram.id, imageGenerationRequest)
      .pipe(
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$),
      )
      .subscribe(); // do nothing
  }

  private export(format: FileFormats | 'PDF' | 'JSON') {
    switch (format) {
      case 'JSON':
        this.exportAsJson();
        break;

      case 'PDF':
        this.exportAsPdf();
        break;

      case 'SVG':
        this.exportAsSvg();
        break;

      default:
        this.exportAsImage(format as FileFormats);
        break;
    }
  }

  private exportAsJson() {
    const rawDiagramJson = this.diagramControl.saveDiagram();
    const encodedDiagramJson = encodeURIComponent(rawDiagramJson);
    const encodedDiagramJsonAsDataUrl = `data:text/json;charset=utf-8,${encodedDiagramJson}`;
    this.showDownloadableContent(encodedDiagramJsonAsDataUrl, 'JSON');
    this.uploadThumbnail(); // might as well upload a thumbnail at the same time.
  }

  private exportAsPdf() {
    const imageConversionRequest = DiagramComponentHelper.generateImageGenerationRequest(this.diagramControl, 'PDF');
    this.diagramControlsService.request({
      kind: 'IDiagramControlsExportArgs',
      exportInProgress: true,
    });

    this.apiService.generateImageAsync(this.sessionService.user, imageConversionRequest)
      .pipe(
        tap(() => this.diagramControlsService.request({
          kind: 'IDiagramControlsExportArgs',
          exportInProgress: false
        })),
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$),
      )
      .subscribe(dto => {
        this.showDownloadableContent(dto, 'PDF');
        this.uploadThumbnail(); // might as well upload a thumbnail at the same time.
      });
  }

  private exportAsSvg() {
    const imageConversionRequest = DiagramComponentHelper.generateImageGenerationRequest(this.diagramControl, 'SVG');
    this.diagramControlsService.request({
      kind: 'IDiagramControlsExportArgs',
      exportInProgress: true,
    });

    this.apiService.generateImageAsync(this.sessionService.user, imageConversionRequest)
      .pipe(
        tap(() => this.diagramControlsService.request({
          kind: 'IDiagramControlsExportArgs',
          exportInProgress: false
        })),
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$),
      )
      .subscribe(dto => {
        this.showDownloadableContent(dto, 'SVG');
        this.uploadThumbnail(); // might as well upload a thumbnail at the same time.
      });
  }

  private exportAsImage(format: FileFormats) {
    const imageConversionRequest = DiagramComponentHelper.generateImageGenerationRequest(this.diagramControl, format);
    this.diagramControlsService.request({
      kind: 'IDiagramControlsExportArgs',
      exportInProgress: true,
    });

    this.apiService.generateImageAsync(this.sessionService.user, imageConversionRequest)
      .pipe(
        tap(() => this.diagramControlsService.request({
          kind: 'IDiagramControlsExportArgs',
          exportInProgress: false
        })),
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$),
      )
      .subscribe(dto => {
        this.showDownloadableContent(dto, format);
        this.uploadThumbnail(); // might as well upload a thumbnail at the same time.
      });
  }

  // There are multiple ways to download a file.
  // 1: Dynamically create an '<a href="url" download="filename">' tag and click on it (simplest).
  // 2: Use 'window.navigator.msSaveBlob'. However it is deprecated now.
  // 3: Use an external NPM package like 'filesaver.js'.
  //
  // We have opted for the simplest option (#1).
  // Below snippet is almost copy-pasted from Syncfusion's showcase diagram app.
  //
  // Useful reference links:
  // - https://github.com/syncfusion/ej2-showcase-angular-diagrambuilder/blob/2368a669afc62068cdee8cae47b96813b5936915/src/app/scripts/commoncommands.ts#L25
  // - https://stackoverflow.com/a/42696866
  private showDownloadableContent(dataUrl: string, format: FileFormats | 'PDF' | 'JSON') {
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = dataUrl;
    a.download = `${this.diagram.name}.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  private generateExportOptions(name?: string, fileFormat?: FileFormats): IExportOptions {
    return {
      region: 'PageSettings',
      mode: 'Download',
      fileName: name,
      format: fileFormat,
    } as IExportOptions;
  }

  private lock() {
    DiagramComponentHelper.lock(this.diagramControl);

    this.diagramControlsService.request({
      kind: 'IDiagramControlsLockArgs',
      isLocked: true,
    });

    // properties bar should be empty when diagram is locked
    this.visualPropertiesEditorService.request(null);
  }

  private unlock() {
    DiagramComponentHelper.unlock(this.diagramControl);

    this.diagramControlsService.request({
      kind: 'IDiagramControlsLockArgs',
      isLocked: false,
    });

    // properties bar should display diagram page properties when diagram is unlocked
    this.visualPropertiesEditorService.request(this.diagramControl);
  }

  private showDiagramNotEditableNotification() {
    if (DiagramComponentHelper.isLocked(this.diagramControl)) {
      this.notificationService.request({
        kind: 'IDiagramNotificationRequestArgs',
        type: 'info',
        title: 'Diagram is Locked',
        content: WarningMessageConstants.diagramLockedWarning
      });
    } else if (DiagramComponentHelper.isPanMode(this.diagramControl)) {
      this.notificationService.request({
        kind: 'IDiagramNotificationRequestArgs',
        type: 'info',
        title: 'Diagram is in Pan Mode',
        content: WarningMessageConstants.diagramPanModeWarning
      });
    }
  }

  private setSelectMode() {
    DiagramComponentHelper.setSelectMode(this.diagramControl);

    this.diagramControlsService.request({
      kind: 'IDiagramControlsToolArgs',
      isPanMode: false,
      isSelectMode: true,
    } as IDiagramControlsToolArgs);

    this.statusbarService.request({
      kind: 'IDiagramToolChangedEventArgs',
      value: 'select/edit',
    } as IDiagramToolChangedEventArgs);
  }

  private setPanMode() {
    DiagramComponentHelper.setPanMode(this.diagramControl);

    this.diagramControlsService.request({
      kind: 'IDiagramControlsToolArgs',
      isPanMode: true,
      isSelectMode: false,
    } as IDiagramControlsToolArgs);

    this.statusbarService.request({
      kind: 'IDiagramToolChangedEventArgs',
      value: 'pan/swipe',
    } as IDiagramToolChangedEventArgs);
  }

  //#endregion private methods
}
