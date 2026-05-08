import { MatDialogRef } from '@angular/material/dialog';
import { FileInfo, SelectedEventArgs } from '@syncfusion/ej2-angular-inputs';
import { EMPTY } from 'rxjs';
import { ImageUploadDialogComponent } from './image-upload-dialog.component';

describe('ImageUploadDialogComponent', () => {
  // #region Positive Cases

  it('should use local file selection instead of automatic uploads', () => {
    const dialogRef = {
      afterOpened: () => EMPTY,
      close: jasmine.createSpy('close'),
    } as unknown as MatDialogRef<ImageUploadDialogComponent>;

    const component = new ImageUploadDialogComponent(dialogRef);

    expect(component.uploaderAutoUpload).toBeFalse();
    expect(component.uploaderShowFileList).toBeFalse();
  });

  it('should close with a data url result for a valid selected image', () => {
    const dialogRef = {
      afterOpened: () => EMPTY,
      close: jasmine.createSpy('close'),
    } as unknown as MatDialogRef<ImageUploadDialogComponent>;
    const component = new ImageUploadDialogComponent(dialogRef);
    const fileBlob = new Blob(['test'], { type: 'image/png' });
    const fileInfo = {
      name: 'test.png',
      rawFile: fileBlob,
      size: fileBlob.size,
      status: 'Ready to upload',
      statusCode: '1',
      type: 'image/png',
      validationMessages: { minSize: '', maxSize: '' },
    } as FileInfo;
    const mockFileReader = {
      result: 'data:image/png;base64,dGVzdA==',
      onload: null,
      readAsDataURL: jasmine.createSpy('readAsDataURL').and.callFake(function () {
        mockFileReader.onload();
      }),
    } as any;
    spyOn(window as any, 'FileReader').and.returnValue(mockFileReader);

    component.onUploaderSelected({ filesData: [fileInfo] } as SelectedEventArgs);

    expect(mockFileReader.readAsDataURL).toHaveBeenCalledWith(fileBlob);
    expect(dialogRef.close).toHaveBeenCalledOnceWith({
      source: 'data:image/png;base64,dGVzdA==',
      sizeInBytes: fileBlob.size,
      type: 'image/png',
      name: 'test.png',
    });
  });

  // #endregion
});
