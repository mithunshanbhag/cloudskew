import { Injectable } from '@angular/core';
import { ApplicationInsights, SeverityLevel } from '@microsoft/applicationinsights-web';
import { environment } from 'src/environments/environment';
import { TelemetryConstants } from '../constants/telemetry-constants';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private readonly appInsights: ApplicationInsights;

  constructor(
    private notificationService: NotificationService,
  ) {
    this.appInsights = new ApplicationInsights({
      config: {
        instrumentationKey: TelemetryConstants.aiInstrumentationKey,
        // enableAutoRouteTracking: true,
        // enableCorsCorrelation: true
        // autoTrackPageVisitTime
      }
    });
    this.appInsights.loadAppInsights();
  }

  logException(error: Error, url?: string, user?: string) {
    console.error(error);

    this.appInsights.trackException({
      exception: error,
      properties: {
        'url': url,
        'user': user,
      }
    });

    // notify user (only in non-production environments)
    if (!environment.production) {
      this.notificationService.request({
        type: 'warning',
        kind: 'IDiagramNotificationRequestArgs',
        title: `[Diagnostics] ${error.name}`,
        content: `[Diagnostics] ${error.name}: ${error.message}`,
      });
    }
  }

  logVerbose(msg: string, url?: string, user?: string) {
    this.logTrace(msg, SeverityLevel.Verbose, url, user);
  }

  logInformation(msg: string, url?: string, user?: string) {
    console.log(msg);
    this.logTrace(msg, SeverityLevel.Information, url, user);
  }

  logWarning(msg: string, url?: string, user?: string) {
    console.warn(msg);
    this.logTrace(msg, SeverityLevel.Warning, url, user);
  }

  logError(msg: string, url?: string, user?: string) {
    console.error(msg);
    this.logTrace(msg, SeverityLevel.Error, url, user);
  }

  logCritical(msg: string, url?: string, user?: string) {
    console.error(msg);
    this.logTrace(msg, SeverityLevel.Critical, url, user);
  }

  private logTrace(msg: string, severity: SeverityLevel, url?: string, user?: string) {
    this.appInsights.trackTrace({
      message: msg,
      severityLevel: severity,
      properties: {
        'url': url,
        'user': user,
      },
    });
  }
}
