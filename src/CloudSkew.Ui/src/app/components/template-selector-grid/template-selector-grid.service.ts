import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateSelectorGridService {

  requestFeed$: Subject<void> = new Subject<void>();

  constructor() { }

  request() {
    this.requestFeed$.next();
  }
}
