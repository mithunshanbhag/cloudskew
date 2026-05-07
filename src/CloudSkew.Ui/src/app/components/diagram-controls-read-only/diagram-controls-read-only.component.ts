import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { faCompressArrowsAlt, faFileAlt, faSearchMinus, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DiagramReadOnlyService, IDiagramReadOnlyZoomRequestArgs } from '../diagram-read-only/diagram-read-only.service';
import { DiagramControlsReadOnlyRequestArgs, DiagramControlsReadOnlyService } from './diagram-controls-read-only.service';

@Component({
  selector: 'app-diagram-controls-read-only',
  templateUrl: './diagram-controls-read-only.component.html',
  styleUrls: ['./diagram-controls-read-only.component.css']
})
export class DiagramControlsReadOnlyComponent implements OnInit, OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  //
  isLocked = false;
  isZoomInPossible = false;
  isZoomOutPossible = false;
  isZoomResetPossible = false;

  //
  @Output() documentButtonClick = new EventEmitter();

  // icons
  faZoomInIcon = faSearchPlus;
  faZoomOutIcon = faSearchMinus;
  faZoomResetIcon = faCompressArrowsAlt;
  faDocumentIcon = faFileAlt;

  constructor(
    private diagramControlsReadOnlyService: DiagramControlsReadOnlyService,
    private diagramReadOnlyService: DiagramReadOnlyService,
  ) { }

  ngOnInit() {
    this.diagramControlsReadOnlyService.requestFeed$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((event: DiagramControlsReadOnlyRequestArgs) => {
        switch (event.kind) {
          case 'IDiagramControlsReadOnlyZoomArgs':
            this.isZoomInPossible = event.isZoomInPossible;
            this.isZoomOutPossible = event.isZoomOutPossible;
            this.isZoomResetPossible = event.isZoomResetPossible;
            break;
          case 'IDiagramControlsReadOnlyLockArgs':
            this.isLocked = event.isLocked;
            break;
        }
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onZoomInButtonClick() {
    this.diagramReadOnlyService.request({
      kind: 'IDiagramReadOnlyZoomRequestArgs',
      type: 'zoomIn',
    } as IDiagramReadOnlyZoomRequestArgs);
  }

  onZoomResetButtonClick() {
    this.diagramReadOnlyService.request({
      kind: 'IDiagramReadOnlyZoomRequestArgs',
      type: 'zoomReset',
    } as IDiagramReadOnlyZoomRequestArgs);
  }

  onZoomOutButtonClick() {
    this.diagramReadOnlyService.request({
      kind: 'IDiagramReadOnlyZoomRequestArgs',
      type: 'zoomOut',
    } as IDiagramReadOnlyZoomRequestArgs);
  }
}
