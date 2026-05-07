import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UIConstants } from 'src/app/constants/ui-constants';
import { UrlConstants } from 'src/app/constants/url-constants';
import { TemplateCompactDTO } from 'src/app/models/dto/templateCompactDTO';

@Component({
  selector: 'app-template-preview',
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.css']
})
export class TemplatePreviewComponent {

  //
  @Input() template: TemplateCompactDTO;

  //
  @Output() templateSelected = new EventEmitter<TemplateCompactDTO>();
  @Output() templateRenamed = new EventEmitter<TemplateCompactDTO>();
  @Output() templateDeleted = new EventEmitter<TemplateCompactDTO>();

  //
  previewUnavailableImageUrl = UrlConstants.previewUnavailableImageUrl;
  thumbnailPreviewImageWidth = UIConstants.thumbnailPreviewImageWidth;
  thumbnailPreviewImageHeight = UIConstants.thumbnailPreviewImageHeight;

  constructor() { }
}
