import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { faPencilAlt, faSave, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { of, Subject, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UIConstants } from 'src/app/constants/ui-constants';
import { ValidatorMessageConstants } from 'src/app/constants/validator-message-constants';
import { DiagramDTO } from 'src/app/models/dto/diagramDTO';
import { APIService } from 'src/app/services/api.service';
import { DiagramSelectorGridService } from '../diagram-selector-grid/diagram-selector-grid.service';
import { DiagramService, IDiagramSaveRequestArgs } from '../diagram/diagram.service';

@Component({
  selector: 'app-diagram-name-editor',
  templateUrl: './diagram-name-editor.component.html',
  styleUrls: ['./diagram-name-editor.component.css']
})
export class DiagramNameEditorComponent implements OnInit, OnDestroy, OnChanges {

  //
  @Input() diagram: DiagramDTO;

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  // icons
  faEditIcon = faPencilAlt;
  faCancelIcon = faWindowClose;
  faSaveIcon = faSave;

  isDiagramNameEditable = false;

  // layout
  visibleWidthInChars = UIConstants.visibleWidthInChars;

  // validator error messages
  requiredValidatorMessage = ValidatorMessageConstants.diagramNameEditorRequiredValidator;
  minlengthValidatorMessage = ValidatorMessageConstants.diagramNameEditorMinlengthValidator;
  maxLengthValidatorMessage = ValidatorMessageConstants.diagramNameEditorMaxLengthValidator;
  patternValidatorMessage = ValidatorMessageConstants.diagramNameEditorPatternValidator;
  uniqueNameValidatorMessage = ValidatorMessageConstants.diagramNameEditorUniqueNameValidator;

  // the reactive form itself
  diagramNameEditorForm = new FormGroup({
    nameInputControl: new FormControl(
      '',
      [ // sync validators
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
        Validators.pattern(/[a-zA-Z0-9]+/),
      ],
      [ // async validators
        this.uniqueDiagramNameValidator(),
      ]
    ),
  });

  constructor(
    private apiService: APIService,
    private diagramService: DiagramService,
    private diagramSelectorGridService: DiagramSelectorGridService,
  ) {
  }

  // get accessor for convenience
  get nameInputControl(): AbstractControl {
    // note: we can also use the following forms to get the control
    // this.diagramNameEditorForm.controls['nameInputControl'];
    // this.diagramNameEditorForm.get('nameInputControl');
    return this.diagramNameEditorForm.controls.nameInputControl;
  }

  ngOnInit() {
    this.nameInputControl.setValue(this.diagram.name);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.diagramName && !changes.diagramName.firstChange) {
      if (this.diagram.name) {
        this.nameInputControl.reset(this.diagram.name);
        this.isDiagramNameEditable = false;
      }
    }
  }

  onEditButtonClick() {
    this.isDiagramNameEditable = !this.isDiagramNameEditable;
  }

  onCancelButtonClick() {
    this.nameInputControl.reset(this.diagram.name);
    this.isDiagramNameEditable = false;
  }

  onSaveButtonClick() {
    this.diagram.name = (this.nameInputControl.value as string).trim(); // diagram's new name

    this.diagramService.request({
      kind: 'IDiagramSaveRequestArgs',
      force: true,
    } as IDiagramSaveRequestArgs);

    this.diagramSelectorGridService.request(); // refresh the diagram selector grid

    this.isDiagramNameEditable = false;
  }

  uniqueDiagramNameValidator(): AsyncValidatorFn {
    return (ctrl: AbstractControl) => {

      if (ctrl.value as string === this.diagram.name) {
        return of(null);
      }

      return timer(500).pipe(switchMap(() => { // debounce
        return this.apiService.diagramGetByNameAsync(this.diagram.emailMD5, ctrl.value as string)
          .pipe(
            map(apiResponse => {
              return (apiResponse && apiResponse.dto)
                ? { 'uniqueDiagramName': true } as ValidationErrors
                : null;
            }),
          );
      }));
    };
  }
}
