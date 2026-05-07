export class UserProfileDTO {

    constructor(
        public subscriptionName: string,
        public email: string,
        public emailMD5: string,
        public preferences: number,
        public emailVerified?: boolean,
        public name?: string,
        public profilePictureUrl?: string,
        public lastUpdatedUTC?: Date,
    ) {
    }
}
