import { environment } from 'src/environments/environment';

export class UrlConstants {
    // Please keep this list alphabetically sorted.
    public static readonly cdnUrlPrefix = environment.cdnUrlPrefix;
    public static readonly cloudskewSupportEmail = 'mailto:support@cloudskew.com';
    public static readonly customImagesUrlPrefix = environment.customImagesUrlPrefix;
    public static readonly diagramHelperWebAPIUrl = environment.diagramHelperWebAPIUrl;
    public static readonly diagramShareUrl = environment.diagramShareUrl;
    public static readonly faqsUrl = `${environment.docsUrl}/docs/frequently-asked-questions.html`;
    public static readonly githubIssuesUrl = 'https://github.com/cloudskew/cloudskew/issues';
    public static readonly keyboardShortcutsUrl = `${environment.docsUrl}/docs/keyboard-shortcuts.html`;
    public static readonly previewUnavailableImageUrl = `${environment.cdnUrlPrefix}/assets/misc/preview-unavailable.svg`;
    public static readonly privacyPolicyUrl = `${environment.docsUrl}/about/privacy-policy.html`;
    public static readonly releaseNotesUrl = 'https://github.com/cloudskew/cloudskew/releases';
    public static readonly termsOfServiceUrl = `${environment.docsUrl}/about/terms-of-service.html`;
    public static readonly webAPIPublicUrl = environment.webAPIPublicUrl;
    public static readonly webAPIUrl = environment.webAPIUrl;
}