# Future Landing Page Broken Links and Media

## Summary

These findings were rechecked against the live site at `https://www.cloudskew.com/` on `2026-05-07`.

- 7 listed `href` targets are still broken
- 6 previously broken docs/blog links now resolve successfully
- The previously reported logo/image issue is no longer present on the live site

## Still broken links and hrefs

| Source                     | Config reference          | URL                                                                     | Observed issue                           |
| -------------------------- | ------------------------- | ----------------------------------------------------------------------- | ---------------------------------------- |
| `UrlConstants.appUrl`      | `urlConstants.ts:5`       | `https://app.cloudskew.com/`                                            | DNS lookup failed; host does not resolve |
| `galleryItems[0].shareUrl` | `samples.component.ts:20` | `https://app.cloudskew.com/viewer/4c67e28b-5991-48e1-ab3c-eb9ace54292e` | DNS lookup failed; host does not resolve |
| `galleryItems[1].shareUrl` | `samples.component.ts:27` | `https://app.cloudskew.com/viewer/e21cca59-ada0-48a1-928a-6628042afebf` | DNS lookup failed; host does not resolve |
| `galleryItems[2].shareUrl` | `samples.component.ts:34` | `https://app.cloudskew.com/viewer/eb335650-d335-463b-bde5-b94af25d042c` | DNS lookup failed; host does not resolve |
| `galleryItems[3].shareUrl` | `samples.component.ts:41` | `https://app.cloudskew.com/viewer/af9976e8-a302-4451-b0e2-d048a76424fa` | DNS lookup failed; host does not resolve |
| `galleryItems[4].shareUrl` | `samples.component.ts:48` | `https://app.cloudskew.com/viewer/0610ccbc-c6b6-4167-9fa9-2903a513da08` | DNS lookup failed; host does not resolve |
| `galleryItems[5].shareUrl` | `samples.component.ts:55` | `https://app.cloudskew.com/viewer/0831890b-183d-49ca-9818-57c1af749a3f` | DNS lookup failed; host does not resolve |

## No longer broken

| Source                           | Config reference    | URL                                                               | Current behavior                                                             |
| -------------------------------- | ------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `UrlConstants.blogUrl`           | `urlConstants.ts:6` | `https://blog.cloudskew.com/`                                     | Returns `200 OK`                                                             |
| `UrlConstants.docsUrl`           | `urlConstants.ts:8` | `https://docs.cloudskew.com/`                                     | Returns `200 OK`                                                             |
| `UrlConstants.faqsUrl`           | `urlConstants.ts:9` | `https://docs.cloudskew.com/docs/frequently-asked-questions.html` | Redirects to the extensionless page and returns `200 OK`                     |
| `UrlConstants.privacyPolicyUrl`  | `urlConstants.ts:16` | `https://docs.cloudskew.com/about/privacy-policy.html`           | Redirects to the extensionless page and returns `200 OK`                     |
| `UrlConstants.statusUrl`         | `urlConstants.ts:17` | `https://docs.cloudskew.com/status/current-status.html`          | Redirects to the extensionless page and returns `200 OK`                     |
| `UrlConstants.termsOfServiceUrl` | `urlConstants.ts:18` | `https://docs.cloudskew.com/about/terms-of-service.html`         | Redirects to the extensionless page and returns `200 OK`                     |
| `UrlConstants.brandingLogoUrl`   | `urlConstants.ts:7` | `https://assets.cloudskew.com/assets/logos/cloudskew-logo.png`    | The live site now uses this CDN URL for the header/footer logo and it works |

## Notes

- The homepage HTML still contains the broken `app.cloudskew.com` links for the main CTAs and all six sample "See Live" links.
- The live site no longer serves the logo from `https://www.cloudskew.com/assets/logos/cloudskew-logo.png`; it now uses the working CDN-hosted asset instead.
- This file can be deleted once `https://app.cloudskew.com/` and the six sample viewer URLs resolve again.
