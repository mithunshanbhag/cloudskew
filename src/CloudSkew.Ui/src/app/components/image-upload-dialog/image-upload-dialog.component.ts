import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AsyncSettingsModel, ButtonsPropsModel, UploaderComponent, UploadingEventArgs } from '@syncfusion/ej2-angular-inputs';
import { createElement } from '@syncfusion/ej2-base';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HeaderConstants } from 'src/app/constants/header-constants';
import { UrlConstants } from 'src/app/constants/url-constants';
import { SessionService } from 'src/app/services/session.service';
import { Md5 } from 'ts-md5';

@Component({
    selector: 'app-image-upload-dialog',
    templateUrl: './image-upload-dialog.component.html',
    styleUrls: ['./image-upload-dialog.component.css'],
    standalone: false
})
export class ImageUploadDialogComponent implements OnInit, OnDestroy {

  //
  private onDestroy$: Subject<void> = new Subject<void>();

  //#region syncfusion uploader component
  @ViewChild('imageUploader') uploader: UploaderComponent;
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
    saveUrl: `${UrlConstants.webAPIPublicUrl}/users/${this.sessionService.user}/customimages`,
  };
  uploaderAllowedExtensions = '.jpg, .jpeg, .png';
  uploaderMinFileSizeBytes = 1;
  uploaderMaxFileSizeBytes = 524288; // 512 KB
  //#endregion syncfusion uploader component


  constructor(
    private dialogRef: MatDialogRef<ImageUploadDialogComponent>,
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
    // ensure that filename is prefixed with the size hash to avoid hitting
    // https://github.com/cloudskew/cloudskew/issues/113
    const sizeHash = Md5.hashStr(args.fileData.size.toString()) as string;
    args.fileData.name = `${sizeHash}_${args.fileData.name}`;
    args.currentRequest.setRequestHeader(HeaderConstants.customImageBlobName, args.fileData.name);
  }

  onUploaderSuccess(args: any) {
    this.dialogRef.close(args);
  }
}
