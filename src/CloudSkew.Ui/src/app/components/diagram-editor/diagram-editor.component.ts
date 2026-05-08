import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EMPTY, Observable, of, Subject } from 'rxjs';
import { catchError, filter, takeUntil } from 'rxjs/operators';
import { UIConstants } from 'src/app/constants/ui-constants';
import { DiagramImportDTO } from 'src/app/models/dto/diagramImportDTO';
import { DiagramDTO } from '../../models/dto/diagramDTO';
import { ActiveDiagramService } from '../../services/active-diagram.service';
import { LocalPersistenceService } from '../../services/local-persistence.service';
import { DiagramControlsService } from '../diagram-controls/diagram-controls.service';
import { DiagramDeleteConfirmationDialogComponent } from '../diagram-delete-confirmation-dialog/diagram-delete-confirmation-dialog.component';
import { DiagramExportDialogComponent } from '../diagram-export-dialog/diagram-export-dialog.component';
import { DiagramImportDialogComponent } from '../diagram-import-dialog/diagram-import-dialog.component';
import { DiagramPrintDialogComponent } from '../diagram-print-dialog/diagram-print-dialog.component';
import { DiagramReplaceConfirmationDialogComponent } from '../diagram-replace-confirmation-dialog/diagram-replace-confirmation-dialog.component';
import { DiagramService, IDiagramExportRequestArgs, IDiagramPrintRequestArgs } from '../diagram/diagram.service';

@Component({
  selector: 'app-diagram-editor',
  templateUrl: './diagram-editor.component.html',
  styleUrls: ['./diagram-editor.component.css'],
  standalone: false
})
export class DiagramEditorComponent implements OnInit, OnDestroy {

  //
  diagram$: Observable<DiagramDTO>;

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private activeDiagramService: ActiveDiagramService,
    private diagramService: DiagramService,
    private diagramControlsService: DiagramControlsService,
    private dialog: MatDialog,
    private localPersistenceService: LocalPersistenceService,
  ) {
    this.diagram$ = this.activeDiagramService.activeDiagram$
      .pipe(filter((diagram): diagram is DiagramDTO => !!diagram));
  }

  ngOnInit() {
    this.initializeEditorState();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  //#region callbacks

  onDiagramDeleteButtonClick(diagram: DiagramDTO) {
    const dialogRef = this.dialog.open(DiagramDeleteConfirmationDialogComponent, {
      width: UIConstants.diagramDeleteConfirmationDialogWidth,
    } as MatDialogConfig);

    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => this.deleteDiagram(diagram));
  }

  onDiagramExportButtonClick(diagram: DiagramDTO) {
    const dialogRef = this.dialog.open(DiagramExportDialogComponent, {
      data: diagram,
      width: UIConstants.diagramExportOptionsDialogWidth,
    } as MatDialogConfig<DiagramDTO>);

    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        takeUntil(this.onDestroy$)
      )
      .subscribe((result: string) => this.diagramService.request({
        kind: 'IDiagramExportRequestArgs',
        format: result,
      } as IDiagramExportRequestArgs));
  }

  onDiagramImportButtonClick() {
    const dialogRef = this.dialog.open(DiagramReplaceConfirmationDialogComponent, {
      data: {
        title: 'Import Diagram',
        message: 'This will replace the current diagram with the imported JSON diagram. This cannot be undone.',
      },
      width: UIConstants.diagramReplaceConfirmationDialogWidth,
    } as MatDialogConfig);

    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        takeUntil(this.onDestroy$),
      )
      .subscribe(() => this.openImportDialog());
  }

  onDiagramPrintButtonClick(diagram: DiagramDTO) {
    const dialogRef = this.dialog.open(DiagramPrintDialogComponent, {
      data: diagram,
      width: UIConstants.diagramPrintOptionsDialogWidth,
    } as MatDialogConfig<DiagramDTO>);

    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => this.diagramService.request({
        kind: 'IDiagramPrintRequestArgs'
      } as IDiagramPrintRequestArgs));
  }

  //#endregion callbacks

  //#region private helper methods

  private initialize() {
    this.localPersistenceService.loadOrCreateActiveDiagram()
      .pipe(
        takeUntil(this.onDestroy$),
        catchError(() => EMPTY),
      )
      .subscribe(dto => this.activeDiagramService.setActiveDiagram(dto));
  }


  private initializeEditorState() {
    window.location.hash = ''; // clear the hash fragment from the address bar

    this.localPersistenceService.loadPreferences()
      .pipe(
        takeUntil(this.onDestroy$),
        catchError(() => of(this.localPersistenceService.preferences)),
      )
      .subscribe(() => this.initialize());

  }

  private openImportDialog() {
    const dialogRef = this.dialog.open(DiagramImportDialogComponent, {
      width: UIConstants.diagramImportOptionsDialogWidth,
    } as MatDialogConfig);

    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        takeUntil(this.onDestroy$),
      )
      .subscribe(result => this.importDiagram(result as DiagramImportDTO));
  }

  private importDiagram(sourceDiagram: DiagramImportDTO) {
    this.localPersistenceService.importDiagram(sourceDiagram)
      .pipe(
        takeUntil(this.onDestroy$),
        catchError(() => EMPTY),
      )
      .subscribe(dto => this.activeDiagramService.setActiveDiagram(dto));
  }


  private deleteDiagram(diagram: DiagramDTO) {
    this.diagramControlsService.request({
      kind: 'IDiagramControlsDeleteArgs',
      deleteInProgress: true,
    });

    this.localPersistenceService.createBlankDiagram()
      .pipe(
        takeUntil(this.onDestroy$),
        catchError(() => EMPTY),
      )
      .subscribe(dto => {
        this.diagramControlsService.request({
          kind: 'IDiagramControlsDeleteArgs',
          deleteInProgress: false,
        });
        this.activeDiagramService.setActiveDiagram(dto);
      });
  }

  //#endregion private helper methods
}
