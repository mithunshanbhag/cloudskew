import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faCopy, faLink, faSync, faUnlink } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { UrlConstants } from 'src/app/constants/url-constants';
import { DiagramDTO } from 'src/app/models/dto/diagramDTO';
import { APIService } from 'src/app/services/api.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-diagram-share-dialog',
  templateUrl: './diagram-share-dialog.component.html',
  styleUrls: ['./diagram-share-dialog.component.css']
})
export class DiagramShareDialogComponent implements OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  // icons
  faCreateLinkIcon = faLink;
  faDeleteLinkIcon = faUnlink;
  faRefreshLinkIcon = faSync;
  faCopyIcon = faCopy;

  //
  apiCallInProgress = false;

  constructor(
    private apiService: APIService,
    private sessionService: SessionService,
    @Inject(MAT_DIALOG_DATA) public diagram: DiagramDTO,
  ) {
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  getDiagramShareLink() {
    return `${UrlConstants.diagramShareUrl}/${this.diagram.shareId}`;
  }

  onSharingStartButtonClick() {
    this.apiCallInProgress = true;
    this.apiService.diagramSharingStartAsync(this.sessionService.user, this.diagram.id)
      .pipe(
        tap(() => this.apiCallInProgress = false),
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$)
      )
      .subscribe(dto => {
        this.diagram.shareId = dto.shareId;
        this.diagram.visibility = dto.visibility;
      });
  }

  onSharingRefreshButtonClick() {
    this.apiCallInProgress = true;
    this.apiService.diagramSharingRefreshAsync(this.sessionService.user, this.diagram.id)
      .pipe(
        tap(() => this.apiCallInProgress = false),
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$)
      )
      .subscribe(dto => {
        this.diagram.shareId = dto.shareId;
        this.diagram.visibility = dto.visibility;
      });
  }

  onSharingStopButtonClick() {
    this.apiCallInProgress = true;
    this.apiService.diagramSharingStopAsync(this.sessionService.user, this.diagram.id)
      .pipe(
        tap(() => this.apiCallInProgress = false),
        filter(apiResponse => !apiResponse.error),
        map(apiResponse => apiResponse.dto),
        takeUntil(this.onDestroy$)
      )
      .subscribe(dto => {
        this.diagram.shareId = dto.shareId;
        this.diagram.visibility = dto.visibility;
      });
  }
}
