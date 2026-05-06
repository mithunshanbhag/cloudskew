export interface PageCustomization {
  pageTitle: string;
  heroImageUrl: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  artwork: string;
}

export interface GalleryItem {
  title: string;
  description: string;
  thumbnailUrl: string;
  imgUrl: string;
  shareUrl: string;
}

export interface TestimonialItem {
  name: string;
  job: string;
  testimonial: string;
  artwork: string;
  liveUrl: string;
}

export interface PricingFeature {
  checkboxIcon: string;
  featureText: string;
  featureContext?: string;
  featureContextIcon?: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  subtitle: string;
  features: PricingFeature[];
}
