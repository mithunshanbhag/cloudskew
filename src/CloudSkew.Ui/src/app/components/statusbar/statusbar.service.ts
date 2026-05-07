import { Injectable } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { ReplaySubject } from 'rxjs';
import { UserProfileDTO } from 'src/app/models/dto/userProfileDTO';

//#region interfaces for statusbar events

export type StatusbarEventArgs = IDiagramZoomChangedEventArgs
  | IDiagramToolChangedEventArgs
  | IUserProfileChangedEventArgs;

export interface IDiagramZoomChangedEventArgs {
  kind: 'IDiagramZoomChangedEventArgs';
  value: number;
}

export interface IDiagramToolChangedEventArgs {
  kind: 'IDiagramToolChangedEventArgs';
  value: 'select/edit' | 'pan/swipe';
}

export interface IUserProfileChangedEventArgs {
  kind: 'IUserProfileChangedEventArgs';
  user: User;
  userProfile: UserProfileDTO;
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
