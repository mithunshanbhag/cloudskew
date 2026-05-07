import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { filter, map, mergeMap, takeUntil, tap } from 'rxjs/operators';
import { AnonymousUserConstants } from 'src/app/constants/anonymous-user-constants';
import { NewUserConstants } from 'src/app/constants/new-user-constants';
import { RouteConstants } from 'src/app/constants/route-constants';
import { SymbolFamilyConstants } from 'src/app/constants/symbol-family-constants';
import { UIConstants } from 'src/app/constants/ui-constants';
import { WellKnownIds } from 'src/app/constants/well-knowns-ids';
import { UserProfileDTO } from 'src/app/models/dto/userProfileDTO';
import { NotificationService } from 'src/app/services/notification.service';
import { DiagramDTO } from '../../models/dto/diagramDTO';
import { APIService } from '../../services/api.service';
import { SessionService } from '../../services/session.service';
import { DiagramControlsService } from '../diagram-controls/diagram-controls.service';
import { DiagramDeleteConfirmationDialogComponent } from '../diagram-delete-confirmation-dialog/diagram-delete-confirmation-dialog.component';
import { DiagramExportDialogComponent } from '../diagram-export-dialog/diagram-export-dialog.component';
import { DiagramPrintDialogComponent } from '../diagram-print-dialog/diagram-print-dialog.component';
import { DiagramSaveTemplateDialogComponent } from '../diagram-save-template-dialog/diagram-save-template-dialog.component';
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
    this.processAnonymousUserProfile();
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


  private processAnonymousUserProfile() {
    window.location.hash = ''; // clear the hash fragment from the address bar

    this.sessionService.user = AnonymousUserConstants.emailMD5;
    this.sessionService.preferences = SymbolFamilyConstants.Default;

    this.apiService.userProfileGetAsync(AnonymousUserConstants.emailMD5)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(apiResponse => {
        if (apiResponse.dto) {
          this.sessionService.preferences = apiResponse.dto.preferences;
          const modifiedUserProfile = new UserProfileDTO(
            apiResponse.dto.subscriptionName,
            AnonymousUserConstants.email,
            AnonymousUserConstants.emailMD5,
            this.sessionService.preferences,
            true,
            AnonymousUserConstants.displayName,
            '',
            new Date(),
          );
          this.apiService.userProfileUpdateAsync(AnonymousUserConstants.emailMD5, modifiedUserProfile)
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(() => this.initialize());
          this.statusbarService.request({
            kind: 'IUserProfileChangedEventArgs',
            userProfile: modifiedUserProfile,
          } as IUserProfileChangedEventArgs);
        } else {
          if (apiResponse.error instanceof HttpErrorResponse && apiResponse.error.status === 404) {
            const newUserProfile = new UserProfileDTO(
              NewUserConstants.subscriptionName,
              AnonymousUserConstants.email,
              AnonymousUserConstants.emailMD5,
              this.sessionService.preferences,
              true,
              AnonymousUserConstants.displayName,
              '',
              new Date(),
            );
            this.apiService.userProfileCreateAsync(newUserProfile)
              .pipe(takeUntil(this.onDestroy$))
              .subscribe(() => this.initialize());
            this.statusbarService.request({
              kind: 'IUserProfileChangedEventArgs',
              userProfile: newUserProfile,
            } as IUserProfileChangedEventArgs);
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
