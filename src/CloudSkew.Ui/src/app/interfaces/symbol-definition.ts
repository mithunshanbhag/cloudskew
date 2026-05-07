import { ConnectorModel, NodeModel } from '@syncfusion/ej2-diagrams';

export interface ISymbolDefinition {
    kind: 'NativeModel' | 'ImageModel' | 'ConnectorModel' | 'BasicShapeModel' | 'TextModel';
    id: string; // [a-zA-Z0-9-]
    displayName: string;
    description?: string;
    svgUrl: string;
    synonyms?: string[];
    modelKind: 'NodeModel' | 'ConnectorModel';
    model?: NodeModel | ConnectorModel;
    docs?: Record<string, string>;
}
