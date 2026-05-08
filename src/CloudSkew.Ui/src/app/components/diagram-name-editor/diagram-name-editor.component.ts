import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { faPencilAlt, faSave, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { UIConstants } from 'src/app/constants/ui-constants';
import { ValidatorMessageConstants } from 'src/app/constants/validator-message-constants';
import { DiagramDTO } from 'src/app/models/dto/diagramDTO';
import { DiagramService, IDiagramSaveRequestArgs } from '../diagram/diagram.service';

@Component({
    selector: 'app-diagram-name-editor',
    templateUrl: './diagram-name-editor.component.html',
    styleUrls: ['./diagram-name-editor.component.css'],
    standalone: false
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

  // the reactive form itself
  diagramNameEditorForm = new UntypedFormGroup({
    nameInputControl: new UntypedFormControl(
      '',
      [ // sync validators
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
        Validators.pattern(/[a-zA-Z0-9]+/),
      ],
    ),
  });

  constructor(
    private diagramService: DiagramService,
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
    if (changes.diagram && !changes.diagram.firstChange) {
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

    this.isDiagramNameEditable = false;
  }
}
