import { Component } from '@angular/core';
import { DiagramComponent as SyncfusionDiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import { ConnectorModel, NodeModel } from '@syncfusion/ej2-diagrams';
import { VisualPropertiesEditorService } from 'src/app/components/visual-properties-editor/visual-properties-editor.service';
import { TypeGuards } from 'src/app/utilities/type-guards';

@Component({
  selector: 'app-visual-properties-editor',
  templateUrl: './visual-properties-editor.component.html',
  styles: []
})
export class PropertiesEditorComponent {

  constructor(
    public visualPropertiesEditorService: VisualPropertiesEditorService,
  ) {
  }

  //#region utility methods

  selectedSymbolIsDiagramComponent(selectedSymbol: NodeModel | ConnectorModel | (NodeModel | ConnectorModel)[] | SyncfusionDiagramComponent): boolean {
    return TypeGuards.symbolIsDiagramComponent(selectedSymbol);
  }

  selectedSymbolIsMultiSelection(selectedSymbol: NodeModel | ConnectorModel | (NodeModel | ConnectorModel)[]): boolean {
    return TypeGuards.symbolIsMultiSelection(selectedSymbol);
  }

  selectedSymbolIsNodeModel(selectedSymbol: NodeModel | ConnectorModel): boolean {
    return TypeGuards.symbolIsNodeModel(selectedSymbol);
  }

  selectedSymbolIsConnectorModel(selectedSymbol: NodeModel | ConnectorModel): boolean {
    return TypeGuards.symbolIsConnectorModel(selectedSymbol);
  }

  selectedSymbolIsText(selectedSymbol: NodeModel): boolean {
    return TypeGuards.symbolIsText(selectedSymbol);
  }

  selectedSymbolIsBasicShape(selectedSymbol: NodeModel): boolean {
    return TypeGuards.symbolIsBasicShape(selectedSymbol);
  }

  selectedSymbolIsImage(selectedSymbol: NodeModel): boolean {
    return TypeGuards.symbolIsImage(selectedSymbol);
  }

  selectedSymbolIsNative(selectedSymbol: NodeModel): boolean {
    return TypeGuards.symbolIsNative(selectedSymbol);
  }

  selectedSymbolIsGroup(selectedSymbol: NodeModel): boolean {
    return TypeGuards.symbolIsGroup(selectedSymbol);
  }

  //#endregion utility methods
}
