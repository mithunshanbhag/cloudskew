import { environment } from "src/environments/environment";

export class UrlConstants {
    // Please keep this list alphabetically sorted.
    public static readonly appUrl = environment.appUrl;
    public static readonly blogUrl = environment.blogUrl;
    public static readonly brandingLogoUrl = `${environment.cdnUrlPrefix}/assets/logos/cloudskew-logo.png`
    public static readonly docsUrl = environment.docsUrl;
    public static readonly faqsUrl = `${environment.docsUrl}/docs/frequently-asked-questions.html`;
    public static readonly heroImageUrlAlibaba = `${environment.cdnUrlPrefix}/assets/samples/alibaba-elearning-vod-solution.png`;
    public static readonly heroImageUrlAws = `${environment.cdnUrlPrefix}/assets/samples/aws-smart-products-platform.png`;
    public static readonly heroImageUrlAzure = `${environment.cdnUrlPrefix}/assets/misc/landing-page-hero-3.png`;
    public static readonly heroImageUrlGCP = `${environment.cdnUrlPrefix}/assets/samples/gcp-realtime-retail-inventory.png`;
    public static readonly heroImageUrlK8S = `${environment.cdnUrlPrefix}/assets/samples/kubernetes-resource-map.png`;
    public static readonly heroImageUrlOCI = `${environment.cdnUrlPrefix}/assets/samples/oci-onprem-db-migration.png`;
    public static readonly privacyPolicyUrl = `${environment.docsUrl}/about/privacy-policy.html`;
    public static readonly statusUrl = `${environment.docsUrl}/status/current-status.html`;
    public static readonly termsOfServiceUrl = `${environment.docsUrl}/about/terms-of-service.html`;
}