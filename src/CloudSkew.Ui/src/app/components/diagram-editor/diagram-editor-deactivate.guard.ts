import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DiagramService, IDiagramSaveRequestArgs } from '../diagram/diagram.service';
import { DiagramEditorComponent } from './diagram-editor.component';

@Injectable({
  providedIn: 'root'
})
export class DiagramEditorDeactivateGuard  {

  constructor(
    private diagramService: DiagramService,
  ) {
  }

  canDeactivate(
    component: DiagramEditorComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    this.diagramService.request({
      kind: 'IDiagramSaveRequestArgs',
      force: true,
    } as IDiagramSaveRequestArgs);
    return true;
  }
}
