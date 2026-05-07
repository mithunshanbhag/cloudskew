// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  aiInstrumentationKey: 'db116377-6a23-4d6a-945b-38af84a8db0e',
  cdnUrlPrefix: 'http://localhost:7001',
  customImagesUrlPrefix: 'https://cloudskewcustomimagestest.azureedge.net',
  diagramHelperWebAPIUrl: 'https://localhost:6001/api',
  docsUrl: 'http://localhost:4203',
  professionalPriceId: 'price_1HtWGaKGaI8j1MzviNzbVlQR',
  stripeAPIPublishableKey: 'pk_test_51HsQNnKGaI8j1Mzv7S771QodfMDqx7GWcMekH0U4Hz3prTaIIwCVbKuPVCA3ufyKfJjDLh9xhd7GopGzpqqr60X000RM9w8hH0',
  stripeCheckoutSessionCancelUrl: 'http://localhost:4200',
  stripeCheckoutSessionSuccessUrl: 'http://localhost:4200/checkoutsessioncallback/{CHECKOUT_SESSION_ID}',
  stripeCustomerPortalReturnUrl: 'http://localhost:4200',
  webAPIPublicUrl: 'https://localhost:5001/api',
  webAPIUrl: 'https://localhost:5001/api',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
