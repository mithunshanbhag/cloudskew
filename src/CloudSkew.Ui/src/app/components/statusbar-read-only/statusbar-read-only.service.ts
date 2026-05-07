import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

//#region interfaces for statusbar events

export type StatusbarReadOnlyEventArgs = IDiagramZoomChangedEventArgs;

export interface IDiagramZoomChangedEventArgs {
  kind: 'IDiagramZoomChangedEventArgs';
  value: number;
}

//#endregion

@Injectable({
  providedIn: 'root'
})
export class StatusbarReadOnlyService {

  // We need to limit the ReplaySubject's buffer size to (say) 2 items.
  // Else it uses Number.POSITIVE_INFINITY by default which can lead to unbounded buffer growth
  // and eventually a memory leak.
  private readonly maxItems = 2;

  requestFeed$: ReplaySubject<StatusbarReadOnlyEventArgs> = new ReplaySubject<StatusbarReadOnlyEventArgs>(this.maxItems);

  constructor() { }

  request(args: StatusbarReadOnlyEventArgs) {
    this.requestFeed$.next(args);
  }
}
