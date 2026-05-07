import { Injectable } from '@angular/core';
import { DiagramComponent as SyncfusionDiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import { ConnectorModel, NodeModel } from '@syncfusion/ej2-diagrams';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisualPropertiesEditorService {

  // We need to limit the ReplaySubject's buffer size to (say) 3 items.
  // Else it uses Number.POSITIVE_INFINITY by default which can lead to unbounded buffer growth
  // and eventually a memory leak.
  private readonly maxItems = 3;

  requestFeed$ = new ReplaySubject<NodeModel | ConnectorModel | (NodeModel | ConnectorModel)[] | SyncfusionDiagramComponent | null>(this.maxItems);

  constructor() { }

  request(activeSymbol: NodeModel | ConnectorModel | (NodeModel | ConnectorModel)[] | SyncfusionDiagramComponent | null) {
    this.requestFeed$.next(activeSymbol);
  }
}
