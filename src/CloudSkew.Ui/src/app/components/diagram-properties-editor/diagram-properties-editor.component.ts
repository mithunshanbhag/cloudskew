import { Component, Input } from '@angular/core';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { DiagramComponent as SyncfusionDiagramComponent } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: 'app-diagram-properties-editor',
    templateUrl: './diagram-properties-editor.component.html',
    styles: [],
    standalone: false
})
export class DiagramPropertiesEditorComponent {

  //
  @Input() activeDiagramComponent: SyncfusionDiagramComponent;

  //
  faCanvasIcon = faBorderAll;

  constructor() { }

  get pageColor(): string {
    return this.activeDiagramComponent.pageSettings.background.color === 'transparent'
      ? '#ffffff' /* white */
      : this.activeDiagramComponent.pageSettings.background.color;
  }

  set pageColor(val: string) {
    this.activeDiagramComponent.pageSettings.background.color = (val === 'transparent')
      ? '#ffffff' /* white */
      : val;
  }
}
