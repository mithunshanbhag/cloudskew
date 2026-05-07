import { SymbolFamilyConstants } from '../constants/symbol-family-constants';
import { ISymbolGroupDefinition } from './symbol-group-definition';

export interface ISymbolFamilyDefinition {
    id: SymbolFamilyConstants;
    displayName: string;
    SymbolGroups: ISymbolGroupDefinition[];
}
