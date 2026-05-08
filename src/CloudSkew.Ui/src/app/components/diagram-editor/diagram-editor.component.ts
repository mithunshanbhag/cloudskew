import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EMPTY, Observable, of, Subject } from 'rxjs';
import { catchError, filter, takeUntil, tap } from 'rxjs/operators';
import { SymbolFamilyConstants } from 'src/app/constants/symbol-family-constants';
import { UIConstants } from 'src/app/constants/ui-constants';
import { DiagramDTO } from '../../models/dto/diagramDTO';
import { ActiveDiagramService } from '../../services/active-diagram.service';
import { LocalPersistenceService } from '../../services/local-persistence.service';
import { DiagramControlsService } from '../diagram-controls/diagram-controls.service';
import { DiagramDeleteConfirmationDialogComponent } from '../diagram-delete-confirmation-dialog/diagram-delete-confirmation-dialog.component';
import { DiagramExportDialogComponent } from '../diagram-export-dialog/diagram-export-dialog.component';
import { DiagramPrintDialogComponent } from '../diagram-print-dialog/diagram-print-dialog.component';
import { DiagramService, IDiagramExportRequestArgs, IDiagramPrintRequestArgs } from '../diagram/diagram.service';
import { IUserProfileChangedEventArgs, StatusbarService } from '../statusbar/statusbar.service';

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
    private statusbarService: StatusbarService,
  ) {
    this.diagram$ = this.activeDiagramService.activeDiagram$
      .pipe(filter((diagram): diagram is DiagramDTO => !!diagram));
  }

  ngOnInit() {
    this.processAnonymousUserProfile();
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


  private processAnonymousUserProfile() {
    window.location.hash = ''; // clear the hash fragment from the address bar

    this.localPersistenceService.setCurrentPreferences(SymbolFamilyConstants.Default);
    this.localPersistenceService.ensureAnonymousUserProfile()
      .pipe(
        takeUntil(this.onDestroy$),
        tap(userProfile => this.statusbarService.request({
          kind: 'IUserProfileChangedEventArgs',
          userProfile,
        } as IUserProfileChangedEventArgs)),
        catchError(() => of(undefined)),
      )
      .subscribe(() => this.initialize());

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
