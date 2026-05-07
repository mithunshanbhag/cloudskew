import { SymbolGroupConstants } from '../constants/symbol-group-constants';
import { ISymbolDefinition } from './symbol-definition';

export interface ISymbolGroupDefinition {
    id: SymbolGroupConstants; // [a-zA-Z0-9-]
    displayName: string;
    tags?: string[];
    symbols: ISymbolDefinition[];
}
