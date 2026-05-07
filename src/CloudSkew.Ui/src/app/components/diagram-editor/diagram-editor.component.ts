import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { Observable, of, Subject } from 'rxjs';
import { filter, map, mergeMap, take, takeUntil, tap } from 'rxjs/operators';
import { AuthenticationConstants } from 'src/app/constants/authentication-constants';
import { NewUserConstants } from 'src/app/constants/new-user-constants';
import { RouteConstants } from 'src/app/constants/route-constants';
import { SymbolFamilyConstants } from 'src/app/constants/symbol-family-constants';
import { UIConstants } from 'src/app/constants/ui-constants';
import { WellKnownIds } from 'src/app/constants/well-knowns-ids';
import { UserProfileDTO } from 'src/app/models/dto/userProfileDTO';
import { NotificationService } from 'src/app/services/notification.service';
import { Md5 } from 'ts-md5';
import { DiagramDTO } from '../../models/dto/diagramDTO';
import { APIService } from '../../services/api.service';
import { SessionService } from '../../services/session.service';
import { DiagramControlsService } from '../diagram-controls/diagram-controls.service';
import { DiagramDeleteConfirmationDialogComponent } from '../diagram-delete-confirmation-dialog/diagram-delete-confirmation-dialog.component';
import { DiagramExportDialogComponent } from '../diagram-export-dialog/diagram-export-dialog.component';
import { DiagramPrintDialogComponent } from '../diagram-print-dialog/diagram-print-dialog.component';
import { DiagramSaveTemplateDialogComponent } from '../diagram-save-template-dialog/diagram-save-template-dialog.component';
import { DiagramShareDialogComponent } from '../diagram-share-dialog/diagram-share-dialog.component';
import { DiagramService, IDiagramExportRequestArgs, IDiagramPrintRequestArgs } from '../diagram/diagram.service';
import { DocumentEditorDialogComponent } from '../document-editor-dialog/document-editor-dialog.component';
import { SidebarService } from '../sidebar/sidebar.service';
import { IUserProfileChangedEventArgs, StatusbarService } from '../statusbar/statusbar.service';
import { TemplateSelectorGridService } from '../template-selector-grid/template-selector-grid.service';

@Component({
    selector: 'app-diagram-editor',
    templateUrl: './diagram-editor.component.html',
    styleUrls: ['./diagram-editor.component.css'],
    standalone: false
})
export class DiagramEditorComponent implements OnInit, OnDestroy {

