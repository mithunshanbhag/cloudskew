import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DiagramDTO } from '../models/dto/diagramDTO';

@Injectable({
  providedIn: 'root'
})
export class ActiveDiagramService {

  private readonly activeDiagramSubject = new BehaviorSubject<DiagramDTO | null>(null);

  readonly activeDiagram$ = this.activeDiagramSubject.asObservable();

  setActiveDiagram(diagram: DiagramDTO) {
    this.activeDiagramSubject.next(diagram);
  }
}
