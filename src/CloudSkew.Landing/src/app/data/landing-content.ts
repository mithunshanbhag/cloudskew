import {
  FeatureItem,
  GalleryItem,
  PageCustomization,
  PricingPlan,
  TestimonialItem,
} from './landing.models';

export const landingMetaDescription =
  'CloudSkew is an online editor for making flowcharts, diagrams (including AWS, Azure, GCP, Kubernetes, OCI architecture diagrams) and more!';

export const externalUrls = {
  appUrl: 'https://app.cloudskew.com',
  blogUrl: 'https://blog.cloudskew.com',
  brandingLogoUrl: '/assets/logos/cloudskew-logo.png',
  docsUrl: 'https://docs.cloudskew.com',
  faqsUrl: 'https://docs.cloudskew.com/docs/frequently-asked-questions.html',
  privacyPolicyUrl: 'https://docs.cloudskew.com/about/privacy-policy.html',
  statusUrl: 'https://docs.cloudskew.com/status/current-status.html',
  termsOfServiceUrl: 'https://docs.cloudskew.com/about/terms-of-service.html',
} as const;

export const heroTypewriterWords = [
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
] as const;

const defaultPageCustomization: PageCustomization = {
  pageTitle: 'Online Diagram, Flowchart Maker | CloudSkew',
  heroImageUrl: '/assets/misc/landing-page-hero-3.png',
};

const pageCustomizationsBySolutionId: Record<string, PageCustomization> = {
  'draw-alibaba-cloud-architecture-diagrams-online': {
    pageTitle: 'Free Alibaba Cloud Architecture Diagram Tool | CloudSkew',
    heroImageUrl: '/assets/samples/alibaba-elearning-vod-solution.png',
  },
  'draw-aws-architecture-diagrams-online': {
    pageTitle: 'Free AWS Architecture Diagram Tool | CloudSkew',
    heroImageUrl: '/assets/samples/aws-smart-products-platform.png',
  },
  'draw-azure-architecture-diagrams-online': {
    pageTitle: 'Free Azure Architecture Diagram Tool | CloudSkew',
    heroImageUrl: '/assets/misc/landing-page-hero-3.png',
  },
  'draw-cloud-architecture-diagrams-online': {
    pageTitle: 'Free Cloud Architecture Diagram Tool | CloudSkew',
    heroImageUrl: '/assets/misc/landing-page-hero-3.png',
  },
  'draw-gcp-architecture-diagrams-online': {
    pageTitle: 'Free GCP Architecture Diagram Tool | CloudSkew',
    heroImageUrl: '/assets/samples/gcp-realtime-retail-inventory.png',
  },
  'draw-google-cloud-architecture-diagrams-online': {
    pageTitle: 'Free GCP Architecture Diagram Tool | CloudSkew',
    heroImageUrl: '/assets/samples/gcp-realtime-retail-inventory.png',
  },
  'draw-kubernetes-architecture-diagrams-online': {
    pageTitle: 'Free Kubernetes Architecture Diagram Tool | CloudSkew',
    heroImageUrl: '/assets/samples/kubernetes-resource-map.png',
  },
  'draw-multi-cloud-architecture-diagrams-online': {
    pageTitle: 'Free Multi-Cloud Architecture Diagram Tool | CloudSkew',
    heroImageUrl: '/assets/misc/landing-page-hero-3.png',
  },
  'draw-oci-architecture-diagrams-online': {
    pageTitle: 'Free Oracle Cloud Architecture Diagram Tool | CloudSkew',
    heroImageUrl: '/assets/samples/oci-onprem-db-migration.png',
  },
  'draw-oracle-cloud-architecture-diagrams-online': {
    pageTitle: 'Free Oracle Cloud Architecture Diagram Tool | CloudSkew',
    heroImageUrl: '/assets/samples/oci-onprem-db-migration.png',
  },
};

export const solutionRouteIds = Object.keys(pageCustomizationsBySolutionId);

export function getPageCustomization(solutionId: string | null | undefined): PageCustomization {
  if (!solutionId) {
    return defaultPageCustomization;
  }

  return pageCustomizationsBySolutionId[solutionId.trim().toLowerCase()] ?? defaultPageCustomization;
}

