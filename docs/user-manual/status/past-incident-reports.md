# Past Incidents

Post-mortems on past incidents

## 2021-12-15

**Symptom**: CloudSkew user experienced delays or timeouts during login.

**Status**: Resolved :heavy_check_mark:

**Root Cause**: Our identity provider Auth0 was [experiencing outage issues in multiple regions](https://status.auth0.com/).

**Investigation notes**: 

* While the root cause was understood, unfortunately no workarounds were available (identity providers are usually the a point of failure).

## 2021-12-01

**Symptom**: CloudSkew APIs were unresponsive for about 4 minutes.

**Status**: Resolved :heavy_check_mark:

**Root Cause**: An out of memory (OOM) issue caused by the Print API's high memory footprint.

**Investigation notes**:

* The Print APIs need to be isolated in a separate App service plan (so any OOMs in these APIs don't interrupt the other diagram/template APIs).

## 2021-05-25

**Symptom**: CloudSkew was offline for 24 hours as part of a scheduled/preplanned outage for maintenance reasons.

**Status**: Resolved :heavy_check_mark:

**Root Cause**: For billing purposes, CloudSkew's underlying Azure resources had to be moved from one Azure subscription to another.

**Investigation notes**:

* [Github issue tracking this incident](https://github.com/cloudskew/cloudskew/issues/144).

## 2020-11-26

**Symptom**: CloudSkew users encountered an `unable to fetch user profile` error and were unable to access their content.

**Status**: Resolved :heavy_check_mark:

**Root Cause**: The [CloudSkew API](./../about/cloudskew-architecture.md#web-apis) was non-responsive and had to be restarted.

**Investigation notes**:

* [Github issue tracking this incident](https://github.com/cloudskew/cloudskew/issues/136).
* Unexpectedly, this API outage did not trigger our [automated alerts](./../about/cloudskew-architecture.md#incident-management). This issue now been fixed and the alerts are now triggering normally.

## 2020-11-24

**Symptom**: New, first-time CloudSkew users encountered an `unable to fetch diagram` error when they signed up. Workaround was to just refresh the browser (F5) to make the error go away.

**Status**: Resolved :heavy_check_mark:

**Root Cause**: Incident was caused by a race condition where the diagram editor would try to access the new user's profile before it had been created.

**Investigation notes**:

* [Github issue tracking this incident](https://github.com/cloudskew/cloudskew/issues/135).
* Would be nice to refactor the user profile resolution code as a [resolve-guard](https://angular.io/api/router/Resolve) for the diagram editor component.

## 2020-01-28

**Symptom**: Users experienced errors while printing/exporting diagrams containing custom images.

**Status**: Resolved :heavy_check_mark:

**Root cause**: Incident was caused by a misconfigured docker image.

**Investigation notes**:

* The base image needs to be `mcr.microsoft.com/dotnet/core/aspnet:2.1.15-bionic`.
* If we use the regular `2.1` tag instead of `2.1.15-bionic` then custom image nodes cannot be printed/exported (some crucial apt-get packages are missing in that tagged image).
* The full list of tags can be seen [here](https://hub.docker.com/_/microsoft-dotnet-core-aspnet/).
