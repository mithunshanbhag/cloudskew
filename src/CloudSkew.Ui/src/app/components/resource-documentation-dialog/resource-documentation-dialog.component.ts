import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISymbolDefinition } from 'src/app/interfaces/symbol-definition';
import { SymbolDefinitionHelper } from 'src/app/utilities/symbol-definition-helper';
import { IResourceDocumentationItem } from '../../interfaces/resource-documentation-item';
import { IResourceDocumentationRequest } from '../../interfaces/resource-documentation-request';

@Component({
  selector: 'app-resource-documentation-dialog',
  templateUrl: './resource-documentation-dialog.component.html',
  styleUrls: ['./resource-documentation-dialog.component.css']
})
export class ResourceDocumentationDialogComponent {

  //
  symbol: ISymbolDefinition;
  symbolDocsData: IResourceDocumentationItem[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: IResourceDocumentationRequest,
  ) {
    this.symbol = SymbolDefinitionHelper.getSymbolDefinition(this.data.symbolId, this.data.symbolGroupId, this.data.symbolFamilyId);

    if (this.symbol) {
      this.symbolDocsData = [];
      for (const key in this.symbol.docs) {
        if (this.symbol.docs.hasOwnProperty(key)) {
          this.symbolDocsData.push({
            documentKey: key,
            documentValue: this.symbol.docs[key],
          });
        }
      }
    }
  }

}
