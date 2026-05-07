import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ErrorMessageConstants } from '../constants/error-message-constants';
import { UrlConstants } from '../constants/url-constants';
import { APIResponse } from '../interfaces/api-response';
import { DiagramCompactDTO } from '../models/dto/diagramCompactDTO';
import { DiagramDTO } from '../models/dto/diagramDTO';
import { ImageGenerationRequestDTO } from '../models/dto/imageGenerationRequestDTO';
import { TemplateCompactDTO } from '../models/dto/templateCompactDTO';
import { TemplateDTO } from '../models/dto/templateDTO';
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

  // get last updated diagram
  diagramGetLastUpdatedAsync(user: string)
    : Observable<APIResponse<DiagramDTO>> {
    return from(this.localApiStorageService.diagramGetLastUpdatedAsync(user)).pipe(
      map(dto => this.handleOptionalSuccess<DiagramDTO>(dto)),
      catchError((err, source) => this.handleError<DiagramDTO>(err, ErrorMessageConstants.diagramGetError))
    );
  }

  // list all diagrams belonging to a user.
  diagramsListAsync(user: string)
    : Observable<APIResponse<DiagramCompactDTO[]>> {
    return from(this.localApiStorageService.diagramsListAsync(user)).pipe(
      map(dto => this.handleSuccess<DiagramCompactDTO[]>(dto)),
      catchError((err, source) => this.handleError<DiagramCompactDTO[]>(err, ErrorMessageConstants.diagramsListError))
    );
  }

  // get specific diagram by id.
  diagramGetAsync(user: string, diagramId: string)
    : Observable<APIResponse<DiagramDTO>> {
    return from(this.localApiStorageService.diagramGetAsync(user, diagramId)).pipe(
      map(dto => dto ? this.handleSuccess<DiagramDTO>(dto) : this.handleNotFound<DiagramDTO>()),
      catchError((err, source) => this.handleError<DiagramDTO>(err, ErrorMessageConstants.diagramGetError))
    );
  }

  // get specific diagram by name.
  diagramGetByNameAsync(user: string, diagramName: string)
    : Observable<APIResponse<DiagramCompactDTO>> {
    return from(this.localApiStorageService.diagramGetByNameAsync(user, diagramName)).pipe(
      map(dto => dto ? this.handleSuccess<DiagramCompactDTO>(dto) : this.handleNotFound<DiagramCompactDTO>()),
      catchError((err, source) => this.handleError<DiagramCompactDTO>(err, ErrorMessageConstants.diagramGetError))
    );
  }

  // create new diagram
  diagramCreateAsync(user: string, templateId: string)
    : Observable<APIResponse<DiagramDTO>> {
    return from(this.localApiStorageService.diagramCreateAsync(user, templateId)).pipe(
      map(dto => this.handleSuccess<DiagramDTO>(dto)),
      catchError((err, source) => this.handleError<DiagramDTO>(err, ErrorMessageConstants.diagramCreateError))
    );
  }

  // create new diagram (from imported json)
  diagramImportAsync(user: string, sourceTemplate: TemplateDTO)
    : Observable<APIResponse<DiagramDTO>> {
    return from(this.localApiStorageService.diagramImportAsync(user, sourceTemplate)).pipe(
      map(dto => this.handleSuccess<DiagramDTO>(dto)),
      catchError((err, source) => this.handleError<DiagramDTO>(err, ErrorMessageConstants.diagramCreateError))
    );
  }

  // modify existing diagram
  diagramUpdateAsync(user: string, existingDiagramId: string, modifiedDiagram: DiagramDTO)
    : Observable<APIResponse<null>> {
    return from(this.localApiStorageService.diagramUpdateAsync(user, existingDiagramId, modifiedDiagram)).pipe(
      map(() => this.handleSuccess<null>(null)),
      catchError((err, source) => this.handleError<null>(err, ErrorMessageConstants.diagramUpdateError))
    );
  }

  // delete existing diagram
  diagramDeleteAsync(user: string, diagramId: string)
    : Observable<APIResponse<null>> {
    return from(this.localApiStorageService.diagramDeleteAsync(user, diagramId)).pipe(
      map(() => this.handleSuccess<null>(null)),
      catchError((err, source) => this.handleError<null>(err, ErrorMessageConstants.diagramDeleteError))
    );
  }

  //#endregion diagrams

  //#region diagram templates

  // list all templates accessible to a user.
  templatesListAsync(user: string)
    : Observable<APIResponse<TemplateCompactDTO[]>> {
    return from(this.localApiStorageService.templatesListAsync(user)).pipe(
      map(dto => this.handleSuccess<TemplateCompactDTO[]>(dto)),
      catchError((err, source) => this.handleError<TemplateCompactDTO[]>(err, ErrorMessageConstants.templatesListError))
    );
  }

  // get specific template by id.
  templateGetAsync(user: string, templateId: string)
    : Observable<APIResponse<TemplateDTO>> {
    return from(this.localApiStorageService.templateGetAsync(user, templateId)).pipe(
      map(dto => dto ? this.handleSuccess<TemplateDTO>(dto) : this.handleNotFound<TemplateDTO>()),
      catchError((err, source) => this.handleError<TemplateDTO>(err, ErrorMessageConstants.templateGetError))
    );
  }

  // get specific template by name.
  templateGetByNameAsync(user: string, templateName: string)
    : Observable<APIResponse<TemplateCompactDTO>> {
    return from(this.localApiStorageService.templateGetByNameAsync(user, templateName)).pipe(
      map(dto => dto ? this.handleSuccess<TemplateCompactDTO>(dto) : this.handleNotFound<TemplateCompactDTO>()),
      catchError((err, source) => this.handleError<TemplateCompactDTO>(err, ErrorMessageConstants.templateGetError))
    );
  }

  // create new template
  templateCreateAsync(user: string, sourceDiagram: DiagramDTO, newTemplateName: string)
    : Observable<APIResponse<TemplateDTO>> {
    return from(this.localApiStorageService.templateCreateAsync(user, sourceDiagram, newTemplateName)).pipe(
      map(dto => this.handleSuccess<TemplateDTO>(dto)),
      catchError((err, source) => this.handleError<TemplateDTO>(err, ErrorMessageConstants.templateCreateError))
    );
  }

  // modify existing template
  templateUpdateAsync(user: string, existingTemplateId: string, modifiedTemplate: TemplateCompactDTO)
    : Observable<APIResponse<null>> {
    return from(this.localApiStorageService.templateUpdateAsync(user, existingTemplateId, modifiedTemplate)).pipe(
      map(() => this.handleSuccess<null>(null)),
      catchError((err, source) => this.handleError<null>(err, ErrorMessageConstants.templateUpdateError))
    );
  }

  // delete existing template
  templateDeleteAsync(user: string, templateId: string)
    : Observable<APIResponse<null>> {
    return from(this.localApiStorageService.templateDeleteAsync(user, templateId)).pipe(
      map(() => this.handleSuccess<null>(null)),
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
    return from(this.localApiStorageService.diagramUpdateThumbnailAsync(
      user,
      diagramId,
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

  private handleOptionalSuccess<T>(val?: T): APIResponse<T> {
    return { dto: val };
  }

  private handleSuccess<T>(val: T): APIResponse<T> {
    return { dto: val };
  }

  private getLocalThumbnailUrl(imageGenerationRequest: ImageGenerationRequestDTO): string {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(imageGenerationRequest.htmlData)}`;
  }
}
