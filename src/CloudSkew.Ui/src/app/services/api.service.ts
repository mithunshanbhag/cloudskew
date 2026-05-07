import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ErrorMessageConstants } from '../constants/error-message-constants';
import { UrlConstants } from '../constants/url-constants';
import { APIResponse } from '../interfaces/api-response';
import { DiagramCompactDTO } from '../models/dto/diagramCompactDTO';
import { DiagramDTO } from '../models/dto/diagramDTO';
import { TemplateCompactDTO } from '../models/dto/templateCompactDTO';
import { TemplateDTO } from '../models/dto/templateDTO';
import { ImageGenerationRequestDTO } from '../models/dto/imageGenerationRequestDTO';
import { UserProfileDTO } from '../models/dto/userProfileDTO';
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

  //#region user profiles

  // list all users
  userProfilesListAsync()
    : Observable<APIResponse<UserProfileDTO[]>> {
    return this.httpClient.get<UserProfileDTO[]>(
      `${UrlConstants.webAPIUrl}/users`,
      this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<UserProfileDTO[]>(dto)),
      catchError((err, source) => this.handleError<UserProfileDTO[]>(err, ErrorMessageConstants.userProfilesListError))
    );
  }

  // get specific user
  userProfileGetAsync(user: string)
    : Observable<APIResponse<UserProfileDTO>> {
    return this.httpClient.get<UserProfileDTO>(
      `${UrlConstants.webAPIUrl}/users/${user}`,
      this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<UserProfileDTO>(dto)),
      catchError((err, source) => this.handleError<UserProfileDTO>(err,
        (err instanceof HttpErrorResponse && err.status === 404) ? null : ErrorMessageConstants.userProfileGetError))
    );
  }

  // create new user
  userProfileCreateAsync(userProfile: UserProfileDTO)
    : Observable<APIResponse<UserProfileDTO>> {
    return this.httpClient.post<UserProfileDTO>(
      `${UrlConstants.webAPIUrl}/users`,
      userProfile, this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<UserProfileDTO>(dto)),
      catchError((err, source) => this.handleError<UserProfileDTO>(err, ErrorMessageConstants.userProfileCreateError))
    );
  }

  // modify/update existing user
  userProfileUpdateAsync(user: string, modifiedUserProfile: UserProfileDTO)
    : Observable<APIResponse<UserProfileDTO>> {
    return this.httpClient.put<UserProfileDTO>(
      `${UrlConstants.webAPIUrl}/users/${user}`,
      modifiedUserProfile, this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<UserProfileDTO>(dto)),
      catchError((err, source) => this.handleError<UserProfileDTO>(err, ErrorMessageConstants.userProfileUpdateError))
    );
  }

  // modify/update existing user's preferences
  userProfileUpdatePreferencesAsync(user: string, modifiedPreferences: number)
    : Observable<APIResponse<null>> {
    return this.httpClient.post<null>(
      `${UrlConstants.webAPIUrl}/users/${user}/updatepreferences/${modifiedPreferences}`,
      null, this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<null>(dto)),
      catchError((err, source) => this.handleError<null>(err, ErrorMessageConstants.userProfileUpdateError))
    );
  }

  //#endregion user profiles

  //#region diagrams

  // get last updated diagram
  diagramGetLastUpdatedAsync(user: string)
    : Observable<APIResponse<DiagramDTO>> {
    return this.httpClient.get<DiagramDTO>(
      `${UrlConstants.webAPIUrl}/users/${user}/lastupdateddiagram`,
      this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<DiagramDTO>(dto)),
      catchError((err, source) => this.handleError<DiagramDTO>(err, ErrorMessageConstants.diagramGetError))
    );
  }

  // list all diagrams belonging to a user.
  diagramsListAsync(user: string)
    : Observable<APIResponse<DiagramCompactDTO[]>> {
    return this.httpClient.get<DiagramCompactDTO[]>(
      `${UrlConstants.webAPIUrl}/users/${user}/diagrams`,
      this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<DiagramCompactDTO[]>(dto)),
      catchError((err, source) => this.handleError<DiagramCompactDTO[]>(err, ErrorMessageConstants.diagramsListError))
    );
  }

  // get specific diagram by id.
  diagramGetAsync(user: string, diagramId: string)
    : Observable<APIResponse<DiagramDTO>> {
    return this.httpClient.get<DiagramDTO>(
      `${UrlConstants.webAPIUrl}/users/${user}/diagrams/${diagramId}`,
      this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<DiagramDTO>(dto)),
      catchError((err, source) => this.handleError<DiagramDTO>(err, ErrorMessageConstants.diagramGetError))
    );
  }

  // get specific diagram by name.
  diagramGetByNameAsync(user: string, diagramName: string)
    : Observable<APIResponse<DiagramCompactDTO>> {
    return this.httpClient.get<DiagramCompactDTO>(
      `${UrlConstants.webAPIUrl}/users/${user}/diagrams/${diagramName}`,
      this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<DiagramCompactDTO>(dto)),
      catchError((err, source) => this.handleError<DiagramCompactDTO>(err,
        (err instanceof HttpErrorResponse && err.status === 404) ? null : ErrorMessageConstants.diagramGetError))
    );
  }

  // create new diagram
  diagramCreateAsync(user: string, templateId: string)
    : Observable<APIResponse<DiagramDTO>> {
    return this.httpClient.post<DiagramDTO>(
      `${UrlConstants.webAPIUrl}/users/${user}/diagrams?diagramTemplateId=${templateId}`,
      null, this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<DiagramDTO>(dto)),
      catchError((err, source) => this.handleError<DiagramDTO>(err, ErrorMessageConstants.diagramCreateError))
    );
  }

  // create new diagram (from imported json)
  diagramImportAsync(user: string, sourceTemplate: TemplateDTO)
    : Observable<APIResponse<DiagramDTO>> {
    return this.httpClient.post<DiagramDTO>(
      `${UrlConstants.webAPIUrl}/users/${user}/diagrams/import`,
      sourceTemplate, this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<DiagramDTO>(dto)),
      catchError((err, source) => this.handleError<DiagramDTO>(err, ErrorMessageConstants.diagramCreateError))
    );
  }

  // modify existing diagram
  diagramUpdateAsync(user: string, existingDiagramId: string, modifiedDiagram: DiagramDTO)
    : Observable<APIResponse<null>> {
    return this.httpClient.put<null>(
      `${UrlConstants.webAPIUrl}/users/${user}/diagrams/${existingDiagramId}`,
      modifiedDiagram, this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<null>(dto)),
      catchError((err, source) => this.handleError<null>(err, ErrorMessageConstants.diagramUpdateError))
    );
  }

  // delete existing diagram
  diagramDeleteAsync(user: string, diagramId: string)
    : Observable<APIResponse<null>> {
    return this.httpClient.delete<null>(
      `${UrlConstants.webAPIUrl}/users/${user}/diagrams/${diagramId}`,
      this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<null>(dto)),
      catchError((err, source) => this.handleError<null>(err, ErrorMessageConstants.diagramDeleteError))
    );
  }

  //#endregion diagrams

  //#region diagram templates

  // list all templates accessible to a user.
  templatesListAsync(user: string)
    : Observable<APIResponse<TemplateCompactDTO[]>> {
    return this.httpClient.get<TemplateCompactDTO[]>(
      `${UrlConstants.webAPIUrl}/users/${user}/diagramTemplates`,
      this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<TemplateCompactDTO[]>(dto)),
      catchError((err, source) => this.handleError<TemplateCompactDTO[]>(err, ErrorMessageConstants.templatesListError))
    );
  }

  // get specific template by id.
  templateGetAsync(user: string, templateId: string)
    : Observable<APIResponse<TemplateDTO>> {
    return this.httpClient.get<TemplateDTO>(
      `${UrlConstants.webAPIUrl}/users/${user}/diagramTemplates/${templateId}`,
      this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<TemplateDTO>(dto)),
      catchError((err, source) => this.handleError<TemplateDTO>(err, ErrorMessageConstants.templateGetError))
    );
  }

  // get specific template by name.
  templateGetByNameAsync(user: string, templateName: string)
    : Observable<APIResponse<TemplateCompactDTO>> {
    return this.httpClient.get<TemplateCompactDTO>(
      `${UrlConstants.webAPIUrl}/users/${user}/diagramTemplates/${templateName}`,
      this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<TemplateCompactDTO>(dto)),
      catchError((err, source) => this.handleError<TemplateCompactDTO>(err,
        (err instanceof HttpErrorResponse && err.status === 404) ? null : ErrorMessageConstants.templateGetError))
    );
  }

  // create new template
  templateCreateAsync(user: string, diagramId: string, newTemplateName: string)
    : Observable<APIResponse<TemplateDTO>> {
    return this.httpClient.post<TemplateDTO>(
      `${UrlConstants.webAPIUrl}/users/${user}/diagramTemplates?diagramId=${diagramId}&newDiagramTemplateName=${newTemplateName}`,
      null, this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<TemplateDTO>(dto)),
      catchError((err, source) => this.handleError<TemplateDTO>(err, ErrorMessageConstants.templateCreateError))
    );
  }

  // modify existing template
  templateUpdateAsync(user: string, existingTemplateId: string, modifiedTemplate: TemplateCompactDTO)
    : Observable<APIResponse<null>> {
    return this.httpClient.put<null>(
      `${UrlConstants.webAPIUrl}/users/${user}/diagramTemplates/${existingTemplateId}`,
      modifiedTemplate, this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<null>(dto)),
      catchError((err, source) => this.handleError<null>(err, ErrorMessageConstants.templateUpdateError))
    );
  }

  // delete existing template
  templateDeleteAsync(user: string, templateId: string)
    : Observable<APIResponse<null>> {
    return this.httpClient.delete<null>(
      `${UrlConstants.webAPIUrl}/users/${user}/diagramTemplates/${templateId}`,
      this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<null>(dto)),
      catchError((err, source) => this.handleError<null>(err, ErrorMessageConstants.templateDeleteError))
    );
  }

  //#endregion diagram templates

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

  uploadThumbnailAsync(user: string, diagramId: string, imageGenerationRequest: ImageGenerationRequestDTO)
    : Observable<APIResponse<null>> {
    return this.httpClient.post<null>(
      `${UrlConstants.diagramHelperWebAPIUrl}/users/${user}/diagrams/${diagramId}/UploadThumbnail`,
      imageGenerationRequest, this.httpOptions
    ).pipe(
      map(dto => this.handleSuccess<null>(dto)),
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

  private handleSuccess<T>(val: T): APIResponse<T> {
    return { dto: val };
  }
}
