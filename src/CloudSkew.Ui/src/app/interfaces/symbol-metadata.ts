import { SymbolFamilyConstants } from '../constants/symbol-family-constants';

export interface ISymbolMetadata {
    displayName: string;
    symbolId: string;
    symbolGroupId: string;
    symbolFamilyId: SymbolFamilyConstants;
    hasDocs: boolean;
    kind: 'NativeModel' | 'ImageModel' | 'ConnectorModel' | 'BasicShapeModel' | 'TextModel';
    modelKind: 'NodeModel' | 'ConnectorModel';
}
