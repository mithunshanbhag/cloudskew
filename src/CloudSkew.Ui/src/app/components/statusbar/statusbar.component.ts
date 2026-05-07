import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { PaymentConstants } from 'src/app/constants/payment-constants';
import { UIConstants } from 'src/app/constants/ui-constants';
import { CustomerPortalRequestDTO } from 'src/app/models/dto/customerPortalRequestDTO';
import { UserProfileDTO } from 'src/app/models/dto/userProfileDTO';
import { APIService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';
import { SessionService } from 'src/app/services/session.service';
import { LogoutConfirmationDialogComponent } from '../logout-confirmation-dialog/logout-confirmation-dialog.component';
import { PricingDialogComponent } from '../pricing-dialog/pricing-dialog.component';
import { StatusbarEventArgs, StatusbarService } from './statusbar.service';

@Component({
  selector: 'app-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.css']
})
export class StatusbarComponent implements OnInit, OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  //
  zoomPercentage?: number;
  tool?: string;
  provider?: string;
  userProfile?: UserProfileDTO;

  constructor(
    private apiService: APIService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private sessionService: SessionService,
    private statusbarService: StatusbarService,
  ) { }

  ngOnInit() {
    this.statusbarService.requestFeed$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((args: StatusbarEventArgs) => {
        switch (args.kind) {
          case 'IUserProfileChangedEventArgs':
            this.userProfile = args.userProfile;
            const endIndex = args.user.sub.indexOf('|');
            if (endIndex !== 1) {
              this.provider = args.user.sub.substr(0, endIndex).toLowerCase();
            }
            break;
          case 'IDiagramZoomChangedEventArgs':
            this.zoomPercentage = args.value;
            break;
          case 'IDiagramToolChangedEventArgs':
            this.tool = args.value;
            break;
          default:
            break;
        }
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onSubscriptionTierUpgradeButtonClick() {
    this.dialog.open(PricingDialogComponent, {
      width: UIConstants.pricingDialogWidth,
      position: { bottom: '', right: '', top: '', left: '' }, // center of screen
    } as MatDialogConfig);
  }

  onSubscriptionTierChangeButtonClick() {
    this.notificationService.request({
      kind: 'IDiagramNotificationRequestArgs',
      type: 'info',
      title: '',
      content: 'Redirecting to Stripe...',
    });

    this.apiService.userProfileCreateCustomerPortalSessionAsync(
      this.sessionService.user,
      new CustomerPortalRequestDTO(PaymentConstants.stripeCustomerPortalReturnUrl)
    )
      .pipe(
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$),
      )
      .subscribe((sessionUrl: string) => window.location.href = sessionUrl);
  }

  onLogoutButtonClick() {
    this.dialog.open(LogoutConfirmationDialogComponent);
  }
}
