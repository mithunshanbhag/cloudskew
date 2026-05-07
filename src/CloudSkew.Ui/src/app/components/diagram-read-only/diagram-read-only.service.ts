import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

//#region interfaces for diagram requests

export type DiagramReadOnlyRequestArgs = IDiagramReadOnlyZoomRequestArgs;

export interface IDiagramReadOnlyZoomRequestArgs {
  kind: 'IDiagramReadOnlyZoomRequestArgs';
  type: 'zoomIn' | 'zoomReset' | 'zoomOut';
}

//#endregion

@Injectable({
  providedIn: 'root'
})
export class DiagramReadOnlyService {

  requestFeed$: Subject<DiagramReadOnlyRequestArgs> = new Subject<DiagramReadOnlyRequestArgs>();

  constructor() { }

  request(args: DiagramReadOnlyRequestArgs) {
    this.requestFeed$.next(args);
  }
}
