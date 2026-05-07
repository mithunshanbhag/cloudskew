import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { RouteConstants } from 'src/app/constants/route-constants';
import { UIConstants } from 'src/app/constants/ui-constants';
import { DiagramDTO } from '../../models/dto/diagramDTO';
import { APIService } from '../../services/api.service';
import { DocumentViewerDialogComponent } from '../document-viewer-dialog/document-viewer-dialog.component';

@Component({
    selector: 'app-diagram-viewer',
    templateUrl: './diagram-viewer.component.html',
    styleUrls: ['./diagram-viewer.component.css'],
    standalone: false
})
export class DiagramViewerComponent implements OnInit, OnDestroy {

  //
  diagram$: Observable<DiagramDTO> = new Observable<DiagramDTO>();

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private apiService: APIService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {

        // if a diagram is specified on route, then fetch it.
        this.diagram$ = this.apiService.sharedDiagramGetAsync(id)
          .pipe(
            filter(apiResponse => !apiResponse.error),
            map(apiResponse => apiResponse.dto),
          );

      } else {
        this.router.navigate([RouteConstants.root]);
      }
    });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onDocumentViewerButtonClick(diagram: DiagramDTO) {
    this.dialog.open(DocumentViewerDialogComponent, {
      data: diagram,
      width: UIConstants.documentEditorDialogWidth,
    } as MatDialogConfig<DiagramDTO>);
  }
}
