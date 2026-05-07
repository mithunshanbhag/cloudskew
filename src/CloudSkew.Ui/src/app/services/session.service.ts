import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  // keys for values being stored in localstorage
  private readonly preferencesKey = 'preferences';
  private readonly userKey = 'user';
  private readonly lastFlushedDiagramDtoMd5Key = 'lastFlushedDiagramDtoMd5';

  constructor() { }

  get user(): string {
    return localStorage[this.userKey];
  }

  set user(user: string) {
    localStorage.setItem(this.userKey, user);
  }

  get preferences() {
    return +localStorage[this.preferencesKey];
  }

  set preferences(userPreferences: number) {
    localStorage.setItem(this.preferencesKey, userPreferences.toString());
  }

  get lastFlushedDiagramDtoMd5(): string {
    return localStorage[this.lastFlushedDiagramDtoMd5Key];
  }

  set lastFlushedDiagramDtoMd5(diagramDtoMd5: string) {
    localStorage.setItem(this.lastFlushedDiagramDtoMd5Key, diagramDtoMd5);
  }

  clear() {
    localStorage.clear();
  }
}
