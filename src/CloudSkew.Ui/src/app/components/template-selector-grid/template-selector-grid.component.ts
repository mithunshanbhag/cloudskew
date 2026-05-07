import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faPencilAlt, faTrashAlt, faUpload } from '@fortawesome/free-solid-svg-icons';
import { GridComponent, GroupSettingsModel, SearchSettingsModel, SortDescriptorModel, SortSettingsModel } from '@syncfusion/ej2-angular-grids';
import { FileInfo, FocusOutEventArgs, InputEventArgs } from '@syncfusion/ej2-angular-inputs';
import { from, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, mergeMap, takeUntil, tap, toArray } from 'rxjs/operators';
import { ErrorMessageConstants } from 'src/app/constants/error-message-constants';
import { RouteConstants } from 'src/app/constants/route-constants';
import { UIConstants } from 'src/app/constants/ui-constants';
import { TemplateCompactDTO } from 'src/app/models/dto/templateCompactDTO';
import { TemplateDTO } from 'src/app/models/dto/templateDTO';
import { APIService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';
import { SessionService } from 'src/app/services/session.service';
import { DiagramImportDialogComponent } from '../diagram-import-dialog/diagram-import-dialog.component';
import { SidebarService } from '../sidebar/sidebar.service';
import { TemplateSelectorConfirmationDialogComponent } from '../template-selector-confirmation-dialog/template-selector-confirmation-dialog.component';
import { TemplateSelectorDeleteDialogComponent } from '../template-selector-delete-dialog/template-selector-delete-dialog.component';
import { TemplateSelectorEditDialogComponent } from '../template-selector-edit-dialog/template-selector-edit-dialog.component';
import { TemplateSelectorGridService } from './template-selector-grid.service';

@Component({
    selector: 'app-template-selector-grid',
    templateUrl: './template-selector-grid.component.html',
    styleUrls: ['./template-selector-grid.component.css'],
    standalone: false
})
export class TemplateSelectorGridComponent implements OnInit, OnDestroy {

  //
  private search$: Subject<string> = new Subject<string>();
  private onDestroy$: Subject<void> = new Subject<void>();

  //
  faDeleteIcon = faTrashAlt;
  faEditIcon = faPencilAlt;
  faFileImportIcon = faUpload;

  //#region search textbox/input control
  searchControlPlaceholderText = 'Search';
  searchControlShowClearButton = true;
  searchControlCssClass = "e-outline";
  //#endregion search textbox/input control

  //#region diagram selector grid
  @ViewChild('templateSelectorGridControl') control: GridComponent;
  allowGrouping = true;
  groupSettingsModel: GroupSettingsModel = {
    columns: ['visibility'],
    showDropArea: false,
  };
  groupedColumnHeaderText = 'Create New Diagram';
  allowSorting: true;
  sortSettingsModel: SortSettingsModel = { // @todo: fix the sorting later.
    columns: [
      { field: 'name', direction: 'Ascending', }
    ] as SortDescriptorModel[],
  };
  searchModel: SearchSettingsModel = {
    fields: ['name'],
  };
  data$ = new Observable<TemplateCompactDTO[]>();
  // recommended way to style syncfusion grid columns:
  // https://ej2.syncfusion.com/angular/documentation/grid/cell/#custom-attributes
  // https://ej2.syncfusion.com/angular/documentation/grid/how-to/customize-column-styles/
  customAttribute: any = { class: 'sidebarGridControlColumnCSS' };
  buttonWidth = UIConstants.templateSelectorGridButtonWidth;
  deleteButtonColor = 'red';
  //#endregion diagram selector grid

  //#region diagram import dialog
  @ViewChild('diagramImportDialog') diagramImportControl: DiagramImportDialogComponent;
  //#endregion diagram import dialog

  constructor(
    private apiService: APIService,
    private templateSelectorGridService: TemplateSelectorGridService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private router: Router,
    private sessionService: SessionService,
    private sidebarService: SidebarService,
  ) {
  }

  ngOnInit() {
    this.initialize();

    this.templateSelectorGridService.requestFeed$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => this.initialize());

    this.search$
      .pipe(
        debounceTime(400),
        map(searchText => searchText ? searchText.trim() : searchText),
        distinctUntilChanged(),
        takeUntil(this.onDestroy$)
      )
      .subscribe(searchText => this.control.search(searchText));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  //#region callbacks

  onSearchControlInput(args: InputEventArgs) {
    this.search$.next(args.value);
  }

  onSearchControlFocusOut(args: FocusOutEventArgs) {
    // We need to ensure that search box maintains a blue outline whenever any search text has been
    // entered, irrespective of whether the search box has focus or not.
    // see https://github.com/cloudskew/cloudskew/issues/29
    // - if it has some text AND has focus, then the control's built-in functionality will ensure blue outline.
    // - if it has some text BUT no focus, then we need to explicitly add the 'e-input-focus' class to
    //   the list of the textbox's classes (this is per the syncfusion doc below).
    //   https://ej2.syncfusion.com/angular/documentation/textbox/how-to/change-the-color-of-the-textbox-based-on-its-value/
    if (args.value) {
      args.container.classList.add('e-input-focus');
    }
  }

  onDataItemSelected(args: TemplateCompactDTO) {
    const dialogRef = this.dialog.open(TemplateSelectorConfirmationDialogComponent, {
      data: args,
      width: UIConstants.templateSelectorConfirmationDialogWidth,
    } as MatDialogConfig<TemplateCompactDTO>);

    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => this.createDiagramFromTemplate(args));
  }

  onDataItemRenamed(args: TemplateCompactDTO) {
    const dialogRef = this.dialog.open(TemplateSelectorEditDialogComponent, {
      data: args,
      width: UIConstants.templateSelectorEditDialogWidth,
    } as MatDialogConfig<TemplateCompactDTO>);

    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        takeUntil(this.onDestroy$)
      )
      .subscribe(result => this.editTemplateName(args, result));
  }

  onDataItemDeleted(args: TemplateCompactDTO) {
    const dialogRef = this.dialog.open(TemplateSelectorDeleteDialogComponent, {
      data: args,
      width: UIConstants.templateSelectorDeleteDialogWidth,
    } as MatDialogConfig<TemplateCompactDTO>);

    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => this.deleteTemplate(args));
  }

  //#endregion callbacks

  //#region private methods

  // We have to ensure that the 'visibility' is in lowercase (see AZD bug 645).
  // Two ways to do this:
  // 1: use tap() operator on the array and modify using array.forEach().
  // 2: use mergeMap() to convert array to individual items, modify individual items using tap() and
  //    then convert items back to an array using toArray() operator.
  // For no particular reason, we have chosen option #2.
  private initialize() {
    this.data$ = this.apiService.templatesListAsync(this.sessionService.user)
      .pipe(
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        mergeMap(arr => from(arr)),
        tap(dto => dto.visibility = dto.visibility.toLowerCase()), // see AZD bug 645
        filter(dto => dto.visibility === 'private'), // exclude public, local since we have buttons for these
        toArray()
      );
  }

  private createDiagramFromTemplate(template: TemplateCompactDTO) {
    if (template.visibility === 'local') {
      const dialogRef = this.dialog.open(DiagramImportDialogComponent, {
        width: UIConstants.diagramImportOptionsDialogWidth,
      } as MatDialogConfig);

      dialogRef.afterClosed()
        .pipe(
          filter(result => !!result),
          takeUntil(this.onDestroy$)
        )
        .subscribe(result => this.importDiagram(template, result));

    } else {
      this.apiService.diagramCreateAsync(this.sessionService.user, template.id)
        .pipe(
          filter(apiResponse => !apiResponse.error),
          map(apiResponse => apiResponse.dto),
          takeUntil(this.onDestroy$)
        )
        .subscribe(dto => this.router.navigate([RouteConstants.editor, dto.id]));
    }
  }

  private deleteTemplate(template: TemplateCompactDTO) {
    this.apiService.templateDeleteAsync(this.sessionService.user, template.id)
      .pipe(
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => this.templateSelectorGridService.request());
  }

  private editTemplateName(template: TemplateCompactDTO, newTemplateName: string) {
    const newDiagramTemplateName = newTemplateName.trim();

    const modifiedTemplate: TemplateCompactDTO = {
      id: template.id,
      name: newDiagramTemplateName,
      emailMD5: template.emailMD5,
      lastUpdatedUTC: template.lastUpdatedUTC,
      notes: template.notes,
      thumbnailUrl: template.thumbnailUrl,
      visibility: template.visibility,
    };

    this.apiService.templateUpdateAsync(template.emailMD5, template.id, modifiedTemplate)
      .pipe(
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$),
      )
      .subscribe(() => {
        this.templateSelectorGridService.request(); // refresh the diagram selector grid

        this.notificationService.request({
          kind: 'IDiagramNotificationRequestArgs',
          type: 'success',
          title: 'Template Renamed',
          content: `Template renamed: ${newDiagramTemplateName}`,
        });

        this.sidebarService.request('template');
      });
  }

  private importDiagram(template: TemplateCompactDTO, args: any) {
    const fileInfo = (args.file as FileInfo);
    const rawFile = (fileInfo.rawFile as Blob);
    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (this.isJson(fileReader.result as string)) {

        const sourceTemplateDTO: TemplateDTO = {
          id: template.id,
          name: fileInfo.name,
          diagramDetails: fileReader.result as string,
          visibility: template.visibility,
        };
        this.apiService.diagramImportAsync(this.sessionService.user, sourceTemplateDTO)
          .pipe(
            filter(apiResponse => !apiResponse.error),
            map(apiResponse => apiResponse.dto),
            takeUntil(this.onDestroy$)
          )
          .subscribe(dto => this.router.navigate([RouteConstants.editor, dto.id]));

      } else {

        this.notificationService.request({
          kind: 'IDiagramNotificationRequestArgs',
          type: 'error',
          title: 'Error',
          content: ErrorMessageConstants.invalidJsonFile,
        });
      }
    };

    fileReader.readAsText(rawFile);
  }

  private isJson(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  //#endregion private methods
}
