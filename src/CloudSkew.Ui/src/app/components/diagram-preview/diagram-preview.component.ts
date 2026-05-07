import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UIConstants } from 'src/app/constants/ui-constants';
import { UrlConstants } from 'src/app/constants/url-constants';
import { DiagramCompactDTO } from 'src/app/models/dto/diagramCompactDTO';

@Component({
  selector: 'app-diagram-preview',
  templateUrl: './diagram-preview.component.html',
  styleUrls: ['./diagram-preview.component.css']
})
export class DiagramPreviewComponent {

  //
  @Input() diagram: DiagramCompactDTO;

  //
  @Output() diagramSelected = new EventEmitter<DiagramCompactDTO>();
  @Output() diagramDeleted = new EventEmitter<DiagramCompactDTO>();

  //
  previewUnavailableImageUrl = UrlConstants.previewUnavailableImageUrl;
  thumbnailPreviewImageWidth = UIConstants.thumbnailPreviewImageWidth;
  thumbnailPreviewImageHeight = UIConstants.thumbnailPreviewImageHeight;

  constructor() { }
}
