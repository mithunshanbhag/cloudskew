import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SidebarService } from 'src/app/components/sidebar/sidebar.service';
import { SidebarType } from './sidebar.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styles: [],
    standalone: false
})
export class SidebarComponent implements OnInit, OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  //
  sidebarType: SidebarType;

  constructor(
    private sidebarService: SidebarService,
  ) { }

  ngOnInit() {

    this.sidebarService.requestFeed$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(activityType => this.processSidebarRequest(activityType));

    this.sidebarService.request('palette'); // by default, load the icon palette in the sidebar
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  //#region utility methods

  processSidebarRequest(newSidebarType: SidebarType) {
    if (this.sidebarType !== newSidebarType) {
      this.sidebarType = newSidebarType;
    }
    this.sidebarService.eventFeed$.next(this.sidebarType);
  }

  //#endregion utility methods
}
