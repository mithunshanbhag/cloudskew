import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ButtonsPropsModel, FileInfo, SelectedEventArgs, UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { createElement } from '@syncfusion/ej2-base';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface ImageUploadDialogResult {
  source: string;
  sizeInBytes: number;
  type: string;
  name: string;
}

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
  uploaderAutoUpload = false;
  uploaderAllowMultipleFileUpload = false;
  uploaderEnablePersistence = false;
  uploaderShowFileList = false;
  uploaderButtons: ButtonsPropsModel = {
    // per syncfusion documentation
    // https://ej2.syncfusion.com/angular/documentation/uploader/how-to/customize-button-with-html-element/
    browse: createElement(
      'span',
      {
        innerHTML: 'BROWSE',
        className: 'dialog-file-select-button',
      }),
  };
  uploaderAllowedExtensions = '.jpg, .jpeg, .png';
  uploaderMinFileSizeBytes = 1;
  uploaderMaxFileSizeBytes = 524288; // 512 KB
  //#endregion syncfusion uploader component


  constructor(
    private dialogRef: MatDialogRef<ImageUploadDialogComponent, ImageUploadDialogResult>,
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

  onUploaderSelected(args: SelectedEventArgs) {
    const fileInfo = args.filesData?.[0];
    if (!fileInfo || fileInfo.statusCode !== '1' || !(fileInfo.rawFile instanceof Blob)) {
      return;
    }

    this.readFileAsDataUrl(fileInfo);
  }

  private readFileAsDataUrl(fileInfo: FileInfo) {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== 'string') {
        return;
      }

      this.dialogRef.close({
        source: reader.result,
        sizeInBytes: fileInfo.size,
        type: fileInfo.type,
        name: fileInfo.name,
      } as ImageUploadDialogResult);
    };
    reader.readAsDataURL(fileInfo.rawFile as Blob);
  }
}
