import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GridComponent, GroupSettingsModel, SearchSettingsModel, SortDescriptorModel, SortSettingsModel } from '@syncfusion/ej2-angular-grids';
import { FocusOutEventArgs, InputEventArgs } from '@syncfusion/ej2-angular-inputs';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { RouteConstants } from 'src/app/constants/route-constants';
import { UIConstants } from 'src/app/constants/ui-constants';
import { DiagramCompactDTO } from 'src/app/models/dto/diagramCompactDTO';
import { APIService } from 'src/app/services/api.service';
import { SessionService } from 'src/app/services/session.service';
import { DiagramDeleteConfirmationDialogComponent } from '../diagram-delete-confirmation-dialog/diagram-delete-confirmation-dialog.component';
import { DiagramSelectorConfirmationDialogComponent } from '../diagram-selector-confirmation-dialog/diagram-selector-confirmation-dialog.component';
import { DiagramSelectorGridService } from './diagram-selector-grid.service';

@Component({
    selector: 'app-diagram-selector-grid',
    templateUrl: './diagram-selector-grid.component.html',
    styles: [],
    standalone: false
})
export class DiagramSelectorGridComponent implements OnInit, OnDestroy {

  //
  private search$: Subject<string> = new Subject<string>();
  private onDestroy$: Subject<void> = new Subject<void>();

  //#region search textbox/input control
  searchControlPlaceholderText = 'Search';
  searchControlShowClearButton = true;
  searchControlCssClass = "e-outline";
  //#endregion search textbox/input control

  //#region diagram selector grid
  @ViewChild('diagramSelectorGridControl') control: GridComponent;
  allowGrouping = true;
  groupSettingsModel: GroupSettingsModel = {
    columns: ['fakeColumnForGroupingPurposes'],
    showDropArea: false,
  };
  groupedColumnHeaderText = 'My Diagrams';
  allowSorting: true;
  sortSettingsModel: SortSettingsModel = { // @todo: fix the sorting later.
    columns: [
      { field: 'name', direction: 'Ascending', }
    ] as SortDescriptorModel[],
  };
  searchModel: SearchSettingsModel = {
    fields: ['name'],
  };
  data$ = new Observable<DiagramCompactDTO[]>();
  // recommended way to style syncfusion grid columns:
  // https://ej2.syncfusion.com/angular/documentation/grid/cell/#custom-attributes
  // https://ej2.syncfusion.com/angular/documentation/grid/how-to/customize-column-styles/
  customAttribute: any = { class: 'sidebarGridControlColumnCSS' };
  //#endregion diagram selector grid

  constructor(
    private apiService: APIService,
    private diagramSelectorGridService: DiagramSelectorGridService,
    private dialog: MatDialog,
    private sessionService: SessionService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.initialize();

    this.diagramSelectorGridService.requestFeed$
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

  onDataItemSelected(args: DiagramCompactDTO) {
    const dialogRef = this.dialog.open(DiagramSelectorConfirmationDialogComponent, {
      data: args,
      width: UIConstants.diagramSelectorConfirmationDialogWidth,
    } as MatDialogConfig<DiagramCompactDTO>);

    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => this.router.navigate([RouteConstants.editor, args.id]));
  }

  onDataItemDeleted(args: DiagramCompactDTO) {
    const dialogRef = this.dialog.open(DiagramDeleteConfirmationDialogComponent, {
      data: args,
      width: UIConstants.diagramDeleteConfirmationDialogWidth,
    } as MatDialogConfig<DiagramCompactDTO>);

    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        takeUntil(this.onDestroy$)
      )
      .subscribe(/* @todo: fix this later */);
  }

  //#endregion callbacks

  //#region private methods

  private initialize() {
    this.data$ = this.apiService.diagramsListAsync(this.sessionService.user)
      .pipe(
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
      );
  }

  //#endregion private methods
}
