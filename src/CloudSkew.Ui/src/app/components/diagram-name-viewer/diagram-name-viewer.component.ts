import { Component, Input } from '@angular/core';
import { UIConstants } from 'src/app/constants/ui-constants';
import { DiagramDTO } from 'src/app/models/dto/diagramDTO';

@Component({
    selector: 'app-diagram-name-viewer',
    templateUrl: './diagram-name-viewer.component.html',
    styleUrls: ['./diagram-name-viewer.component.css'],
    standalone: false
})
export class DiagramNameViewerComponent {

  //
  @Input() diagram: DiagramDTO;

  isDiagramNameEditable = false;

  // layout
  visibleWidthInChars = UIConstants.visibleWidthInChars;

  constructor() {
  }
}
