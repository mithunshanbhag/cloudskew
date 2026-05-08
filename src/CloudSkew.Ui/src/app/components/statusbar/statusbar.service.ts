import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

//#region interfaces for statusbar events

export type StatusbarEventArgs = IDiagramZoomChangedEventArgs
  | IDiagramToolChangedEventArgs;

export interface IDiagramZoomChangedEventArgs {
  kind: 'IDiagramZoomChangedEventArgs';
  value: number;
}

export interface IDiagramToolChangedEventArgs {
  kind: 'IDiagramToolChangedEventArgs';
  value: 'select/edit' | 'pan/swipe';
}

//#endregion

@Injectable({
  providedIn: 'root'
})
export class StatusbarService {

  // We need to limit the ReplaySubject's buffer size to (say) 2 items.
  // Else it uses Number.POSITIVE_INFINITY by default which can lead to unbounded buffer growth
  // and eventually a memory leak.
  private readonly maxItems = 2;

  requestFeed$: ReplaySubject<StatusbarEventArgs> = new ReplaySubject<StatusbarEventArgs>(this.maxItems);

  constructor() { }

  request(args: StatusbarEventArgs) {
    this.requestFeed$.next(args);
  }
}
