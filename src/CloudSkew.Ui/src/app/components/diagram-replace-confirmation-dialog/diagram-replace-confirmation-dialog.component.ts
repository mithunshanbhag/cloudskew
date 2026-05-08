import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-diagram-replace-confirmation-dialog',
    templateUrl: './diagram-replace-confirmation-dialog.component.html',
    styles: [],
    standalone: false
})
export class DiagramReplaceConfirmationDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDiagramReplaceConfirmationDialogData,
  ) { }
}

export interface IDiagramReplaceConfirmationDialogData {
  title: string;
  message: string;
}
