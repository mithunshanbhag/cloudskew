import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DiagramDTO } from 'src/app/models/dto/diagramDTO';

@Component({
  selector: 'app-diagram-print-dialog',
  templateUrl: './diagram-print-dialog.component.html',
  styles: []
})
export class DiagramPrintDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public diagram: DiagramDTO,
  ) { }

}