export const featureItems: FeatureItem[] = [
  {
    artwork: '/assets/feature-icon-no-installation-needed.svg',
    title: 'No installation needed',
    description:
      "CloudSkew is an online diagram & flowchart editor. You don't have to install any software. Just login and start drawing!",
  },
  {
    artwork: '/assets/feature-icon-all-icons-included.svg',
    title: 'All icons included',
    description:
      "Icons for AWS, Azure, GCP, Kubernetes, CNCF, Alibaba Cloud, IBM Cloud, Oracle Cloud (OCI) and more are already available in the app. You don't have to search for & download the symbols separately.",
  },
  {
    artwork: '/assets/feature-icon-start-for-free.svg',
    title: 'Start for free',
    description:
      'CloudSkew has a free plan for beginners. Upgrade to the professional plan to create unlimited diagrams & templates.',
  },
  {
    artwork: '/assets/feature-icon-autosaved-to-cloud.svg',
    title: 'Autosaved to the cloud',
    description:
      "CloudSkew is also your cloud diagram repository. All your diagrams are autosaved to CloudSkew's secure cloud backend.",
  },
  {
    artwork: '/assets/feature-icon-built-in-document-editor.svg',
    title: 'Built-in document editor',
    description:
      "With CloudSkew's built-in document editor, you can easily annotate and document your architecture diagrams, network diagrams & flowcharts.",
  },
  {
    artwork: '/assets/feature-icon-minimal-no-frills.svg',
    title: 'Minimal, no frills',
    description:
      "CloudSkew's UI is designed to be clean, simple & minimal. No complicated features, no complex workflows.",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: 'Alibaba Cloud',
    description: 'Video on demand solution',
    thumbnailUrl: '/assets/thumbnails/alibaba.png',
    imgUrl: '/assets/samples/alibaba-elearning-vod-solution.png',
    shareUrl: 'https://app.cloudskew.com/viewer/4c67e28b-5991-48e1-ab3c-eb9ace54292e',
  },
  {
    title: 'AWS',
    description: 'Smart products platform',
    thumbnailUrl: '/assets/thumbnails/aws.png',
    imgUrl: '/assets/samples/aws-smart-products-platform.png',
    shareUrl: 'https://app.cloudskew.com/viewer/e21cca59-ada0-48a1-928a-6628042afebf',
  },
  {
    title: 'Azure',
    description: 'Microservices on AKS',
    thumbnailUrl: '/assets/thumbnails/azure.png',
    imgUrl: '/assets/samples/microservices-on-aks.png',
    shareUrl: 'https://app.cloudskew.com/viewer/eb335650-d335-463b-bde5-b94af25d042c',
  },
  {
    title: 'GCP',
    description: 'Real-time retail inventory',
    thumbnailUrl: '/assets/thumbnails/gcp.png',
    imgUrl: '/assets/samples/gcp-realtime-retail-inventory.png',
    shareUrl: 'https://app.cloudskew.com/viewer/af9976e8-a302-4451-b0e2-d048a76424fa',
  },
  {
    title: 'Kubernetes',
    description: 'Kubernetes resource map',
    thumbnailUrl: '/assets/thumbnails/kubernetes.png',
    imgUrl: '/assets/samples/kubernetes-resource-map.png',
    shareUrl: 'https://app.cloudskew.com/viewer/0610ccbc-c6b6-4167-9fa9-2903a513da08',
  },
  {
    title: 'Oracle Cloud (OCI)',
    description: 'Migration of on-prem db to OCI',
    thumbnailUrl: '/assets/thumbnails/oci.png',
    imgUrl: '/assets/samples/oci-onprem-db-migration.png',
    shareUrl: 'https://app.cloudskew.com/viewer/0831890b-183d-49ca-9818-57c1af749a3f',
  },
];

