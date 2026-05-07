import { ClipboardModule } from '@angular/cdk/clipboard';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, AuthModule } from '@auth0/auth0-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { ConnectorBridgingService, DiagramContextMenuService, DiagramModule, PrintAndExportService, SnappingService, UndoRedoService } from '@syncfusion/ej2-angular-diagrams';
import { GridModule, GroupService, SearchService, SortService } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule, UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { HtmlEditorService, LinkService, QuickToolbarService, RichTextEditorModule, TableService, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { AppComponent } from './app.component';
import { ActivitybarComponent } from './components/activitybar/activitybar.component';
import { AuthenticationCallbackComponent } from './components/authentication-callback/authentication-callback.component';
import { BasicShapePropertiesEditorComponent } from './components/basic-shape-properties-editor/basic-shape-properties-editor.component';
import { CheckoutSessionCallbackComponent } from './components/checkout-session-callback/checkout-session-callback.component';
import { ConnectorPropertiesEditorComponent } from './components/connector-properties-editor/connector-properties-editor.component';
import { DiagramControlsReadOnlyComponent } from './components/diagram-controls-read-only/diagram-controls-read-only.component';
import { DiagramControlsComponent } from './components/diagram-controls/diagram-controls.component';
import { DiagramDeleteConfirmationDialogComponent } from './components/diagram-delete-confirmation-dialog/diagram-delete-confirmation-dialog.component';
import { DiagramEditorDeactivateGuard } from './components/diagram-editor/diagram-editor-deactivate.guard';
import { DiagramEditorComponent } from './components/diagram-editor/diagram-editor.component';
import { DiagramExportDialogComponent } from './components/diagram-export-dialog/diagram-export-dialog.component';
import { DiagramImportDialogComponent } from './components/diagram-import-dialog/diagram-import-dialog.component';
import { DiagramNameEditorComponent } from './components/diagram-name-editor/diagram-name-editor.component';
import { DiagramNameViewerComponent } from './components/diagram-name-viewer/diagram-name-viewer.component';
import { DiagramPreviewComponent } from './components/diagram-preview/diagram-preview.component';
import { DiagramPrintDialogComponent } from './components/diagram-print-dialog/diagram-print-dialog.component';
import { DiagramPropertiesEditorComponent } from './components/diagram-properties-editor/diagram-properties-editor.component';
import { DiagramReadOnlyComponent } from './components/diagram-read-only/diagram-read-only.component';
import { DiagramSaveTemplateDialogComponent } from './components/diagram-save-template-dialog/diagram-save-template-dialog.component';
import { DiagramSelectorConfirmationDialogComponent } from './components/diagram-selector-confirmation-dialog/diagram-selector-confirmation-dialog.component';
import { DiagramSelectorGridComponent } from './components/diagram-selector-grid/diagram-selector-grid.component';
import { DiagramShareDialogComponent } from './components/diagram-share-dialog/diagram-share-dialog.component';
import { DiagramViewerComponent } from './components/diagram-viewer/diagram-viewer.component';
import { DiagramComponent } from './components/diagram/diagram.component';
import { DocumentEditorDialogComponent } from './components/document-editor-dialog/document-editor-dialog.component';
import { DocumentViewerDialogComponent } from './components/document-viewer-dialog/document-viewer-dialog.component';
import { ExtensionGridComponent } from './components/extension-grid/extension-grid.component';
import { GroupPropertiesEditorComponent } from './components/group-properties-editor/group-properties-editor.component';
import { ImagePropertiesEditorComponent } from './components/image-properties-editor/image-properties-editor.component';
import { ImageUploadDialogComponent } from './components/image-upload-dialog/image-upload-dialog.component';
import { LoadingBlockComponent } from './components/loading-block/loading-block.component';
import { LogoutConfirmationDialogComponent } from './components/logout-confirmation-dialog/logout-confirmation-dialog.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MultiSelectionPropertiesEditorComponent } from './components/multi-selection-properties-editor/multi-selection-properties-editor.component';
import { NativePropertiesEditorComponent } from './components/native-properties-editor/native-properties-editor.component';
import { PaletteGridComponent } from './components/palette-grid/palette-grid.component';
import { PreferenceGridComponent } from './components/preference-grid/preference-grid.component';
import { PricingDialogComponent } from './components/pricing-dialog/pricing-dialog.component';
import { PropertiesbarComponent } from './components/propertiesbar/propertiesbar.component';
import { ResourceDocumentationDialogComponent } from './components/resource-documentation-dialog/resource-documentation-dialog.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatusbarReadOnlyComponent } from './components/statusbar-read-only/statusbar-read-only.component';
import { StatusbarComponent } from './components/statusbar/statusbar.component';
import { TemplatePreviewComponent } from './components/template-preview/template-preview.component';
import { TemplateSelectorConfirmationDialogComponent } from './components/template-selector-confirmation-dialog/template-selector-confirmation-dialog.component';
import { TemplateSelectorDeleteDialogComponent } from './components/template-selector-delete-dialog/template-selector-delete-dialog.component';
import { TemplateSelectorEditDialogComponent } from './components/template-selector-edit-dialog/template-selector-edit-dialog.component';
import { TemplateSelectorGridComponent } from './components/template-selector-grid/template-selector-grid.component';
import { TextPropertiesEditorComponent } from './components/text-properties-editor/text-properties-editor.component';
import { PropertiesEditorComponent } from './components/visual-properties-editor/visual-properties-editor.component';
import { AuthenticationConstants } from './constants/authentication-constants';
import { UrlConstants } from './constants/url-constants';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { DialogProvider } from './services/dialog.service';
import { ErrorHandlerProvider } from './services/global-error-handler.service';
import { HttpInterceptorProviders } from './services/http-interceptor.service';
import { NotificationService } from './services/notification.service';

const appRoutes: Routes = [
  // routes should be ordered from most specific to least specific.
  { path: 'authcallback', component: AuthenticationCallbackComponent },
  { path: 'checkoutsessioncallback/:id', component: CheckoutSessionCallbackComponent },
  { path: 'editor/:id', component: DiagramEditorComponent, canActivate: [AuthGuard], canDeactivate: [DiagramEditorDeactivateGuard], },
  { path: 'logout', component: LogoutComponent, },
  { path: 'viewer/:id', component: DiagramViewerComponent, },
  { path: '', component: DiagramEditorComponent, canActivate: [AuthGuard], /*resolve: {userProfileData: UserProfileResolverService}*/ }, // default route
  { path: '**', redirectTo: '/', }, // wildcard route
];

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationCallbackComponent,
    LogoutComponent,
    DiagramEditorComponent,
    DiagramNameEditorComponent,
    DiagramControlsComponent,
    LoadingBlockComponent,
    DiagramComponent,
    PropertiesEditorComponent,
    PaletteGridComponent,
    BasicShapePropertiesEditorComponent,
    TextPropertiesEditorComponent,
    NativePropertiesEditorComponent,
    ConnectorPropertiesEditorComponent,
    DiagramExportDialogComponent,
    LogoutConfirmationDialogComponent,
    DiagramDeleteConfirmationDialogComponent,
    ActivitybarComponent,
    SidebarComponent,
    DiagramSelectorGridComponent,
    TemplateSelectorGridComponent,
    EllipsisPipe,
    DiagramPrintDialogComponent,
    TemplateSelectorConfirmationDialogComponent,
    SanitizeHtmlPipe,
    ExtensionGridComponent,
    PropertiesbarComponent,
    ImageUploadDialogComponent,
    ImagePropertiesEditorComponent,
    PreferenceGridComponent,
    DiagramViewerComponent,
    DiagramReadOnlyComponent,
    DiagramNameViewerComponent,
    DiagramShareDialogComponent,
    DocumentEditorDialogComponent,
    DocumentViewerDialogComponent,
    StatusbarComponent,
    DiagramPropertiesEditorComponent,
    GroupPropertiesEditorComponent,
    TemplateSelectorEditDialogComponent,
    TemplateSelectorDeleteDialogComponent,
    DiagramSaveTemplateDialogComponent,
    DiagramControlsReadOnlyComponent,
    StatusbarReadOnlyComponent,
    ResourceDocumentationDialogComponent,
    DiagramImportDialogComponent,
    DiagramPreviewComponent,
    CheckoutSessionCallbackComponent,
    PricingDialogComponent,
    MultiSelectionPropertiesEditorComponent,
    DiagramSelectorConfirmationDialogComponent,
    TemplatePreviewComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CheckBoxModule,
    ClipboardModule,
    DiagramModule,
    FontAwesomeModule,
    FormsModule,
    GridModule,
    HttpClientModule, // per angular docs, HttpClientModule must be imported after BrowserModule
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    UploaderModule,
    ReactiveFormsModule,
    RichTextEditorModule,
    TextBoxModule,
    AuthModule.forRoot({
      domain: AuthenticationConstants.auth0Domain,
      clientId: AuthenticationConstants.auth0ClientId,
      redirectUri: AuthenticationConstants.auth0RedirectUri,
      scope: AuthenticationConstants.auth0Scope,
      audience: AuthenticationConstants.auth0Audience,
      httpInterceptor: {
        allowedList: [ // bearer token will be attached to matching urls
          {
            // note: no '/' between 'users' and '*'. This is needed since we need to POST
            // on /users endpoint (which creating new userProfiles).
            uri: `${UrlConstants.webAPIUrl}/users*`,
          },
        ],
      },
    }),
    RouterModule.forRoot(appRoutes, {
      relativeLinkResolution: 'legacy'
    }),
  ],
  providers: [
    ConnectorBridgingService,
    DiagramContextMenuService,
    DialogProvider,
    GroupService,
    HttpInterceptorProviders,
    PrintAndExportService,
    NotificationService, // @todo: check if really needed to be declared in providers array
    SearchService,
    SnappingService,
    SortService,
    LinkService,
    HtmlEditorService,
    QuickToolbarService,
    TableService,
    ToolbarService,
    UndoRedoService,
    ErrorHandlerProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
