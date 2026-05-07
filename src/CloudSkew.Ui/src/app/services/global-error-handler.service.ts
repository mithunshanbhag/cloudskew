import { ErrorHandler, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(
    private logger: LoggingService,
    private sessionService: SessionService,
  ) {
  }

  handleError(error: Error): void {
    // inject to telemetry service
    const url = window.location.href;
    const user = this.sessionService.user;
    this.logger.logException(error, url, user);
  }
}

export const ErrorHandlerProvider = {
  provide: ErrorHandler,
  useClass: GlobalErrorHandlerService,
};