export const testimonialItems: TestimonialItem[] = [
  {
    name: 'Wesley Haakman',
    job: 'Microsoft MVP | Lead Architect @ Intercept',
    testimonial: '"I absolutely fell in love with CloudSkew. Things you need are.. just.. there.."',
    artwork: '/assets/triangle-icon.svg',
    liveUrl: 'https://twitter.com/whaakman/status/1370035551231967235',
  },
  {
    name: 'Anand Kumar R',
    job: 'Cloud Solution Architect @ Microsoft',
    testimonial:
      '"So I used cloudskew.com for the first time and it was a breeze, super easy and intuitive to create architecture diagrams! Love it."',
    artwork: '/assets/square-icon.svg',
    liveUrl: 'https://twitter.com/ranand12/status/1278370886198886406',
  },
  {
    name: 'Dan Clarke',
    job: 'Microsoft MVP | Developer @ EverStack',
    testimonial:
      '"Wow, CloudSkew by @MithunShanbhag is a really nice online diagramming tool with tons of built-in dev icons (Azure, K8S, programming langs, etc, etc)..."',
    artwork: '/assets/plus-icon.svg',
    liveUrl: 'https://twitter.com/dracan/status/1306108161007509504',
  },
  {
    name: 'Swaminathan Vetri',
    job: 'Microsoft MVP | Architect @ Maersk',
    testimonial:
      '"CloudSkew is a super cool product. Neat and clean to draw cloud arch diagrams. Kudos to @MithunShanbhag for this great product."',
    artwork: '/assets/ellipse-icon.svg',
    liveUrl: 'https://twitter.com/svswaminathan/status/1224358759364845569',
  },
  {
    name: 'Mike Rodrick',
    job: 'Edutainer @ ITProTV',
    testimonial:
      'If you need to make Azure architecture diagrams, give CloudSkew a try, this tool is awesome!',
    artwork: '/assets/square-icon.svg',
    liveUrl: 'https://twitter.com/Mike_ITProTV/status/1219711202370170881',
  },
  {
    name: 'Sathyajit Bhat',
    job: 'AWS Community Hero | DevOps @ Adobe',
    testimonial:
      '"Cloudskew from @MithunShanbhag is a fantastic tool for drawing out cloud architectures. I\'ve used it couple of times and found it very handy."',
    artwork: '/assets/multiply-icon.svg',
    liveUrl: 'https://twitter.com/SathyaBhat/status/1275800008747515905',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    title: 'Free',
    price: '$0',
    subtitle: 'Free forever',
    features: [
      { checkboxIcon: '/assets/check-icon-black.svg', featureText: '1 diagram' },
      { checkboxIcon: '/assets/check-icon-black.svg', featureText: '1 template' },
      { checkboxIcon: '/assets/check-icon-black.svg', featureText: 'Standard support' },
      { checkboxIcon: '/assets/check-icon-black.svg', featureText: 'Infinite canvas size' },
      { checkboxIcon: '/assets/check-icon-black.svg', featureText: 'Autosaved to cloud' },
      { checkboxIcon: '/assets/check-icon-black.svg', featureText: 'Built-in document editor' },
      { checkboxIcon: '/assets/check-icon-black.svg', featureText: 'Print, export, share' },
    ],
  },
  {
    title: 'Professional',
    price: '$36 / year',
    subtitle: 'Limited time offer',
    features: [
      { checkboxIcon: '/assets/check-icon-green.svg', featureText: 'Unlimited diagrams' },
      {
        checkboxIcon: '/assets/check-icon-green.svg',
        featureText: 'Unlimited templates',
        featureContext: 'Create as many reusable diagram templates as needed',
        featureContextIcon: '/assets/info-icon-green.svg',
      },
      {
        checkboxIcon: '/assets/check-icon-green.svg',
        featureText: 'Priority support',
        featureContext: '24 hr response time for support requests',
        featureContextIcon: '/assets/info-icon-green.svg',
      },
      { checkboxIcon: '/assets/check-icon-black.svg', featureText: 'Infinite canvas size' },
      { checkboxIcon: '/assets/check-icon-black.svg', featureText: 'Autosaved to cloud' },
      { checkboxIcon: '/assets/check-icon-black.svg', featureText: 'Built-in document editor' },
      { checkboxIcon: '/assets/check-icon-black.svg', featureText: 'Print, export, share' },
    ],
  },
];
