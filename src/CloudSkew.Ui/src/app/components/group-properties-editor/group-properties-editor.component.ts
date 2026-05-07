import { Component, Input } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { AlignmentOptions, DistributeOptions, NodeModel } from '@syncfusion/ej2-angular-diagrams';
import { DiagramService, IDiagramAlignRequestArgs, IDiagramDistributeRequestArgs } from '../diagram/diagram.service';

@Component({
  selector: 'app-group-properties-editor',
  templateUrl: './group-properties-editor.component.html',
  styles: []
})
export class GroupPropertiesEditorComponent {

  //
  @Input() activeGroupShape: NodeModel;

  //
  faGroupIcon = faObjectGroup;

  //#region alignment options (note: case sensitive)
  alignVerticalTop: AlignmentOptions = 'Top';
  alignVerticalBottom: AlignmentOptions = 'Bottom';
  alignVerticalCenter: AlignmentOptions = 'Middle';
  alignHorizontalLeft: AlignmentOptions = 'Left';
  alignHorizontalCenter: AlignmentOptions = 'Center';
  alignHorizontalRight: AlignmentOptions = 'Right';
  //#endregion

  //#region distribution options (note: case sensitive)
  distributeHorizontally: DistributeOptions = 'Center';
  distributeVertically: DistributeOptions = 'Middle';
  //#endregion

  constructor(
    private diagramService: DiagramService,
  ) { }

  //#region callbacks

  onAlignmentChange(args: MatButtonToggleChange) {
    this.diagramService.request({
      kind: 'IDiagramAlignRequestArgs',
      type: args.value as AlignmentOptions,
      symbolIds: this.activeGroupShape.children,
    } as IDiagramAlignRequestArgs);
  }

  onDistributionChange(args: MatButtonToggleChange) {
    this.diagramService.request({
      kind: 'IDiagramDistributeRequestArgs',
      type: args.value as DistributeOptions,
      symbolIds: this.activeGroupShape.children,
    } as IDiagramDistributeRequestArgs);
  }

  //#endregion
}
