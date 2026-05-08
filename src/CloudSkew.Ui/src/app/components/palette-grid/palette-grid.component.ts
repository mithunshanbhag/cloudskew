import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { GridComponent, GroupSettingsModel, SearchSettingsModel, SortDescriptorModel, SortSettingsModel } from '@syncfusion/ej2-angular-grids';
import { FocusOutEventArgs, InputEventArgs } from '@syncfusion/ej2-angular-inputs';
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { DiagramService, IDiagramAddSymbolRequestArgs } from 'src/app/components/diagram/diagram.service';
import { IPaletteGridItem } from 'src/app/components/palette-grid/palette-grid-item';
import { SymbolFamilyConstants } from 'src/app/constants/symbol-family-constants';
import { SymbolGroupConstants } from 'src/app/constants/symbol-group-constants';
import { SymbolIdConstants } from 'src/app/constants/symbol-id-constants';
import { UIConstants } from 'src/app/constants/ui-constants';
import { WarningMessageConstants } from 'src/app/constants/warning-message-constants';
import { ISymbolFamilyDefinition } from 'src/app/interfaces/symbol-family-definition';
import { LocalPersistenceService } from 'src/app/services/local-persistence.service';
import { IResourceDocumentationRequest } from '../../interfaces/resource-documentation-request';
import { ResourceDocumentationDialogComponent } from '../resource-documentation-dialog/resource-documentation-dialog.component';
import { SymbolFamilyDefinitions } from '../../constants/symbol-family-definitions';

setCulture('en-US');
L10n.load({
  'en-US': {
    grid: {
      EmptyRecord: WarningMessageConstants.iconNotFoundWarning,
    }
  }
});

@Component({
    selector: 'app-palette-grid',
    templateUrl: './palette-grid.component.html',
    styleUrls: ['./palette-grid.component.css'],
    standalone: false
})
export class PaletteGridComponent implements OnInit, OnDestroy {

  //
  private search$: Subject<string> = new Subject<string>();
  private onDestroy$: Subject<void> = new Subject<void>();

  //
  faInfoIcon = faEllipsisH;

  //#region palette search textbox/input control
  paletteSearchControlPlaceholderText = 'Search';
  paletteSearchControlShowClearButton = true;
  paletteSearchControlCssClass = "e-outline";
  //#endregion palette search textbox/input control

  //#region palette grid
  @ViewChild('paletteGridControl') paletteGridControl: GridComponent;
  paletteGridControlAllowGrouping = true;
  paletteGridControlGroupSettingsModel: GroupSettingsModel = {
    columns: ['groupDisplayName'],
    showDropArea: false,
  };
  paletteGridControlAllowSorting: true;
  paletteGridControlSortSettingsModel: SortSettingsModel = { // @todo: fix the sorting later.
    columns: [
      { field: 'groupId', direction: 'Ascending', isFromGroup: true, },
      { field: 'symbolId', direction: 'Ascending', }
    ] as SortDescriptorModel[],
  };
  paletteGridControlSearchModel: SearchSettingsModel = {
    fields: ['symbolId', 'symbolDisplayName', 'symbolSynonyms', 'groupId', 'groupDisplayName', 'groupTags'],
  };
  paletteGridControlData: IPaletteGridItem[] = [];
  paletteGridControlSymbolImageWidth = UIConstants.paletteGridControlSymbolImageWidth;
  paletteGridControlSymbolInfoGlyphWidth = UIConstants.paletteGridControlSymbolInfoGlyphWidth;
  // recommended way to style syncfusion grid columns:
  // https://ej2.syncfusion.com/angular/documentation/grid/cell/#custom-attributes
  // https://ej2.syncfusion.com/angular/documentation/grid/how-to/customize-column-styles/
  paletteGridControlCustomAttribute: any = { class: 'sidebarGridControlColumnCSS' };
  //#endregion palette grid

  constructor(
    private diagramService: DiagramService,
    private localPersistenceService: LocalPersistenceService,
    private resourceDocumentationDialog: MatDialog,
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
      .subscribe(searchText => this.paletteGridControl.search(searchText));

    this.localPersistenceService.preferences$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => this.initialize());
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  //#region callbacks

  onPaletteSearchControlInput(args: InputEventArgs) {
    this.search$.next(args.value);
  }

  onPaletteSearchSearchFocusOut(args: FocusOutEventArgs) {
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

  onPaletteGridControlCreated() {
    this.initialize();
  }

  onPaletteGridControlDataItemSelected(args: IPaletteGridItem) {
    this.diagramService.request({
      kind: 'IDiagramAddSymbolRequestArgs',
      symbolId: args.symbolId,
      symbolGroupId: args.groupId,
      symbolFamilyId: args.familyId,
    } as IDiagramAddSymbolRequestArgs);
  }

  onPaletteGridControlInfoGlyphClicked(args: IPaletteGridItem) {
    this.resourceDocumentationDialog.open(ResourceDocumentationDialogComponent, {
      data: {
        symbolId: args.symbolId,
        symbolGroupId: args.groupId,
        symbolFamilyId: args.familyId,
      } as IResourceDocumentationRequest,
    } as MatDialogConfig<IResourceDocumentationRequest>);
  }

  onAddCustomImageButtonClicked() {
    const generalSymbolFamily = SymbolFamilyDefinitions.find(symbolFamilyDefinition => symbolFamilyDefinition.id === SymbolFamilyConstants.General);
    const generalSymbolGroup = generalSymbolFamily.SymbolGroups.find(symbolGroupDefinition => symbolGroupDefinition.id === SymbolGroupConstants.General);

    const requestedSymbolFamilyId: SymbolFamilyConstants = SymbolFamilyConstants.General;
    const requestedSymbolGroupId = generalSymbolGroup.id;
    const requestedSymbolId = generalSymbolGroup.symbols.find(symbol => symbol.id === SymbolIdConstants.CustomImage).id;

    this.diagramService.request({
      kind: 'IDiagramAddSymbolRequestArgs',
      symbolId: requestedSymbolId,
      symbolGroupId: requestedSymbolGroupId,
      symbolFamilyId: requestedSymbolFamilyId,
    });
  }

  //#endregion callbacks

  //#region private helper methods

  private initialize() {
    this.paletteGridControlData = []; // clear existing contents

    SymbolFamilyDefinitions
      .filter(symbolFamily => this.isEnabled(symbolFamily))
      .forEach(symbolFamily =>
        symbolFamily.SymbolGroups.forEach(symbolGroup =>
          symbolGroup.symbols.forEach(symbol => this.paletteGridControlData.push({
            familyId: symbolFamily.id,
            groupId: symbolGroup.id,
            groupDisplayName: symbolGroup.displayName,
            groupTags: symbolGroup.tags ? symbolGroup.tags.join() : '',
            symbolId: symbol.id,
            symbolDisplayName: symbol.displayName,
            symbolDescription: symbol.description,
            symbolSvgUrl: symbol.svgUrl,
            symbolSynonyms: symbol.synonyms ? symbol.synonyms.join() : '',
            hasDocs: symbol.docs ? true : false,
          } as IPaletteGridItem))
        )
      );
  }

  private isEnabled(symbolFamily: ISymbolFamilyDefinition): boolean {
    return ((this.localPersistenceService.preferences & symbolFamily.id as number) !== 0);
  }

  //#endregion private helper methods
}