  //
  diagram$: Observable<DiagramDTO> = new Observable<DiagramDTO>();

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private apiService: APIService,
    private authService: AuthService,
    private diagramService: DiagramService,
    private diagramControlsService: DiagramControlsService,
    private templateSelectorGridService: TemplateSelectorGridService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private router: Router,
    private sessionService: SessionService,
    private sidebarService: SidebarService,
    private statusbarService: StatusbarService,
  ) {
  }

  ngOnInit() {
    //#region COMMENT-OUT-DURING-MAINTENANCE-WINDOW
    this.authService.user$
      .pipe(
        take(1),
        takeUntil(this.onDestroy$))
      .subscribe((userProfile: User) => this.processUserProfile(userProfile));
    //#endregion COMMENT-OUT-DURING-MAINTENANCE-WINDOW
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  //#region callbacks

  onDiagramDeleteButtonClick(diagram: DiagramDTO) {
    const dialogRef = this.dialog.open(DiagramDeleteConfirmationDialogComponent, {
      data: diagram,
      width: UIConstants.diagramDeleteConfirmationDialogWidth,
    } as MatDialogConfig<DiagramDTO>);

    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => this.deleteDiagram(diagram));
  }

  onDiagramExportButtonClick(diagram: DiagramDTO) {
    const dialogRef = this.dialog.open(DiagramExportDialogComponent, {
      data: diagram,
      width: UIConstants.diagramExportOptionsDialogWidth,
    } as MatDialogConfig<DiagramDTO>);

    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        takeUntil(this.onDestroy$)
      )
      .subscribe((result: string) => this.diagramService.request({
        kind: 'IDiagramExportRequestArgs',
        format: result,
      } as IDiagramExportRequestArgs));
  }

  onDiagramPrintButtonClick(diagram: DiagramDTO) {
    const dialogRef = this.dialog.open(DiagramPrintDialogComponent, {
      data: diagram,
      width: UIConstants.diagramPrintOptionsDialogWidth,
    } as MatDialogConfig<DiagramDTO>);

    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => this.diagramService.request({
        kind: 'IDiagramPrintRequestArgs'
      } as IDiagramPrintRequestArgs));
  }

  onDiagramSaveTemplateButtonClick(diagram: DiagramDTO) {
    const dialogRef = this.dialog.open(DiagramSaveTemplateDialogComponent, {
      data: diagram,
      width: UIConstants.diagramSaveTemplateDialogWidth
    } as MatDialogConfig<DiagramDTO>);

    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        takeUntil(this.onDestroy$)
      )
      .subscribe((result) => this.saveDiagramAsTemplate(diagram, result));
  }

  onDiagramShareButtonClick(diagram: DiagramDTO) {
    this.dialog.open(DiagramShareDialogComponent, {
      data: diagram,
      width: UIConstants.diagramShareOptionsDialogWidth,
    } as MatDialogConfig<DiagramDTO>);
  }

  onDiagramDocumentEditorButtonClick(diagram: DiagramDTO) {
    this.dialog.open(DocumentEditorDialogComponent, {
      data: diagram,
      width: UIConstants.documentEditorDialogWidth,
    } as MatDialogConfig<DiagramDTO>);
  }

  //#endregion callbacks

  //#region private helper methods

  private initialize() {
    this.route.paramMap
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(params => {
        const id = params.get('id');
        if (id) {

          // if a diagram is specified on route, then fetch it.
          this.diagram$ = this.apiService.diagramGetAsync(this.sessionService.user, id)
            .pipe(
              filter(apiResponse => !apiResponse.error),
              map(apiResponse => apiResponse.dto),
            );

        } else {

          // fetch last updated diagram. If none exists, create a new diagram for user
          this.apiService.diagramGetLastUpdatedAsync(this.sessionService.user)
            .pipe(
              mergeMap(apiResponse => (!apiResponse.error && !apiResponse.dto)
                // well-known Id of 'blank diagram' template
                ? this.apiService.diagramCreateAsync(this.sessionService.user, WellKnownIds.BlankTemplateId)
                : of(apiResponse)
              ),
              filter(apiResponse => !apiResponse.error),
              map(apiResponse => apiResponse.dto),
              takeUntil(this.onDestroy$)
            )
            .subscribe(dto => this.router.navigate([RouteConstants.editor, dto.id]));

        }
      });
  }


  private processUserProfile(userProfile: User) {
    window.location.hash = ''; // clear the hash fragment from the address bar

    this.sessionService.user = Md5.hashStr(userProfile.email) as string;
    this.sessionService.preferences = SymbolFamilyConstants.Default;

    // map logged-in user to known or new user in cloudskew db.
    // @todo: This must really go into a resolve-guard?
    const userEmailMD5 = Md5.hashStr(userProfile.email) as string;

    this.apiService.userProfileGetAsync(userEmailMD5)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(apiResponse => {
        // user exists in our db.
        // let's simply update the user profile then.
        if (apiResponse.dto) {
          this.sessionService.preferences = apiResponse.dto.preferences;
          const modifiedUserProfile = new UserProfileDTO(
            apiResponse.dto.subscriptionName,
            apiResponse.dto.email,
            apiResponse.dto.emailMD5,
            this.sessionService.preferences,
            userProfile.email_verified,
            userProfile.name,
            userProfile.picture,
            new Date(userProfile.updated_at),
          );
          this.apiService.userProfileUpdateAsync(userEmailMD5, modifiedUserProfile)
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(() => this.initialize());
          this.statusbarService.request({
            kind: 'IUserProfileChangedEventArgs',
            userProfile: modifiedUserProfile,
            user: userProfile,
          } as IUserProfileChangedEventArgs);
        } else {
          // if 404, then this is a new user (i.e. user does not exist in our db)
          // let's create a new user profile in db.
          if (apiResponse.error instanceof HttpErrorResponse && apiResponse.error.status === 404) {
            const newUserProfile = new UserProfileDTO(
              NewUserConstants.subscriptionName, // let's get users started with the free tier.
              userProfile.email,
              userEmailMD5,
              this.sessionService.preferences,
              userProfile.email_verified,
              userProfile.name,
              userProfile.picture,
              new Date(userProfile.updated_at),
            );
            this.apiService.userProfileCreateAsync(newUserProfile)
              .pipe(takeUntil(this.onDestroy$))
              .subscribe(() => this.initialize());
            this.statusbarService.request({
              kind: 'IUserProfileChangedEventArgs',
              userProfile: newUserProfile,
              user: userProfile,
            } as IUserProfileChangedEventArgs);

            // if non-404 error
          } else {
            setTimeout(() => {
              // the logout steps
              this.sessionService.clear();
              this.authService.logout({
                clientId: AuthenticationConstants.auth0ClientId,
                logoutParams: {
                  returnTo: AuthenticationConstants.auth0LogoutUrl,
                },
              });
            }, 1500);
          }
        }
      });

  }


  private saveDiagramAsTemplate(diagram: DiagramDTO, templateName: string) {
    templateName = templateName.trim();

    this.diagramControlsService.request({
      kind: 'IDiagramControlsExportTemplateArgs',
      exportTemplateInProgress: true,
    });

    this.apiService.templateCreateAsync(diagram.emailMD5, diagram.id, templateName)
      .pipe(
        tap(() => this.diagramControlsService.request({
          kind: 'IDiagramControlsExportTemplateArgs',
          exportTemplateInProgress: false,
        })),
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$),
      )
      .subscribe(dto => {
        this.templateSelectorGridService.request(); // refresh the diagram selector grid

        this.notificationService.request({
          kind: 'IDiagramNotificationRequestArgs',
          type: 'success',
          title: 'Template Created',
          content: `Template created: ${dto.name}`,
        });

        this.sidebarService.request('template');
      });
  }


  private deleteDiagram(diagram: DiagramDTO) {
    this.diagramControlsService.request({
      kind: 'IDiagramControlsDeleteArgs',
      deleteInProgress: true,
    });

    this.apiService.diagramDeleteAsync(diagram.emailMD5, diagram.id)
      .pipe(
        tap(() => this.diagramControlsService.request({
          kind: 'IDiagramControlsDeleteArgs',
          deleteInProgress: false,
        })),
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$)
      )
      // a page reload (will automatically fetch next 'last updated' diagram)
      .subscribe(() => this.router.navigate([RouteConstants.root]));
  }

  //#endregion private helper methods
}
