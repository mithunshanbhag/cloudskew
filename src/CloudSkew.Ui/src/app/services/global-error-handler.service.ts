import { ErrorHandler, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
import { LocalPersistenceService } from './local-persistence.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(
    private logger: LoggingService,
    private localPersistenceService: LocalPersistenceService,
  ) {
  }

  handleError(error: Error): void {
    // inject to telemetry service
    const url = window.location.href;
    const user = this.localPersistenceService.user;
    this.logger.logException(error, url, user);
  }
}

export const ErrorHandlerProvider = {
  provide: ErrorHandler,
  useClass: GlobalErrorHandlerService,
};
