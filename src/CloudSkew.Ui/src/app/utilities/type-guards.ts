import { DiagramComponent as SyncfusionDiagramComponent, ImageModel } from '@syncfusion/ej2-angular-diagrams';
import { BasicShapeModel, ConnectorModel, NativeModel, NodeModel, TextModel } from '@syncfusion/ej2-diagrams';

export class TypeGuards {

    static symbolIsDiagramComponent(symbol: unknown): symbol is SyncfusionDiagramComponent {
        return !!symbol && (symbol as SyncfusionDiagramComponent).pageSettings !== undefined;
    }

    static symbolIsMultiSelection(symbol: unknown): symbol is (NodeModel | ConnectorModel)[] {
        return Array.isArray(symbol);
    }

    static symbolIsNodeModel(symbol: unknown): symbol is NodeModel {
        return !!symbol && (symbol as NodeModel).height !== undefined;
    }

    static symbolIsConnectorModel(symbol: unknown): symbol is ConnectorModel {
        return !!symbol && (symbol as ConnectorModel).segments !== undefined;
    }

    static symbolIsBasicShape(symbol: NodeModel): boolean {
        return (symbol.shape as BasicShapeModel)?.type === 'Basic';
    }

    static symbolIsText(symbol: NodeModel): boolean {
        return (symbol.shape as TextModel)?.type === 'Text';
    }

    static symbolIsNative(symbol: NodeModel): boolean {
        return (symbol.shape as NativeModel)?.type === 'Native';
    }

    static symbolIsImage(symbol: NodeModel): boolean {
        return (symbol.shape as ImageModel)?.type === 'Image';
    }

    // @todo: investigate if there is a better way to do this?
    static symbolIsGroup(symbol: NodeModel): boolean {
        return TypeGuards.symbolIsBasicShape(symbol)
            && symbol.id.toLowerCase().startsWith('group')
            && symbol.children
            && symbol.children.length >= 0; // it's possible for a group to have zero children
    }
}
