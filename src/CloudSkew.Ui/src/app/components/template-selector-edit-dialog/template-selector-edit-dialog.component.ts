import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { of, Subject, timer } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { UIConstants } from 'src/app/constants/ui-constants';
import { ValidatorMessageConstants } from 'src/app/constants/validator-message-constants';
import { TemplateCompactDTO } from 'src/app/models/dto/templateCompactDTO';
import { APIService } from 'src/app/services/api.service';

@Component({
    selector: 'app-template-selector-edit-dialog',
    templateUrl: './template-selector-edit-dialog.component.html',
    styleUrls: ['./template-selector-edit-dialog.component.css'],
    standalone: false
})
export class TemplateSelectorEditDialogComponent implements OnInit, OnDestroy {

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
  templateNameEditorForm = new UntypedFormGroup({
    templateNameInputControl: new UntypedFormControl(
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
    private dialogRef: MatDialogRef<TemplateSelectorEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private template: TemplateCompactDTO,
  ) { }

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
      .subscribe(() => this.templateNameInputControl.setValue(this.template.name)); // clear out the text box value else it'll retain previous value.
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onSaveButtonClick(newTemplateName: string) {
    this.dialogRef.close(newTemplateName);
  }

  uniqueTemplateNameValidator(): AsyncValidatorFn {
    return (ctrl: AbstractControl) => {

      if (ctrl.value as string === this.template.name) {
        return of(null);
      }

      return timer(500).pipe(switchMap(() => { // debounce
        return this.apiService.templateGetByNameAsync(this.template.emailMD5, ctrl.value as string)
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
