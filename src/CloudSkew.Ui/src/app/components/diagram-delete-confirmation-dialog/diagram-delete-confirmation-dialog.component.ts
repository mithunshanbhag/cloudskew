import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DiagramDTO } from 'src/app/models/dto/diagramDTO';

@Component({
  selector: 'app-diagram-delete-confirmation-dialog',
  templateUrl: './diagram-delete-confirmation-dialog.component.html',
  styles: []
})
export class DiagramDeleteConfirmationDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public diagram: DiagramDTO,
  ) { }
}
