import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { Subject, timer } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { UIConstants } from 'src/app/constants/ui-constants';
import { ValidatorMessageConstants } from 'src/app/constants/validator-message-constants';
import { DiagramDTO } from 'src/app/models/dto/diagramDTO';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-diagram-save-template-dialog',
  templateUrl: './diagram-save-template-dialog.component.html',
  styleUrls: ['./diagram-save-template-dialog.component.css']
})
export class DiagramSaveTemplateDialogComponent implements OnInit, OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  // icons
  faSaveIcon = faSave;

  // layout
  visibleWidthInChars = UIConstants.visibleWidthInChars;

  // validator error messages
  requiredValidatorMessage = ValidatorMessageConstants.templateNameEditorRequiredValidator;
  minlengthValidatorMessage = ValidatorMessageConstants.templateNameEditorMinlengthValidator;
  maxLengthValidatorMessage = ValidatorMessageConstants.templateNameEditorMaxLengthValidator;
  patternValidatorMessage = ValidatorMessageConstants.templateNameEditorPatternValidator;
  uniqueNameValidatorMessage = ValidatorMessageConstants.templateNameEditorUniqueNameValidator;

  // the reactive form itself
  templateNameEditorForm = new FormGroup({
    templateNameInputControl: new FormControl(
      '',
      [ // sync validators
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
        Validators.pattern(/[a-zA-Z0-9]+/),
      ],
      [ // async validators
        this.uniqueTemplateNameValidator(),
      ]
    ),
  });

  constructor(
    private apiService: APIService,
    private dialogRef: MatDialogRef<DiagramSaveTemplateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private diagram: DiagramDTO,
  ) {
  }

  // get accessor for convenience
  get templateNameInputControl(): AbstractControl {
    // note: we can also use the following forms to get the control
    // this.templateNameEditorForm.controls['templateNameInputControl'];
    // this.templateNameEditorForm.get('templateNameInputControl');
    return this.templateNameEditorForm.controls.templateNameInputControl;
  }

  ngOnInit() {
    this.dialogRef.afterOpened()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => this.templateNameInputControl.reset()); // clear out the text box value else it'll retain previous value.
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onSaveButtonClick(templateName: string) {
    this.dialogRef.close(templateName);
  }

  uniqueTemplateNameValidator(): AsyncValidatorFn {
    return (ctrl: AbstractControl) => {

      return timer(500).pipe(switchMap(() => { // debounce
        return this.apiService.templateGetByNameAsync(this.diagram.emailMD5, ctrl.value as string)
          .pipe(
            map(apiResponse => {
              return (apiResponse && apiResponse.dto)
                ? { 'uniqueTemplateName': true } as ValidationErrors
                : null;
            }),
          );
      }));
    };
  }
}
