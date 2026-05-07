import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

//#region interfaces for diagram requests

export type NotificationRequestArgs = IDiagramNotificationRequestArgs | IDiagramAnnouncementRequestArgs;

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface IDiagramNotificationRequestArgs {
  kind: 'IDiagramNotificationRequestArgs';
  type: NotificationType;
  title: string;
  content: string;
}

export interface IDiagramAnnouncementRequestArgs {
  kind: 'IDiagramAnnouncementRequestArgs';
  type: NotificationType;
  title: string;
  content: string;
}

//#endregion interfaces for diagram requests

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // We need to limit the ReplaySubject's buffer size to (say) 3 items.
  // Else it uses Number.POSITIVE_INFINITY by default which can lead to unbounded buffer growth
  // and eventually a memory leak.
  private readonly maxItems = 10;

  requestFeed$: ReplaySubject<NotificationRequestArgs> = new ReplaySubject<NotificationRequestArgs>(this.maxItems);

  constructor() { }

  request(args: NotificationRequestArgs) {
    this.requestFeed$.next(args);
  }
}
