import { SymbolFamilyDefinitions } from '../constants/symbol-family-definitions';
import { SymbolFamilyConstants } from '../constants/symbol-family-constants';
import { ISymbolDefinition } from '../interfaces/symbol-definition';
import { ISymbolMetadata } from '../interfaces/symbol-metadata';

export class SymbolDefinitionHelper {

    static getSymbolDefinition(symbolId: string, symbolGroupId: string, symbolFamilyId: SymbolFamilyConstants): ISymbolDefinition {
        const symbolFamily = SymbolFamilyDefinitions.find(symbolFamilyDefinition => symbolFamilyDefinition.id === symbolFamilyId);
        const symbolGroup = symbolFamily.SymbolGroups.find(symbolGroupDefinition => symbolGroupDefinition.id === symbolGroupId);
        const symbolToAdd = symbolGroup.symbols.find(symbolDefinition => symbolDefinition.id === symbolId);
        return symbolToAdd;
    }

    static generateMetadataForSymbolDefinition(symbol: ISymbolDefinition, symbolGroupId: string, symbolFamilyId: SymbolFamilyConstants): ISymbolMetadata {
        return {
            displayName: symbol.displayName,
            symbolId: symbol.id,
            symbolGroupId, // shorthand for: symbolGroupId: symbolGroupId
            symbolFamilyId, // shorthand for: symbolFamilyId: symbolFamilyId
            hasDocs: symbol.docs ? true : false,
            kind: symbol.kind,
            modelKind: symbol.modelKind,
        } as ISymbolMetadata;
    }
}
