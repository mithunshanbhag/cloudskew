import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  //
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    // details: https://angular.io/guide/universal#working-around-the-browser-apis
    @Inject(DOCUMENT) private document: HTMLDocument,
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private sidenavService: SidenavService,
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.enableGoogleAnalytics();
    }
  }

  ngOnInit() {
    this.sidenavService.requestFeed$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => this.sidenav.toggle());
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private enableGoogleAnalytics() {

    //
    const gtmScriptTag = this.renderer.createElement('script');
    gtmScriptTag.type = 'text/javascript';
    gtmScriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${environment.googleAnalyticsTrackingId}`;
    this.renderer.appendChild(this.document.body, gtmScriptTag);

    // initialization script
    const gtagInitScript = this.renderer.createElement('script');
    gtagInitScript.type = 'text/javascript';
    gtagInitScript.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${environment.googleAnalyticsTrackingId}');
      `;
    this.renderer.appendChild(this.document.body, gtagInitScript);
  }
}
