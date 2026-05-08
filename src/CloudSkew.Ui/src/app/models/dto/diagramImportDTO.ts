export class DiagramImportDTO {

    constructor(
        public name: string,
        public diagramDetails: string,
        public notes?: string,
        public thumbnailUrl?: string,
    ) {
    }
}
