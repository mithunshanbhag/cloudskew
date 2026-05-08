import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ErrorMessageConstants } from '../constants/error-message-constants';
import { UrlConstants } from '../constants/url-constants';
import { APIResponse } from '../interfaces/api-response';
import { DiagramDTO } from '../models/dto/diagramDTO';
import { DiagramImportDTO } from '../models/dto/diagramImportDTO';
import { ImageGenerationRequestDTO } from '../models/dto/imageGenerationRequestDTO';
import { UserProfileDTO } from '../models/dto/userProfileDTO';
import { LocalApiStorageService } from './local-api-storage.service';
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
    private localApiStorageService: LocalApiStorageService,
    private notificationService: NotificationService,
  ) {
  }

  //#region user profiles

  // list all users
  userProfilesListAsync()
    : Observable<APIResponse<UserProfileDTO[]>> {
    return from(this.localApiStorageService.userProfilesListAsync()).pipe(
      map(dto => this.handleSuccess<UserProfileDTO[]>(dto)),
      catchError((err, source) => this.handleError<UserProfileDTO[]>(err, ErrorMessageConstants.userProfilesListError))
    );
  }

  // get specific user
  userProfileGetAsync(user: string)
    : Observable<APIResponse<UserProfileDTO>> {
    return from(this.localApiStorageService.userProfileGetAsync(user)).pipe(
      map(dto => dto ? this.handleSuccess<UserProfileDTO>(dto) : this.handleNotFound<UserProfileDTO>()),
      catchError((err, source) => this.handleError<UserProfileDTO>(err, ErrorMessageConstants.userProfileGetError))
    );
  }

  // create new user
  userProfileCreateAsync(userProfile: UserProfileDTO)
    : Observable<APIResponse<UserProfileDTO>> {
    return from(this.localApiStorageService.userProfileSaveAsync(userProfile)).pipe(
      map(dto => this.handleSuccess<UserProfileDTO>(dto)),
      catchError((err, source) => this.handleError<UserProfileDTO>(err, ErrorMessageConstants.userProfileCreateError))
    );
  }

  // modify/update existing user
  userProfileUpdateAsync(user: string, modifiedUserProfile: UserProfileDTO)
    : Observable<APIResponse<UserProfileDTO>> {
    return from(this.localApiStorageService.userProfileSaveAsync({
      ...modifiedUserProfile,
      emailMD5: user,
    } as UserProfileDTO)).pipe(
      map(dto => this.handleSuccess<UserProfileDTO>(dto)),
      catchError((err, source) => this.handleError<UserProfileDTO>(err, ErrorMessageConstants.userProfileUpdateError))
    );
  }

  // modify/update existing user's preferences
  userProfileUpdatePreferencesAsync(user: string, modifiedPreferences: number)
    : Observable<APIResponse<null>> {
    return from(this.localApiStorageService.userProfileUpdatePreferencesAsync(user, modifiedPreferences)).pipe(
      map(() => this.handleSuccess<null>(null)),
      catchError((err, source) => this.handleError<null>(err, ErrorMessageConstants.userProfileUpdateError))
    );
  }

  //#endregion user profiles

  //#region diagrams

  // get the active diagram for a user
  diagramGetAsync(user: string)
    : Observable<APIResponse<DiagramDTO>> {
    return from(this.localApiStorageService.diagramGetAsync(user)).pipe(
      map(dto => dto ? this.handleSuccess<DiagramDTO>(dto) : this.handleNotFound<DiagramDTO>()),
      catchError((err, source) => this.handleError<DiagramDTO>(err, ErrorMessageConstants.diagramGetError))
    );
  }

  // create new blank diagram
  diagramCreateBlankAsync(user: string)
    : Observable<APIResponse<DiagramDTO>> {
    return from(this.localApiStorageService.diagramCreateBlankAsync(user)).pipe(
      map(dto => this.handleSuccess<DiagramDTO>(dto)),
      catchError((err, source) => this.handleError<DiagramDTO>(err, ErrorMessageConstants.diagramCreateError))
    );
  }

  // create new diagram (from imported json)
  diagramImportAsync(user: string, sourceDiagram: DiagramImportDTO)
    : Observable<APIResponse<DiagramDTO>> {
    return from(this.localApiStorageService.diagramImportAsync(user, sourceDiagram)).pipe(
      map(dto => this.handleSuccess<DiagramDTO>(dto)),
      catchError((err, source) => this.handleError<DiagramDTO>(err, ErrorMessageConstants.diagramCreateError))
    );
  }

  // modify existing diagram
  diagramUpdateAsync(user: string, modifiedDiagram: DiagramDTO)
    : Observable<APIResponse<null>> {
    return from(this.localApiStorageService.diagramUpdateAsync(user, modifiedDiagram)).pipe(
      map(() => this.handleSuccess<null>(null)),
      catchError((err, source) => this.handleError<null>(err, ErrorMessageConstants.diagramUpdateError))
    );
  }

  //#endregion diagrams

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

  uploadThumbnailAsync(user: string, imageGenerationRequest: ImageGenerationRequestDTO)
    : Observable<APIResponse<null>> {
    return from(this.localApiStorageService.diagramUpdateThumbnailAsync(
      user,
      this.getLocalThumbnailUrl(imageGenerationRequest),
    )).pipe(
      map(() => this.handleSuccess<null>(null)),
      catchError((err, source) => this.handleError<null>(err, ErrorMessageConstants.uploadThumbnailError))
    );
  }

  //#endregion images

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

  private handleNotFound<T>(): APIResponse<T> {
    return {
      error: new HttpErrorResponse({
        status: 404,
        statusText: 'Not Found',
      })
    };
  }

  private handleSuccess<T>(val: T): APIResponse<T> {
    return { dto: val };
  }

  private getLocalThumbnailUrl(imageGenerationRequest: ImageGenerationRequestDTO): string {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(imageGenerationRequest.htmlData)}`;
  }
}
