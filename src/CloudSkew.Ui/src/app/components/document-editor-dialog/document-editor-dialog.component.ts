import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChangeEventArgs, RichTextEditorComponent, ToolbarSettingsModel, ToolbarType } from '@syncfusion/ej2-angular-richtexteditor';
import { Subject, takeUntil } from 'rxjs';
import { DiagramDTO } from 'src/app/models/dto/diagramDTO';
import { DiagramService, IDiagramSaveRequestArgs } from '../diagram/diagram.service';

@Component({
    selector: 'app-document-editor-dialog',
    templateUrl: './document-editor-dialog.component.html',
    styles: [],
    standalone: false
})
export class DocumentEditorDialogComponent implements OnInit, OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  //#region document editor
  @ViewChild('documentEditor') documentEditorControl: RichTextEditorComponent;
  documentViewerReadOnly = false;
  documentEditorToolbarSettings: ToolbarSettingsModel = {
    enable: true,
    type: ToolbarType.MultiRow,
    enableFloating: true,
    items: [
      'Bold', 'Italic', 'Underline', 'StrikeThrough',
      '|', 'Formats', 'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
      '|', 'Alignments', 'OrderedList', 'UnorderedList',
      '|', 'Undo', 'Redo', 'ClearFormat',
      '|', 'CreateLink', 'CreateTable',
      '|', 'Print',
      '|', 'Outdent', 'Indent',
      '|', 'SuperScript', 'SubScript',
      '|', 'UpperCase', 'LowerCase',
      '|', 'FullScreen',
    ],
  };
  documentEditorSaveInternal = 3000;

  //#endregion document editor

  constructor(
    private diagramService: DiagramService,
    private dialogRef: MatDialogRef<DocumentEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public diagram: DiagramDTO,
  ) { }

  ngOnInit() {
    // please see related syncfusion forum thread:
    // - https://www.syncfusion.com/forums/151523/the-richtexteditors-toolbar-blocks-overflows-into-the-first-couple-of-lines-of-document
    this.dialogRef.afterOpened()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => this.documentEditorControl.refreshUI());
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  //#region callbacks

  onDocumentEditorChange(args: ChangeEventArgs) {
    if (args.value) {
      this.diagram.documentDetails = args.value;
      this.diagramService.request({
        kind: 'IDiagramSaveRequestArgs',
        force: true,
      } as IDiagramSaveRequestArgs);
    }
  }

  //#endregion callbacks
}
