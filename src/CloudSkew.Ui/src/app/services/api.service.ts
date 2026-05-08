import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ErrorMessageConstants } from '../constants/error-message-constants';
import { UrlConstants } from '../constants/url-constants';
import { APIResponse } from '../interfaces/api-response';
import { ImageGenerationRequestDTO } from '../models/dto/imageGenerationRequestDTO';
import { NotificationService } from './notification.service';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  private get httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  constructor(
    private httpClient: HttpClient,
    private notificationService: NotificationService,
  ) {
  }

  //#region images

  generateImageAsync(user: string, imageGenerationRequest: ImageGenerationRequestDTO)
    : Observable<APIResponse<string>> {
    return this.httpClient.post<string>(
      `${UrlConstants.diagramHelperWebAPIUrl}/users/${user}/images/GenerateImageV1`,
      imageGenerationRequest, this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<string>(dto)),
      catchError((err, source) => this.handleError<string>(err, ErrorMessageConstants.generateImageError))
    );
  }

  getFileAsStringAsync(filePath: string)
    : Observable<APIResponse<string>> {
    // https://github.com/angular/angular/issues/18586#issuecomment-336600793
    return this.httpClient.get<string>(
      filePath,
      { responseType: 'text' as 'json' }
    ).pipe(
      map(dto => this.handleSuccess<string>(dto)),
      catchError((err, source) => this.handleError<string>(err, ErrorMessageConstants.getFileAsStringError))
    );
  }

  private handleError<T>(err: any, message?: string): Observable<APIResponse<T>> {

    if (message) {
      this.notificationService.request({
        kind: 'IDiagramNotificationRequestArgs',
        type: 'error',
        title: 'Error',
        content: message ? message : '',
      });
    }
    if (!environment.production) {
      console.error(err);
    }

    return of({ error: err });
  }

  private handleSuccess<T>(val: T): APIResponse<T> {
    return { dto: val };
  }
}
