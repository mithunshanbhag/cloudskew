export class DiagramDTO {

    constructor(
        public id: string,
        public name: string,
        public notes?: string,
        public visibility?: string,
        public diagramDetails?: string,
        public documentDetails?: string,
        public thumbnailUrl?: string,
        public lastUpdatedUTC?: Date,
        public emailMD5?: string,
    ) {
    }
}
