import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { EMPTY, Subject } from 'rxjs';
import { catchError, debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { IPreferenceGridItem } from 'src/app/components/preference-grid/preference-grid-item';
import { SymbolFamilyConstants } from 'src/app/constants/symbol-family-constants';
import { LocalPersistenceService } from 'src/app/services/local-persistence.service';
import { SymbolFamilyDefinitions } from '../../constants/symbol-family-definitions';
import { PreferenceService } from './preference.service';

interface IPreferenceGroup {
  title: string;
  items: IPreferenceGridItem[];
}

@Component({
    selector: 'app-preference-grid',
    templateUrl: './preference-grid.component.html',
    styleUrls: ['./preference-grid.component.css'],
    standalone: false
})
export class PreferenceGridComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new Subject<void>();
  private readonly cloudProviderFamilyIds = new Set<SymbolFamilyConstants>([
    SymbolFamilyConstants.AWS,
    SymbolFamilyConstants.Azure,
    SymbolFamilyConstants.GCP,
    SymbolFamilyConstants.IBM,
    SymbolFamilyConstants.Oracle,
    SymbolFamilyConstants.DigitalOcean,
    SymbolFamilyConstants.Alibaba,
  ]);
  private readonly platformAndToolFamilyIds = new Set<SymbolFamilyConstants>([
    SymbolFamilyConstants.K8s_CNCF_Ecosystem,
    SymbolFamilyConstants.Elastic,
    SymbolFamilyConstants.VMWare,
    SymbolFamilyConstants.FontAwesome,
    SymbolFamilyConstants.HashiCorp,
    SymbolFamilyConstants.Cloudflare,
  ]);

  @Input() dialogMode = false;
  preferenceGroups: IPreferenceGroup[] = [];

  constructor(
    private localPersistenceService: LocalPersistenceService,
    private preferenceService: PreferenceService,
  ) {
  }

  ngOnInit() {
    this.initializePreferenceGroups();

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

  onPreferenceItemCheckboxChange(preferenceItem: IPreferenceGridItem, args: MatCheckboxChange) {
    const preferences = args.checked
      ? this.localPersistenceService.preferences | preferenceItem.id
      : this.localPersistenceService.preferences & ~preferenceItem.id;

    this.localPersistenceService.setCurrentPreferences(preferences);
    this.preferenceService.request(preferences);
  }

  private initializePreferenceGroups() {
    const preferenceItems = SymbolFamilyDefinitions
      .filter(symbolFamilyDefinition => symbolFamilyDefinition.id !== SymbolFamilyConstants.General)
      .map(symbolFamilyDefinition => ({
        id: symbolFamilyDefinition.id,
        displayName: symbolFamilyDefinition.displayName,
      } satisfies IPreferenceGridItem))
      .sort((left, right) => left.displayName.localeCompare(right.displayName));

    const cloudProviderItems = preferenceItems.filter(item => this.cloudProviderFamilyIds.has(item.id));
    const platformAndToolItems = preferenceItems.filter(item => this.platformAndToolFamilyIds.has(item.id));
    const otherItems = preferenceItems.filter(item =>
      !this.cloudProviderFamilyIds.has(item.id) && !this.platformAndToolFamilyIds.has(item.id));

    this.preferenceGroups = [
      { title: 'Cloud providers', items: cloudProviderItems },
      { title: 'Platforms and tools', items: platformAndToolItems },
    ];

    if (otherItems.length > 0) {
      this.preferenceGroups.push({
        title: 'Other',
        items: otherItems,
      });
    }
  }
}
