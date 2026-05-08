import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { RouteConstants } from 'src/app/constants/route-constants';
import { UIConstants } from 'src/app/constants/ui-constants';
import { DiagramImportDTO } from 'src/app/models/dto/diagramImportDTO';
import { APIService } from 'src/app/services/api.service';
import { SessionService } from 'src/app/services/session.service';
import { DiagramImportDialogComponent } from '../diagram-import-dialog/diagram-import-dialog.component';

@Component({
    selector: 'app-create-diagram-pane',
    templateUrl: './create-diagram-pane.component.html',
    styleUrls: ['./create-diagram-pane.component.css'],
    standalone: false
})
export class CreateDiagramPaneComponent implements OnDestroy {

  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private apiService: APIService,
    private dialog: MatDialog,
    private router: Router,
    private sessionService: SessionService,
  ) {
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onCreateBlankDiagramButtonClick() {
    this.apiService.diagramCreateBlankAsync(this.sessionService.user)
      .pipe(
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$),
      )
      .subscribe(dto => this.router.navigate([RouteConstants.editor, dto.id]));
  }

  onImportFromJsonFileButtonClick() {
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
      .subscribe(dto => this.router.navigate([RouteConstants.editor, dto.id]));
  }
}
