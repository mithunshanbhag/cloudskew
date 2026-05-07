import { Component } from '@angular/core';
import { DiagramComponent as SyncfusionDiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import { ConnectorModel, NodeModel } from '@syncfusion/ej2-diagrams';
import { VisualPropertiesEditorService } from 'src/app/components/visual-properties-editor/visual-properties-editor.service';
import { TypeGuards } from 'src/app/utilities/type-guards';

type VisualPropertiesSymbol = NodeModel | ConnectorModel | (NodeModel | ConnectorModel)[] | SyncfusionDiagramComponent;

@Component({
    selector: 'app-visual-properties-editor',
    templateUrl: './visual-properties-editor.component.html',
    styles: [],
    standalone: false
})
export class PropertiesEditorComponent {

  constructor(
    public visualPropertiesEditorService: VisualPropertiesEditorService,
  ) {
  }

  //#region utility methods

  selectedSymbolIsDiagramComponent(selectedSymbol: VisualPropertiesSymbol): selectedSymbol is SyncfusionDiagramComponent {
    return TypeGuards.symbolIsDiagramComponent(selectedSymbol);
  }

  selectedSymbolIsMultiSelection(selectedSymbol: NodeModel | ConnectorModel | (NodeModel | ConnectorModel)[]): selectedSymbol is (NodeModel | ConnectorModel)[] {
    return TypeGuards.symbolIsMultiSelection(selectedSymbol);
  }

  selectedSymbolIsNodeModel(selectedSymbol: NodeModel | ConnectorModel): selectedSymbol is NodeModel {
    return TypeGuards.symbolIsNodeModel(selectedSymbol);
  }

  selectedSymbolIsConnectorModel(selectedSymbol: NodeModel | ConnectorModel): selectedSymbol is ConnectorModel {
    return TypeGuards.symbolIsConnectorModel(selectedSymbol);
  }

  selectedSymbolIsText(selectedSymbol: NodeModel | ConnectorModel): selectedSymbol is NodeModel {
    return TypeGuards.symbolIsNodeModel(selectedSymbol) && TypeGuards.symbolIsText(selectedSymbol);
  }

  selectedSymbolIsBasicShape(selectedSymbol: NodeModel | ConnectorModel): selectedSymbol is NodeModel {
    return TypeGuards.symbolIsNodeModel(selectedSymbol) && TypeGuards.symbolIsBasicShape(selectedSymbol);
  }

  selectedSymbolIsImage(selectedSymbol: NodeModel | ConnectorModel): selectedSymbol is NodeModel {
    return TypeGuards.symbolIsNodeModel(selectedSymbol) && TypeGuards.symbolIsImage(selectedSymbol);
  }

  selectedSymbolIsNative(selectedSymbol: NodeModel | ConnectorModel): selectedSymbol is NodeModel {
    return TypeGuards.symbolIsNodeModel(selectedSymbol) && TypeGuards.symbolIsNative(selectedSymbol);
  }

  selectedSymbolIsGroup(selectedSymbol: NodeModel | ConnectorModel): selectedSymbol is NodeModel {
    return TypeGuards.symbolIsNodeModel(selectedSymbol) && TypeGuards.symbolIsGroup(selectedSymbol);
  }

  //#endregion utility methods
}
