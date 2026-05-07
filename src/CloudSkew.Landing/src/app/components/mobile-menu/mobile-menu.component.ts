import { Component } from '@angular/core';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent {

  //
  appUrl = UrlConstants.appUrl;
  blogUrl = UrlConstants.blogUrl;
  brandingLogoUrl = UrlConstants.brandingLogoUrl;
  docsUrl = UrlConstants.docsUrl;
  statusUrl = UrlConstants.statusUrl;


  constructor(
    private sidenavService: SidenavService,
  ) {
  }

  onMenuItemClicked() {
    this.sidenavService.request(); // toggles (closes) this open menu
  }
}