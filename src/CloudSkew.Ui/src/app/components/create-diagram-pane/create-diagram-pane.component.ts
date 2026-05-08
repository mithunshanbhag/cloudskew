import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { UIConstants } from 'src/app/constants/ui-constants';
import { DiagramImportDTO } from 'src/app/models/dto/diagramImportDTO';
import { APIService } from 'src/app/services/api.service';
import { ActiveDiagramService } from 'src/app/services/active-diagram.service';
import { SessionService } from 'src/app/services/session.service';
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
    private apiService: APIService,
    private dialog: MatDialog,
    private sessionService: SessionService,
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
    this.apiService.diagramCreateBlankAsync(this.sessionService.user)
      .pipe(
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$),
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
    this.apiService.diagramImportAsync(this.sessionService.user, sourceDiagram)
      .pipe(
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$),
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
