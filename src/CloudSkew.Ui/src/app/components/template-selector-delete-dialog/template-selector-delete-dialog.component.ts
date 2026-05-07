import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TemplateCompactDTO } from 'src/app/models/dto/templateCompactDTO';

@Component({
  selector: 'app-template-selector-delete-dialog',
  templateUrl: './template-selector-delete-dialog.component.html',
  styles: []
})
export class TemplateSelectorDeleteDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public templateCompactDTO: TemplateCompactDTO,
  ) { }

  //#region lifecycle hooks

  //#endregion lifecycle hooks

  //#region callbacks

  //#endregion callbacks
}
