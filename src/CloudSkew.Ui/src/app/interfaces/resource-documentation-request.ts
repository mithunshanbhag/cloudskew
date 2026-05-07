import { SymbolFamilyConstants } from 'src/app/constants/symbol-family-constants';

export interface IResourceDocumentationRequest {
  symbolId: string;
  symbolGroupId: string;
  symbolFamilyId: SymbolFamilyConstants;
}