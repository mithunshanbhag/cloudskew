import { environment } from 'src/environments/environment';

export class PaymentConstants {
    // Please keep this list alphabetically sorted.
    public static readonly stripeAPIPublishableKey = environment.stripeAPIPublishableKey;
    public static readonly stripeCheckoutSessionCancelUrl = environment.stripeCheckoutSessionCancelUrl;
    public static readonly stripeCheckoutSessionSuccessUrl = environment.stripeCheckoutSessionSuccessUrl;
    public static readonly stripeCustomerPortalReturnUrl = environment.stripeCustomerPortalReturnUrl;
}
