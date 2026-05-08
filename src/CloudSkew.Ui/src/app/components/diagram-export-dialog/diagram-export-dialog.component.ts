import { Component } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ValidatorMessageConstants } from 'src/app/constants/validator-message-constants';

@Component({
    selector: 'app-diagram-export-dialog',
    templateUrl: './diagram-export-dialog.component.html',
    styleUrls: ['./diagram-export-dialog.component.css'],
    standalone: false
})
export class DiagramExportDialogComponent {

  //#region radio button
  controlName = 'radioButtonControl';
  optionsJpg = 'JPG';
  optionsPdf = 'PDF';
  optionsPng = 'PNG';
  optionsJson = 'JSON';
  optionsSvg = 'SVG';
  //#endregion radio button

  //#region validator messages
  requiredValidatorMessage = ValidatorMessageConstants.diagramExportOptionsRequiredValidator;
  //#endregion validator messages

  // the reactive form itself
  optionsForm = new UntypedFormGroup({
    radioButtonControl: new UntypedFormControl(
      this.optionsJpg, // selects this as the default/checked radio button
      [
        Validators.required
      ]
    )
  });

  constructor(
    public dialogRef: MatDialogRef<DiagramExportDialogComponent>,
  ) { }

  // get accessor for convenience
  get radioButtonControl(): AbstractControl {
    // note: we can also use the following forms to get the control
    // this.optionsForm.controls['radioButtonControl'];
    // this.optionsForm.get('radioButtonControl');
    return this.optionsForm.controls.radioButtonControl;
  }

  onExportButtonClick() {
    this.dialogRef.close(this.radioButtonControl.value);
  }
}
