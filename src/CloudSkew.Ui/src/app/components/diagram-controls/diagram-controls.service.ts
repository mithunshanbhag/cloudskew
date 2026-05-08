import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

//#region DiagramControlsRequestArgs

export type DiagramControlsRequestArgs = IDiagramControlsPrintArgs
  | IDiagramControlsExportArgs
  | IDiagramControlsZoomArgs
  | IDiagramControlsUndoRedoArgs
  | IDiagramControlsLockArgs
  | IDiagramControlsToolArgs
  | IDiagramControlsDeleteArgs;

export interface IDiagramControlsPrintArgs {
  kind: 'IDiagramControlsPrintArgs';
  printInProgress: boolean;
}

export interface IDiagramControlsExportArgs {
  kind: 'IDiagramControlsExportArgs';
  exportInProgress: boolean;
}

export interface IDiagramControlsZoomArgs {
  kind: 'IDiagramControlsZoomArgs';
  isZoomInPossible: boolean;
  isZoomOutPossible: boolean;
  isZoomResetPossible: boolean;
}

export interface IDiagramControlsToolArgs {
  kind: 'IDiagramControlsToolArgs';
  isSelectMode: boolean;
  isPanMode: boolean;
}

export interface IDiagramControlsUndoRedoArgs {
  kind: 'IDiagramControlsUndoRedoArgs';
  isUndoPossible: boolean;
  isRedoPossible: boolean;
}

export interface IDiagramControlsLockArgs {
  kind: 'IDiagramControlsLockArgs';
  isLocked: boolean;
}

export interface IDiagramControlsDeleteArgs {
  kind: 'IDiagramControlsDeleteArgs';
  deleteInProgress: boolean;
}

//#endregion DiagramControlsRequestArgs

@Injectable({
  providedIn: 'root'
})
export class DiagramControlsService {

  requestFeed$: Subject<DiagramControlsRequestArgs> = new Subject<DiagramControlsRequestArgs>();

  constructor() { }

  request(args: DiagramControlsRequestArgs) {
    this.requestFeed$.next(args);
  }
}
