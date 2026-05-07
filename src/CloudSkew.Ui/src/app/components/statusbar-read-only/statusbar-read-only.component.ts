import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StatusbarReadOnlyEventArgs, StatusbarReadOnlyService } from './statusbar-read-only.service';

@Component({
  selector: 'app-statusbar-read-only',
  templateUrl: './statusbar-read-only.component.html',
  styleUrls: ['./statusbar-read-only.component.css']
})
export class StatusbarReadOnlyComponent implements OnInit, OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  //
  zoomPercentage?: number;

  constructor(
    private statusbarReadOnlyService: StatusbarReadOnlyService,
  ) { }

  ngOnInit() {
    this.statusbarReadOnlyService.requestFeed$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((args: StatusbarReadOnlyEventArgs) => {
        switch (args.kind) {
          case 'IDiagramZoomChangedEventArgs':
            this.zoomPercentage = args.value;
            break;
          default:
            break;
        }
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
