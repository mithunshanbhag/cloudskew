import { Component } from '@angular/core';
import { FeatureItem } from './featureItem';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {

  // 
  featureItems: FeatureItem[] = [
    {
      artwork: '../../../assets/feature-icon-no-installation-needed.svg',
      title: 'No installation needed',
      description: `CloudSkew is an online diagram & flowchart editor. You don't have to install any software. Just login and start drawing!`,
    },
    {
      artwork: '../../../assets/feature-icon-all-icons-included.svg',
      title: 'All icons included',
      description: `Icons for AWS, Azure, GCP, Kubernetes, CNCF, Alibaba Cloud, IBM Cloud, Oracle Cloud (OCI) and more are already available in the app. You don't have to search for & download the symbols separately.`,
    },
    {
      artwork: '../../../assets/feature-icon-start-for-free.svg',
      title: 'Start for free',
      description: `CloudSkew has a free plan for beginners. Upgrade to the professional plan to create unlimited diagrams & templates.`,
    },
    {
      artwork: '../../../assets/feature-icon-autosaved-to-cloud.svg',
      title: 'Autosaved to the cloud',
      description: `CloudSkew is also your cloud diagram repository. All your diagrams are autosaved to CloudSkew's secure cloud backend.`,
    },
    {
      artwork: '../../../assets/feature-icon-built-in-document-editor.svg',
      title: 'Built-in document editor',
      description: `With CloudSkew's built-in document editor, you can easily annotate and document your architecture diagrams, network diagrams & flowcharts.`,
    },
    {
      artwork: '../../../assets/feature-icon-minimal-no-frills.svg',
      title: 'Minimal, no frills',
      description: `CloudSkew's UI is designed to be clean, simple & minimal. No complicated features, no complex workflows.`,
    },
  ];

  constructor() { }
}
