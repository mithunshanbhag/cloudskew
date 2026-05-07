import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  requestFeed$: Subject<number> = new Subject<number>();
  eventFeed$: Subject<void> = new Subject<void>();

  constructor() { }

  request(args: number) {
    this.requestFeed$.next(args);
  }
}
