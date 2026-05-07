import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as WebFont from 'webfontloader';
import { NotificationService, NotificationType } from './services/notification.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [],
    standalone: false
})
export class AppComponent implements OnInit, OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private notificationService: NotificationService,
    private snackBar: MatSnackBar,
  ) {
  }

  //#region callbacks

  ngOnInit() {
    // note: we were observing some weird rendering issues when external fonts like 'roboto mono' were
    // being used with text shapes and annotations. See this github issue for details:
    // https://github.com/cloudskew/cloudskew/issues/80
    // It was very likely caused by FOUC: https://en.wikipedia.org/wiki/Flash_of_unstyled_content
    // To prevent FOUC, we'll use typekit's webfontloader to load fonts synchronously.
    WebFont.load({
      google: {
        families: [
          'Open Sans',
          'Material Icons Outlined',
          'Roboto:300,400,500',
          'Roboto Mono'
        ]
      }
    });
    // this.route.data.subscribe(
    //   (value: { editorData: string }) => { console.log(value.editorData); }
    // );

    this.notificationService.requestFeed$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(notification => {
        const config = this.getSnackBarConfig(notification.type);
        this.snackBar.open(notification.content as string, 'Dismiss', config);
      });

    //#region COMMENT-OUT-AFTER-MAINTENANCE-WINDOW
    // timer(5000)
    //   .pipe(takeUntil(this.onDestroy$))
    //   .subscribe(() => this.notificationService.request({
    //     kind: 'IDiagramNotificationRequestArgs',
    //     type: 'success',
    //     title: `Scheduled Maintenance`,
    //     content: `
    //         CloudSkew is currently offline for emergency maintenance and will be back online tomorrow. Apologies for any inconvenience. Please contact support@cloudskew.com for any questions.
    //     `,
    //   }));
    //#endregion
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  //#region callbacks

  //#region private helper methods

  private getSnackBarConfig(args: NotificationType): MatSnackBarConfig {

    const config: MatSnackBarConfig = {
      duration: 30000, // displayed for 30 secs.
    };

    switch (args) {
      case 'warning':
        config.panelClass = 'snack-bar-warning';
        break;
      case 'error':
        config.panelClass = 'snack-bar-error';
        break;
      case 'success':
        config.panelClass = 'snack-bar-success';
        break;
      default:
      case 'info':
        break;
    }

    return config;
  }

  //#endregion private helper methods
}
