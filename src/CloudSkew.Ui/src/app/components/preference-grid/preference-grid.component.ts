import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';
import { GridComponent, GroupSettingsModel, SortDescriptorModel, SortSettingsModel } from '@syncfusion/ej2-angular-grids';
import { EMPTY, Subject } from 'rxjs';
import { catchError, debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { IPreferenceGridItem } from 'src/app/components/preference-grid/preference-grid-item';
import { SymbolFamilyConstants } from 'src/app/constants/symbol-family-constants';
import { LocalPersistenceService } from 'src/app/services/local-persistence.service';
import { SymbolFamilyDefinitions } from '../../constants/symbol-family-definitions';
import { PreferenceService } from './preference.service';

@Component({
    selector: 'app-preference-grid',
    templateUrl: './preference-grid.component.html',
    styles: [],
    standalone: false
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
    private localPersistenceService: LocalPersistenceService,
    private preferenceService: PreferenceService,
  ) {
  }

  ngOnInit() {
    this.preferenceService.requestFeed$
      .pipe(
        debounceTime(1000),
        switchMap(preferences => this.localPersistenceService.updatePreferences(preferences).pipe(
          catchError(() => EMPTY),
        )),
        takeUntil(this.onDestroy$),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  //#region callbacks

  isChecked(FamilyId: SymbolFamilyConstants) {
    return (this.localPersistenceService.preferences & FamilyId) !== 0;
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
    const preferences = args.checked
      ? this.localPersistenceService.preferences | preferenceItem.id
      : this.localPersistenceService.preferences & ~preferenceItem.id;

    this.localPersistenceService.setCurrentPreferences(preferences);
    this.preferenceService.request(preferences);
  }

  //#endregion callbacks
}
