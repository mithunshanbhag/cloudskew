import { Component } from '@angular/core';
import { UrlConstants } from 'src/app/constants/urlConstants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  // urls
  appUrl = UrlConstants.appUrl;
  blogUrl = UrlConstants.blogUrl;
  brandingLogoUrl = UrlConstants.brandingLogoUrl;
  docsUrl = UrlConstants.docsUrl;
  faqsUrl = UrlConstants.faqsUrl;
  privacyPolicyUrl = UrlConstants.privacyPolicyUrl;
  statusUrl = UrlConstants.statusUrl;
  termsOfServiceUrl = UrlConstants.termsOfServiceUrl;

  // alt texts & titles for <img> tags
  emailText = "support@cloudskew.com";
  githubText = "Report an issue on Github";
  twitterText = "Twitter";
  youtubeText = "YouTube";

  constructor() { }
}
