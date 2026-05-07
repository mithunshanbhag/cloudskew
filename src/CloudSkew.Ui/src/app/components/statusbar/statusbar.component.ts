import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserProfileDTO } from 'src/app/models/dto/userProfileDTO';
import { StatusbarEventArgs, StatusbarService } from './statusbar.service';

@Component({
    selector: 'app-statusbar',
    templateUrl: './statusbar.component.html',
    styleUrls: ['./statusbar.component.css'],
    standalone: false
})
export class StatusbarComponent implements OnInit, OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  //
  zoomPercentage?: number;
  tool?: string;
  userProfile?: UserProfileDTO;

  constructor(
    private statusbarService: StatusbarService,
  ) { }

  ngOnInit() {
    this.statusbarService.requestFeed$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((args: StatusbarEventArgs) => {
        switch (args.kind) {
          case 'IUserProfileChangedEventArgs':
            this.userProfile = args.userProfile;
            break;
          case 'IDiagramZoomChangedEventArgs':
            this.zoomPercentage = args.value;
            break;
          case 'IDiagramToolChangedEventArgs':
            this.tool = args.value;
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
