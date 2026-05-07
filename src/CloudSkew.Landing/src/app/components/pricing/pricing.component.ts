import { Component } from '@angular/core';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { PricingTable } from './pricingTable';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {

  //
  appUrl = UrlConstants.appUrl;
  faqsUrl = UrlConstants.faqsUrl;
  termOfServiceUrl = UrlConstants.termsOfServiceUrl;
  privacyPolicyUrl = UrlConstants.privacyPolicyUrl;

  pricingPlans: PricingTable[] = [
    // free plan details
    {
      title: "Free",
      price: "$0",
      subtitle: "Free forever",
      features: [
        {
          checkboxIcon: "../../../assets/check-icon-black.svg",
          featureText: "1 diagram",
        },
        {
          checkboxIcon: "../../../assets/check-icon-black.svg",
          featureText: "1 template",
        },
        {
          checkboxIcon: "../../../assets/check-icon-black.svg",
          featureText: "Standard support",
        },
        {
          checkboxIcon: "../../../assets/check-icon-black.svg",
          featureText: "Infinite canvas size",
        },
        {
          checkboxIcon: "../../../assets/check-icon-black.svg",
          featureText: "Autosaved to cloud",
        },
        {
          checkboxIcon: "../../../assets/check-icon-black.svg",
          featureText: "Built-in document editor",
        },
        {
          checkboxIcon: "../../../assets/check-icon-black.svg",
          featureText: "Print, export, share",
        },
      ],
    },

    // professional plan details
    {
      title: "Professional",
      price: "$36 / year",
      subtitle: "Limited time offer",
      features: [
        {
          checkboxIcon: "../../../assets/check-icon-green.svg",
          featureText: "Unlimited diagrams",
        },
        {
          checkboxIcon: "../../../assets/check-icon-green.svg",
          featureText: "Unlimited templates",
          featureContext: "Create as many reusable diagram templates as needed",
          featureContextIcon: "../../../assets/info-icon-green.svg",
        },
        {
          checkboxIcon: "../../../assets/check-icon-green.svg",
          featureText: "Priority support",
          featureContext: "24 hr response time for support requests",
          featureContextIcon: "../../../assets/info-icon-green.svg",
        },
        {
          checkboxIcon: "../../../assets/check-icon-black.svg",
          featureText: "Infinite canvas size",
        },
        {
          checkboxIcon: "../../../assets/check-icon-black.svg",
          featureText: "Autosaved to cloud",
        },
        {
          checkboxIcon: "../../../assets/check-icon-black.svg",
          featureText: "Built-in document editor",
        },
        {
          checkboxIcon: "../../../assets/check-icon-black.svg",
          featureText: "Print, export, share",
        },
      ],
    },
  ];


  constructor() { }
}
