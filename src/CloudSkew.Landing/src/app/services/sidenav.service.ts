import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  requestFeed$: Subject<void> = new Subject<void>();

  constructor() { }

  request() {
    this.requestFeed$.next();
  }
}
