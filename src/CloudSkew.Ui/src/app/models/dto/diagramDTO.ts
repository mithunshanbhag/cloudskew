export class DiagramDTO {

    constructor(
        public name: string,
        public notes?: string,
        public visibility?: string,
        public diagramDetails?: string,
        public thumbnailUrl?: string,
        public lastUpdatedUTC?: Date,
    ) {
    }
}
