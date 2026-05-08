import { ClipboardModule } from '@angular/cdk/clipboard';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { ConnectorBridgingService, DiagramContextMenuService, DiagramModule, PrintAndExportService, SnappingService, UndoRedoService } from '@syncfusion/ej2-angular-diagrams';
import { GridModule, GroupService, SearchService, SortService } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule, UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { AppComponent } from './app.component';
import { BasicShapePropertiesEditorComponent } from './components/basic-shape-properties-editor/basic-shape-properties-editor.component';
import { ConnectorPropertiesEditorComponent } from './components/connector-properties-editor/connector-properties-editor.component';
import { DiagramControlsComponent } from './components/diagram-controls/diagram-controls.component';
import { DiagramDeleteConfirmationDialogComponent } from './components/diagram-delete-confirmation-dialog/diagram-delete-confirmation-dialog.component';
import { DiagramEditorComponent } from './components/diagram-editor/diagram-editor.component';
import { DiagramExportDialogComponent } from './components/diagram-export-dialog/diagram-export-dialog.component';
import { DiagramImportDialogComponent } from './components/diagram-import-dialog/diagram-import-dialog.component';
import { DiagramPrintDialogComponent } from './components/diagram-print-dialog/diagram-print-dialog.component';
import { DiagramPropertiesEditorComponent } from './components/diagram-properties-editor/diagram-properties-editor.component';
import { DiagramComponent } from './components/diagram/diagram.component';
import { DiagramReplaceConfirmationDialogComponent } from './components/diagram-replace-confirmation-dialog/diagram-replace-confirmation-dialog.component';
import { GroupPropertiesEditorComponent } from './components/group-properties-editor/group-properties-editor.component';
import { ImagePropertiesEditorComponent } from './components/image-properties-editor/image-properties-editor.component';
import { ImageUploadDialogComponent } from './components/image-upload-dialog/image-upload-dialog.component';
import { LoadingBlockComponent } from './components/loading-block/loading-block.component';
import { MultiSelectionPropertiesEditorComponent } from './components/multi-selection-properties-editor/multi-selection-properties-editor.component';
import { NativePropertiesEditorComponent } from './components/native-properties-editor/native-properties-editor.component';
import { PaletteGridComponent } from './components/palette-grid/palette-grid.component';
import { PreferenceGridComponent } from './components/preference-grid/preference-grid.component';
import { PropertiesbarComponent } from './components/propertiesbar/propertiesbar.component';
import { ResourceDocumentationDialogComponent } from './components/resource-documentation-dialog/resource-documentation-dialog.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatusbarComponent } from './components/statusbar/statusbar.component';
import { SymbolPreferencesDialogComponent } from './components/symbol-preferences-dialog/symbol-preferences-dialog.component';
import { TextPropertiesEditorComponent } from './components/text-properties-editor/text-properties-editor.component';
import { PropertiesEditorComponent } from './components/visual-properties-editor/visual-properties-editor.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { DialogProvider } from './services/dialog.service';
import { ErrorHandlerProvider } from './services/global-error-handler.service';
import { NotificationService } from './services/notification.service';

const appRoutes: Routes = [
  // routes should be ordered from most specific to least specific.
  { path: '', component: DiagramEditorComponent }, // default route
  { path: '**', redirectTo: '/', }, // wildcard route
];

@NgModule({ declarations: [
        AppComponent,
        DiagramEditorComponent,
        DiagramControlsComponent,
        DiagramReplaceConfirmationDialogComponent,
        LoadingBlockComponent,
        DiagramComponent,
        PropertiesEditorComponent,
        PaletteGridComponent,
        BasicShapePropertiesEditorComponent,
        TextPropertiesEditorComponent,
        NativePropertiesEditorComponent,
        ConnectorPropertiesEditorComponent,
        DiagramExportDialogComponent,
        DiagramDeleteConfirmationDialogComponent,
        SidebarComponent,
        EllipsisPipe,
        DiagramPrintDialogComponent,
        PropertiesbarComponent,
        ImageUploadDialogComponent,
        ImagePropertiesEditorComponent,
        PreferenceGridComponent,
        StatusbarComponent,
        DiagramPropertiesEditorComponent,
        GroupPropertiesEditorComponent,
        ResourceDocumentationDialogComponent,
        DiagramImportDialogComponent,
        MultiSelectionPropertiesEditorComponent,
        SymbolPreferencesDialogComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserAnimationsModule,
        BrowserModule,
        CheckBoxModule,
        ClipboardModule,
        DiagramModule,
        FontAwesomeModule,
        FormsModule,
        GridModule, // per angular docs, HttpClientModule must be imported after BrowserModule
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
        TextBoxModule,
        RouterModule.forRoot(appRoutes, {})], providers: [
        ConnectorBridgingService,
        DiagramContextMenuService,
        DialogProvider,
        GroupService,
        PrintAndExportService,
        NotificationService, // @todo: check if really needed to be declared in providers array
        SearchService,
        SnappingService,
        SortService,
        UndoRedoService,
        ErrorHandlerProvider,
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }
