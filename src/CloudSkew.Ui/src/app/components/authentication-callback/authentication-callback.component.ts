import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { take } from 'rxjs/operators';
import { NotificationService } from 'src/app/services/notification.service';
import { SessionService } from 'src/app/services/session.service';
import { AuthenticationConstants } from '../../constants/authentication-constants';
import { RouteConstants } from '../../constants/route-constants';

@Component({
    selector: 'app-authentication-callback',
    templateUrl: './authentication-callback.component.html',
    styles: [],
    standalone: false
})
export class AuthenticationCallbackComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router,
    private sessionService: SessionService,
  ) {
  }

  ngOnInit() {
    this.authService.user$
      .pipe(take(1))
      .subscribe((user: any) => this.router.navigate([RouteConstants.root]));
    this.authService.error$
      .subscribe((err: Error) => this.processParseHashFailure(err));
  }

  //#region private helper methods

  private processParseHashFailure(parseHashErr: Error) {
    window.location.hash = ''; // clear the hash fragment from the address bar

    if (parseHashErr) {
      this.notificationService.request({
        kind: 'IDiagramNotificationRequestArgs',
        type: 'error',
        title: parseHashErr.name,
        content: parseHashErr.message,
      });
    }

    setTimeout(() => {
      // the logout steps
      this.sessionService.clear();
      this.authService.logout({
        clientId: AuthenticationConstants.auth0ClientId,
        logoutParams: {
          returnTo: AuthenticationConstants.auth0LogoutUrl,
        },
      });
    }, 5000);
  }

  //#endregion private helper methods
}
