import { Component } from '@angular/core';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //
  appUrl = UrlConstants.appUrl;
  blogUrl = UrlConstants.blogUrl;
  brandingLogoUrl = UrlConstants.brandingLogoUrl;
  docsUrl = UrlConstants.docsUrl;
  statusUrl = UrlConstants.statusUrl;
  title = "CloudSkew";

  constructor(
    private sidenavService: SidenavService,
  ) {
  }

  onHamburgerMenuClick() {
    this.sidenavService.request();
  }
}
