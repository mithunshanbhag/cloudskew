import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RichTextEditorComponent, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';
import { Subject, takeUntil } from 'rxjs';
import { DiagramDTO } from 'src/app/models/dto/diagramDTO';

@Component({
    selector: 'app-document-viewer-dialog',
    templateUrl: './document-viewer-dialog.component.html',
    styles: [],
    standalone: false
})
export class DocumentViewerDialogComponent implements OnInit, OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  //#region document viewer
  @ViewChild('documentViewer') documentViewerControl: RichTextEditorComponent;
  documentViewerReadOnly = true;
  documentEditorToolbarSettings: ToolbarSettingsModel = {
    enable: false
  };
  //#endregion document viewer

  constructor(
    private dialogRef: MatDialogRef<DocumentViewerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public diagram: DiagramDTO,
  ) { }

  ngOnInit() {
    // please see related syncfusion forum thread:
    // - https://www.syncfusion.com/forums/151523/the-richtexteditors-toolbar-blocks-overflows-into-the-first-couple-of-lines-of-document
    this.dialogRef.afterOpened()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => this.documentViewerControl.refreshUI());
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  //#region callbacks

  //#endregion callbacks
}
