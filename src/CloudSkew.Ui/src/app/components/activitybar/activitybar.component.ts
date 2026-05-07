import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SidebarService, SidebarType } from 'src/app/components/sidebar/sidebar.service';
import { UrlConstants } from '../../constants/url-constants';


@Component({
    selector: 'app-activitybar',
    templateUrl: './activitybar.component.html',
    styleUrls: ['./activitybar.component.css'],
    standalone: false
})
export class ActivitybarComponent implements OnInit, OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  //
  activeSidebarType: SidebarType = 'none';

  //
  faqsUrl = UrlConstants.faqsUrl;
  cloudskewSupportEmail = UrlConstants.cloudskewSupportEmail;
  githubIssuesUrl = UrlConstants.githubIssuesUrl;
  releaseNotesUrl = UrlConstants.releaseNotesUrl;
  keyboardShortcutsUrl = UrlConstants.keyboardShortcutsUrl;
  logoUrl = `${UrlConstants.cdnUrlPrefix}/assets/logos/cloudskew-logo.png`;

  constructor(
    public sidebarService: SidebarService,
  ) { }

  ngOnInit() {
    this.sidebarService.eventFeed$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((args: SidebarType) => this.activeSidebarType = args);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
