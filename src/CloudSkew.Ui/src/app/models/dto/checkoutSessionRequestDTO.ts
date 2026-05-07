export class CheckoutSessionRequestDTO {

    constructor(
        public priceId: string,
        public cancelUrl: string,
        public successUrl: string,
    ) {
    }
}
