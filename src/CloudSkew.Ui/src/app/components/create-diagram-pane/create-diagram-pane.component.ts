import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EMPTY, Subject } from 'rxjs';
import { catchError, filter, takeUntil } from 'rxjs/operators';
import { UIConstants } from 'src/app/constants/ui-constants';
import { DiagramImportDTO } from 'src/app/models/dto/diagramImportDTO';
import { ActiveDiagramService } from 'src/app/services/active-diagram.service';
import { LocalPersistenceService } from 'src/app/services/local-persistence.service';
import { DiagramImportDialogComponent } from '../diagram-import-dialog/diagram-import-dialog.component';
import { DiagramReplaceConfirmationDialogComponent } from '../diagram-replace-confirmation-dialog/diagram-replace-confirmation-dialog.component';

@Component({
  selector: 'app-create-diagram-pane',
  templateUrl: './create-diagram-pane.component.html',
  styleUrls: ['./create-diagram-pane.component.css'],
  standalone: false
})
export class CreateDiagramPaneComponent implements OnDestroy {

  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private activeDiagramService: ActiveDiagramService,
    private dialog: MatDialog,
    private localPersistenceService: LocalPersistenceService,
  ) {
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onCreateBlankDiagramButtonClick() {
    this.openReplaceConfirmationDialog(
      'Create New Blank Diagram',
      'This will replace the current diagram with a new blank diagram. This cannot be undone.',
      () => this.createBlankDiagram(),
    );
  }

  onImportFromJsonFileButtonClick() {
    this.openReplaceConfirmationDialog(
      'Import Diagram',
      'This will replace the current diagram with the imported JSON diagram. This cannot be undone.',
      () => this.openImportDialog(),
    );
  }

  private createBlankDiagram() {
    this.localPersistenceService.createBlankDiagram()
      .pipe(
        takeUntil(this.onDestroy$),
        catchError(() => EMPTY),
      )
      .subscribe(dto => this.activeDiagramService.setActiveDiagram(dto));
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

  private openReplaceConfirmationDialog(
    title: string,
    message: string,
    onConfirm: () => void,
  ) {
    const dialogRef = this.dialog.open(DiagramReplaceConfirmationDialogComponent, {
      data: {
        title,
        message,
      },
      width: UIConstants.diagramReplaceConfirmationDialogWidth,
    } as MatDialogConfig);

    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        takeUntil(this.onDestroy$),
      )
      .subscribe(() => onConfirm());
  }
}
