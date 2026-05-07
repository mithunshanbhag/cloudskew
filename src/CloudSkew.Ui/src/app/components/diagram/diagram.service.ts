import { Injectable } from '@angular/core';
import { AlignmentOptions, DistributeOptions, FileFormats } from '@syncfusion/ej2-angular-diagrams';
import { Subject } from 'rxjs';
import { SymbolFamilyConstants } from 'src/app/constants/symbol-family-constants';

//#region interfaces for diagram requests

export type DiagramRequestArgs = IDiagramAddSymbolRequestArgs
  | IDiagramAddCustomImageRequestArgs
  | IDiagramSaveRequestArgs
  | IDiagramExportRequestArgs
  | IDiagramPrintRequestArgs
  | IDiagramUploadThumbnailRequestArgs
  | IDiagramZoomRequestArgs
  | IDiagramUndoRedoRequestArgs
  | IDiagramLockRequestArgs
  | IDiagramToolRequestArgs
  | IDiagramAlignRequestArgs
  | IDiagramDistributeRequestArgs
  | IDiagramUpdateViewPortRequestArgs;

export interface IDiagramAddSymbolRequestArgs {
  kind: 'IDiagramAddSymbolRequestArgs';
  symbolId: string;
  symbolGroupId: string;
  symbolFamilyId: SymbolFamilyConstants;
}

export interface IDiagramAddCustomImageRequestArgs {
  kind: 'IDiagramAddCustomImageRequestArgs';
  source: string;
  sizeInBytes: number;
  type: string;
}

export interface IDiagramSaveRequestArgs {
  kind: 'IDiagramSaveRequestArgs';
  force: boolean;
}

export interface IDiagramExportRequestArgs {
  kind: 'IDiagramExportRequestArgs';
  format: FileFormats | 'JSON' | 'PDF';
}

export interface IDiagramPrintRequestArgs {
  kind: 'IDiagramPrintRequestArgs';
}

export interface IDiagramUploadThumbnailRequestArgs {
  kind: 'IDiagramUploadThumbnailRequestArgs';
}

export interface IDiagramZoomRequestArgs {
  kind: 'IDiagramZoomRequestArgs';
  type: 'zoomIn' | 'zoomReset' | 'zoomOut' | 'centerView';
}

export interface IDiagramToolRequestArgs {
  kind: 'IDiagramToolRequestArgs';
  type: 'select' | 'pan';
}

export interface IDiagramAlignRequestArgs {
  kind: 'IDiagramAlignRequestArgs';
  type: AlignmentOptions;
  symbolIds?: string[];
}

export interface IDiagramDistributeRequestArgs {
  kind: 'IDiagramDistributeRequestArgs';
  type: DistributeOptions;
  symbolIds?: string[];
}

export interface IDiagramUndoRedoRequestArgs {
  kind: 'IDiagramUndoRedoRequestArgs';
  type: 'undo' | 'redo';
}

export interface IDiagramLockRequestArgs {
  kind: 'IDiagramLockRequestArgs';
  type: 'lock' | 'unlock';
}

export interface IDiagramUpdateViewPortRequestArgs {
  kind: 'IDiagramUpdateViewPortRequestArgs';
}

//#endregion

@Injectable({
  providedIn: 'root'
})
export class DiagramService {

  requestFeed$: Subject<DiagramRequestArgs> = new Subject<DiagramRequestArgs>();

  constructor() { }

  request(args: DiagramRequestArgs) {
    this.requestFeed$.next(args);
  }
}
