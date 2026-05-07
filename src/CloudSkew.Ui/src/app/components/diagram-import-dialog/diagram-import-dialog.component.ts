import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AsyncSettingsModel, ButtonsPropsModel, UploaderComponent, UploadingEventArgs } from '@syncfusion/ej2-angular-inputs';
import { createElement } from '@syncfusion/ej2-base';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HeaderConstants } from 'src/app/constants/header-constants';
import { UrlConstants } from 'src/app/constants/url-constants';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-diagram-import-dialog',
  templateUrl: './diagram-import-dialog.component.html',
  styleUrls: ['./diagram-import-dialog.component.css']
})
export class DiagramImportDialogComponent implements OnInit, OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  //#region syncfusion uploader component
  @ViewChild('diagramImporter') uploader: UploaderComponent;
  uploaderAutoUpload = true;
  uploaderAllowMultipleFileUpload = false;
  uploaderEnablePersistence = false;
  uploaderButtons: ButtonsPropsModel = {
    // per syncfusion documentation
    // https://ej2.syncfusion.com/angular/documentation/uploader/how-to/customize-button-with-html-element/
    browse: createElement(
      'span',
      {
        innerHTML: 'BROWSE',
        className: 'btn btn-sm btn-outline-dark',
      }),
  };
  uploaderAsyncSettings: AsyncSettingsModel = {
    saveUrl: `${UrlConstants.webAPIPublicUrl}/users/${this.sessionService.user}/importedfile`,
  };
  uploaderAllowedExtensions = '.json';
  uploaderMinFileSizeBytes = 1;
  uploaderMaxFileSizeBytes = 2097152; // 2048 KB (i.e. 2 MB)
  //#endregion syncfusion uploader component


  constructor(
    private dialogRef: MatDialogRef<DiagramImportDialogComponent>,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.dialogRef.afterOpened()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        if (this.uploader) {
          this.uploader.clearAll();
        }
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onUploaderUploading(args: UploadingEventArgs) {
    args.currentRequest.setRequestHeader(HeaderConstants.importedJsonFileName, args.fileData.name);
  }

  onUploaderSuccess(args: any) {
    this.dialogRef.close(args);
  }
}
