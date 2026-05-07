import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

//#region DiagramControlsReadOnlyRequestArgs

export type DiagramControlsReadOnlyRequestArgs = IDiagramControlsReadOnlyZoomArgs | IDiagramControlsReadOnlyLockArgs;

export interface IDiagramControlsReadOnlyZoomArgs {
  kind: 'IDiagramControlsReadOnlyZoomArgs';
  isZoomInPossible: boolean;
  isZoomOutPossible: boolean;
  isZoomResetPossible: boolean;
}

export interface IDiagramControlsReadOnlyLockArgs {
  kind: 'IDiagramControlsReadOnlyLockArgs';
  isLocked: boolean;
}

//#endregion DiagramControlsReadOnlyRequestArgs

@Injectable({
  providedIn: 'root'
})
export class DiagramControlsReadOnlyService {

  requestFeed$: Subject<DiagramControlsReadOnlyRequestArgs> = new Subject<DiagramControlsReadOnlyRequestArgs>();

  constructor() { }

  request(args: DiagramControlsReadOnlyRequestArgs) {
    this.requestFeed$.next(args);
  }
}
