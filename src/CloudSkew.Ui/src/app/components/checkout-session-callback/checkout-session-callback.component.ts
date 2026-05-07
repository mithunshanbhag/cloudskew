import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { RouteConstants } from 'src/app/constants/route-constants';
import { UpgradeSubscriptionRequestDTO } from 'src/app/models/dto/upgradeSubscriptionRequestDTO';
import { UserProfileDTO } from 'src/app/models/dto/userProfileDTO';
import { APIService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
    selector: 'app-checkout-session-callback',
    templateUrl: './checkout-session-callback.component.html',
    styles: [],
    standalone: false
})
export class CheckoutSessionCallbackComponent implements OnInit {

  constructor(
    private apiService: APIService,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private router: Router,
    private sessionService: SessionService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.apiService.userProfileUpgradeSubscription(this.sessionService.user, new UpgradeSubscriptionRequestDTO(id))
          .pipe(
            filter(apiResponse => !apiResponse.error),
            map(apiResponse => apiResponse.dto),
          )
          .subscribe((userProfile: UserProfileDTO) => {
            this.notificationService.request({
              kind: 'IDiagramNotificationRequestArgs',
              type: 'success',
              title: 'Subscription Upgraded',
              content: `Subscription has been upgraded to ${userProfile.subscriptionName} plan.`
            });
            this.router.navigate([RouteConstants.root]);
          });

      } else {
        // @todo: ????
      }
    });
  }

}
