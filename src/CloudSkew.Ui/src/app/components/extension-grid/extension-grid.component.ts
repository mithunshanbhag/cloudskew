import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GridComponent, GroupSettingsModel, SearchSettingsModel, SortDescriptorModel, SortSettingsModel } from '@syncfusion/ej2-angular-grids';
import { InputEventArgs } from '@syncfusion/ej2-angular-inputs';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { IExtensionDefinition } from 'src/app/interfaces/extension-definition';
import { DiagramDTO } from 'src/app/models/dto/diagramDTO';
import { ExtensionDefinitions } from './extension-definitions';

@Component({
  selector: 'app-extension-grid',
  templateUrl: './extension-grid.component.html',
  styles: []
})
export class ExtensionGridComponent implements OnInit, OnDestroy {

  //
  private search$: Subject<string> = new Subject<string>();
  private onDestroy$: Subject<void> = new Subject<void>();

  //#region search textbox/input control
  searchControlPlaceholderText = 'Search';
  searchControlShowClearButton = true;
  searchControlCssClass = "e-outline";
  //#endregion search textbox/input control

  //#region extension grid
  @ViewChild('extensionGridControl') control: GridComponent;
  allowGrouping = true;
  groupSettingsModel: GroupSettingsModel = {
    columns: ['fakeColumnForGroupingPurposes'],
    showDropArea: false,
  };
  groupedColumnHeaderText = 'Extensions';
  allowSorting: true;
  sortSettingsModel: SortSettingsModel = { // @todo: fix the sorting later.
    columns: [
      { field: 'displayName', direction: 'Ascending', }
    ] as SortDescriptorModel[],
  };
  searchModel: SearchSettingsModel = {
    fields: ['displayName'],
  };
  data: IExtensionDefinition[] = ExtensionDefinitions;
  // recommended way to style syncfusion grid columns:
  // https://ej2.syncfusion.com/angular/documentation/grid/cell/#custom-attributes
  // https://ej2.syncfusion.com/angular/documentation/grid/how-to/customize-column-styles/
  customAttribute: any = { class: 'sidebarGridControlColumnCSS' };
  //#endregion extension grid

  constructor(
  ) {
  }

  ngOnInit() {
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
    this.search$.next('');
    this.search$.complete();
  }

  //#region callbacks

  onSearchControlInput(args: InputEventArgs) {
    this.search$.next(args.value);
  }

  onExtensionGridControlDataItemSelected(args: DiagramDTO) {
  }

  //#endregion callbacks
}
