import { FileFormats } from "@syncfusion/ej2-angular-diagrams";

export class ImageGenerationRequestDTO {

    constructor(
        public htmlData: string,
        public height: number,
        public width: number,
        public format: FileFormats | 'PDF',
    ) {
    }
}
