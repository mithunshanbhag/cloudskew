import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Configuration, init as typewriterInit } from 'ityped';
import { PageTitleConstants } from 'src/app/constants/page-title-constants';
import { SolutionKeys } from 'src/app/constants/solution-keys';
import { SolutionRoutes } from 'src/app/constants/solution-routes';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { PageCustomization } from './page-customization';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  //
  appUrl = UrlConstants.appUrl;
  heroImageUrl = UrlConstants.heroImageUrlAzure;
  customizations: Record<SolutionKeys, PageCustomization> = {
    ALIBABA: { pageTitle: PageTitleConstants.ALIBABA, heroImageUrl: UrlConstants.heroImageUrlAlibaba },
    AWS: { pageTitle: PageTitleConstants.AWS, heroImageUrl: UrlConstants.heroImageUrlAws },
    AZURE: { pageTitle: PageTitleConstants.AZURE, heroImageUrl: UrlConstants.heroImageUrlAzure },
    CLOUD: { pageTitle: PageTitleConstants.CLOUD, heroImageUrl: UrlConstants.heroImageUrlAzure },
    DEFAULT: { pageTitle: PageTitleConstants.DEFAULT, heroImageUrl: UrlConstants.heroImageUrlAzure },
    GCP: { pageTitle: PageTitleConstants.GCP, heroImageUrl: UrlConstants.heroImageUrlGCP },
    K8S: { pageTitle: PageTitleConstants.K8S, heroImageUrl: UrlConstants.heroImageUrlK8S },
    MULTICLOUD: { pageTitle: PageTitleConstants.MULTICLOUD, heroImageUrl: UrlConstants.heroImageUrlAzure },
    OCI: { pageTitle: PageTitleConstants.OCI, heroImageUrl: UrlConstants.heroImageUrlOCI },
  };

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    // details: https://angular.io/guide/universal#working-around-the-browser-apis
    @Inject(DOCUMENT) private document: HTMLDocument,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  //#region lifecycle hooks

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (isPlatformBrowser(this.platformId)) {
        this.enableTypewriter();
      }

      const solutionId = params.get('solutionId');
      const customizations = this.getPageCustomization(solutionId);

      this.titleService.setTitle(customizations.pageTitle);
      this.heroImageUrl = customizations.heroImageUrl;
    });
  }

  //#endregion

  //#region private helper methods

  private getPageCustomization(solutionId: string | null): PageCustomization {
    if (solutionId) {
      switch (solutionId.trim().toLowerCase()) {
        case SolutionRoutes.ALIBABA1:
          return this.customizations['ALIBABA'];
        case SolutionRoutes.AWS1:
          return this.customizations['AWS'];
        case SolutionRoutes.AZURE1:
          return this.customizations['AZURE'];
        case SolutionRoutes.CLOUD1:
          return this.customizations['CLOUD'];
        case SolutionRoutes.GCP1:
        case SolutionRoutes.GCP2:
          return this.customizations['GCP'];
        case SolutionRoutes.K8S1:
          return this.customizations['K8S'];
        case SolutionRoutes.MULTICLOUD1:
          return this.customizations['MULTICLOUD'];
        case SolutionRoutes.OCI1:
        case SolutionRoutes.OCI2:
          return this.customizations['OCI'];
        default:
        case 'DEFAULT':
          return this.customizations['DEFAULT'];
      }
    }

    return this.customizations['DEFAULT'];
  }


  private enableTypewriter() {
    const elem: Element = this.document.querySelector('#cs-section-title-cursor') as Element;
    const config: Configuration = {
      strings: [
        'Flowchart',
        'AWS',
        'Azure',
        'Google Cloud',
        'Kubernetes',
        'Oracle Cloud',
        'Alibaba Cloud',
        'IBM Cloud',
        'Elastic Cloud',
        'Network',
        'Cloud Architecture',
      ],
      typeSpeed: 100,
      startDelay: 2000,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    };

    typewriterInit(elem, config);
  }

  //#endregion
}
