import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DiagramCompactDTO } from 'src/app/models/dto/diagramCompactDTO';

@Component({
  selector: 'app-diagram-selector-confirmation-dialog',
  templateUrl: './diagram-selector-confirmation-dialog.component.html',
  styles: []
})
export class DiagramSelectorConfirmationDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public diagramCompactDTO: DiagramCompactDTO,
  ) { }

  //#region lifecycle hooks

  //#endregion lifecycle hooks

  //#region callbacks

  //#endregion callbacks
}
