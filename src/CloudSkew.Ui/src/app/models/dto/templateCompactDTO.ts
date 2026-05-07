export class TemplateCompactDTO {

    constructor(
        public id: string,
        public name: string,
        public notes?: string,
        public visibility?: string,
        public thumbnailUrl?: string,
        public lastUpdatedUTC?: Date,
        public emailMD5?: string,
    ) {
    }
}
