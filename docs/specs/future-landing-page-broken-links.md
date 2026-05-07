# Future Landing Page Broken Links and Media

## Summary

These findings were captured from the live site at `https://www.cloudskew.com/` and cross-checked against the configured URLs in `src\CloudSkew.Landing\src\app\data\landing-content.ts`.

- 13 broken `href` targets
- 1 broken image/media asset
- `/` and the legacy `/solutions/:solutionId` routes loaded successfully
- No broken in-page fragment links were observed

## Broken links and hrefs

| Source                           | Config reference         | URL                                                                     | Observed issue                           |
| -------------------------------- | ------------------------ | ----------------------------------------------------------------------- | ---------------------------------------- |
| `externalUrls.appUrl`            | `landing-content.ts:13`  | `https://app.cloudskew.com/`                                            | DNS lookup failed; host does not resolve |
| `externalUrls.blogUrl`           | `landing-content.ts:14`  | `https://blog.cloudskew.com/`                                           | DNS lookup failed; host does not resolve |
| `externalUrls.docsUrl`           | `landing-content.ts:16`  | `https://docs.cloudskew.com/`                                           | DNS lookup failed; host does not resolve |
| `externalUrls.faqsUrl`           | `landing-content.ts:17`  | `https://docs.cloudskew.com/docs/frequently-asked-questions.html`       | DNS lookup failed; host does not resolve |
| `externalUrls.privacyPolicyUrl`  | `landing-content.ts:18`  | `https://docs.cloudskew.com/about/privacy-policy.html`                  | DNS lookup failed; host does not resolve |
| `externalUrls.statusUrl`         | `landing-content.ts:19`  | `https://docs.cloudskew.com/status/current-status.html`                 | DNS lookup failed; host does not resolve |
| `externalUrls.termsOfServiceUrl` | `landing-content.ts:20`  | `https://docs.cloudskew.com/about/terms-of-service.html`                | DNS lookup failed; host does not resolve |
| `galleryItems[0].shareUrl`       | `landing-content.ts:140` | `https://app.cloudskew.com/viewer/4c67e28b-5991-48e1-ab3c-eb9ace54292e` | DNS lookup failed; host does not resolve |
| `galleryItems[1].shareUrl`       | `landing-content.ts:147` | `https://app.cloudskew.com/viewer/e21cca59-ada0-48a1-928a-6628042afebf` | DNS lookup failed; host does not resolve |
| `galleryItems[2].shareUrl`       | `landing-content.ts:154` | `https://app.cloudskew.com/viewer/eb335650-d335-463b-bde5-b94af25d042c` | DNS lookup failed; host does not resolve |
| `galleryItems[3].shareUrl`       | `landing-content.ts:161` | `https://app.cloudskew.com/viewer/af9976e8-a302-4451-b0e2-d048a76424fa` | DNS lookup failed; host does not resolve |
| `galleryItems[4].shareUrl`       | `landing-content.ts:168` | `https://app.cloudskew.com/viewer/0610ccbc-c6b6-4167-9fa9-2903a513da08` | DNS lookup failed; host does not resolve |
| `galleryItems[5].shareUrl`       | `landing-content.ts:175` | `https://app.cloudskew.com/viewer/0831890b-183d-49ca-9818-57c1af749a3f` | DNS lookup failed; host does not resolve |

## Broken images and media

| Source                         | Config reference        | URL                                                         | Observed issue                           |
| ------------------------------ | ----------------------- | ----------------------------------------------------------- | ---------------------------------------- |
| `externalUrls.brandingLogoUrl` | `landing-content.ts:15` | `https://www.cloudskew.com/assets/logos/cloudskew-logo.png` | Returns `404 Not Found` on the live site |

## Notes

- The broken logo was confirmed from live network requests on both the homepage and a legacy solution page.
- The broken `app.cloudskew.com`, `blog.cloudskew.com`, and `docs.cloudskew.com` URLs were confirmed by browser navigation failures and DNS resolution failures.
- Other social links, testimonial links, hero images, sample images, and in-page anchors loaded successfully during this audit.
