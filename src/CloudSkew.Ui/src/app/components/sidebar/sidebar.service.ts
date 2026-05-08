import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

//
export type SidebarType = 'none' | 'palette' | 'create' | 'diagram' | 'extension' | 'preference';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  requestFeed$: Subject<SidebarType> = new Subject<SidebarType>();
  eventFeed$: Subject<SidebarType> = new Subject<SidebarType>();

  constructor() { }

  request(sidebarType: SidebarType) {
    if (sidebarType) {
      this.requestFeed$.next(sidebarType);
    }
  }
}
