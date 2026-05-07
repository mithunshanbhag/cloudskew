import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AuthenticationConstants } from 'src/app/constants/authentication-constants';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-logout',
  template: '',
  styles: ['']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    // the logout steps
    this.sessionService.clear();
    this.authService.logout({
      client_id: AuthenticationConstants.auth0ClientId,
      returnTo: AuthenticationConstants.auth0LogoutUrl,
    });
  }
}
