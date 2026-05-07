import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';
import { GridComponent, GroupSettingsModel, SortDescriptorModel, SortSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Subject } from 'rxjs';
import { debounceTime, filter, map, takeUntil } from 'rxjs/operators';
import { IPreferenceGridItem } from 'src/app/components/preference-grid/preference-grid-item';
import { SymbolFamilyConstants } from 'src/app/constants/symbol-family-constants';
import { APIService } from 'src/app/services/api.service';
import { SessionService } from 'src/app/services/session.service';
import { SymbolFamilyDefinitions } from '../../constants/symbol-family-definitions';
import { PreferenceService } from './preference.service';

@Component({
  selector: 'app-preference-grid',
  templateUrl: './preference-grid.component.html',
  styles: []
})
export class PreferenceGridComponent implements OnInit, OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  //#region diagram selector grid
  @ViewChild('preferenceGridControl') control: GridComponent;
  allowGrouping = true;
  groupSettingsModel: GroupSettingsModel = {
    columns: ['fakeColumnForGroupingPurposes'],
    showDropArea: false,
  };
  groupedColumnHeaderText = 'Add/Remove Symbols';
  allowSorting: true;
  sortSettingsModel: SortSettingsModel = { // @todo: fix the sorting later.
    columns: [
      { field: 'name', direction: 'Ascending', }
    ] as SortDescriptorModel[],
  };
  data: IPreferenceGridItem[] = [];
  // recommended way to style syncfusion grid columns:
  // https://ej2.syncfusion.com/angular/documentation/grid/cell/#custom-attributes
  // https://ej2.syncfusion.com/angular/documentation/grid/how-to/customize-column-styles/
  customAttribute: any = { class: 'sidebarGridControlColumnCSS' };
  //#endregion diagram selector grid

  constructor(
    private apiService: APIService,
    private preferenceService: PreferenceService,
    public sessionService: SessionService,
  ) {
  }

  ngOnInit() {
    this.preferenceService.requestFeed$
      .pipe(
        debounceTime(1000),
        takeUntil(this.onDestroy$)
      )
      .subscribe(preferences => {
        this.apiService.userProfileUpdatePreferencesAsync(this.sessionService.user, preferences)
          .pipe(
            filter(apiResponse => !apiResponse.error),
            map(apiResponse => apiResponse.dto),
            takeUntil(this.onDestroy$)
          )
          .subscribe(() => this.preferenceService.eventFeed$.next());
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  //#region callbacks

  isChecked(FamilyId: SymbolFamilyConstants) {
    return (this.sessionService.preferences & FamilyId);
  }

  onPreferenceGridControlCreated() {
    SymbolFamilyDefinitions.forEach(symbolFamilyDefinition => {
      if (symbolFamilyDefinition.id !== SymbolFamilyConstants.General) { // skip the 'General' symbol family
        this.data.push({
          id: symbolFamilyDefinition.id,
          displayName: symbolFamilyDefinition.displayName,
        });
      }
    });
  }

  onPreferenceGridControlDataItemCheckboxChange(preferenceItem: IPreferenceGridItem, args: ChangeEventArgs) {
    this.sessionService.preferences = args.checked
      ? this.sessionService.preferences | preferenceItem.id
      : this.sessionService.preferences & ~preferenceItem.id;

    this.preferenceService.request(this.sessionService.preferences);
  }

  //#endregion callbacks
}
