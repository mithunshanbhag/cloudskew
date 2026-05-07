import { SymbolFamilyConstants } from '../../constants/symbol-family-constants';

export interface IPreferenceGridItem {
    id: SymbolFamilyConstants; // [a-zA-Z0-9-]
    displayName: string;
    description?: string;
    enabled?: boolean;
}
