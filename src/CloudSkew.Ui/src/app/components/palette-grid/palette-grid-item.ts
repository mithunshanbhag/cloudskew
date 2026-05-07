import { SymbolFamilyConstants } from '../../constants/symbol-family-constants';

export interface IPaletteGridItem {
    familyId: SymbolFamilyConstants;
    groupId: string;
    groupDisplayName: string;
    groupTags?: string;
    symbolId: string;
    symbolDisplayName: string;
    symbolDescription?: string;
    symbolSvgUrl: string;
    symbolSynonyms?: string;
    hasDocs?: boolean;
}
