import { Component, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { PaymentConstants } from 'src/app/constants/payment-constants';
import { PriceConstants } from 'src/app/constants/price-constants';
import { UrlConstants } from 'src/app/constants/url-constants';
import { CheckoutSessionRequestDTO } from 'src/app/models/dto/checkoutSessionRequestDTO';
import { APIService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';
import { SessionService } from 'src/app/services/session.service';

// @todo: for testing only, remove later.
declare var Stripe: any;

@Component({
  selector: 'app-pricing-dialog',
  templateUrl: './pricing-dialog.component.html',
  styleUrls: ['./pricing-dialog.component.css']
})
export class PricingDialogComponent implements OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  //
  faCheckIcon = faCheckCircle;
  faInfoIcon = faInfoCircle;

  //
  privacyPolicyUrl = UrlConstants.privacyPolicyUrl;
  termsOfServiceUrl = UrlConstants.termsOfServiceUrl;

  constructor(
    private apiService: APIService,
    private dialogRef: MatDialogRef<PricingDialogComponent>,
    private notificationService: NotificationService,
    private sessionService: SessionService,
  ) { }

  //#region lifecycle hooks

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  //#endregion lifecycle hooks

  //#region event handlers

  onUpgradeButtonClick() {
    this.notificationService.request({
      kind: 'IDiagramNotificationRequestArgs',
      type: 'info',
      title: '',
      content: 'Redirecting to Stripe...',
    });

    this.apiService.userProfileCreateCheckoutSessionAsync(
      this.sessionService.user,
      new CheckoutSessionRequestDTO(
        PriceConstants.professionalPriceId,
        PaymentConstants.stripeCheckoutSessionCancelUrl,
        PaymentConstants.stripeCheckoutSessionSuccessUrl)
    )
      .pipe(
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$),
      )
      .subscribe((sessionId: string) => {
        const stripe = Stripe(PaymentConstants.stripeAPIPublishableKey);
        stripe.redirectToCheckout({ sessionId });
      });
  }

  //#endregion event handlers

}
