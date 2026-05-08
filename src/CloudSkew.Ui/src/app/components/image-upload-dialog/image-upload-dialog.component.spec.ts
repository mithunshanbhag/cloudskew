import { MatDialogRef } from '@angular/material/dialog';
import { EMPTY } from 'rxjs';
import { UrlConstants } from 'src/app/constants/url-constants';
import { LocalPersistenceService } from 'src/app/services/local-persistence.service';
import { ImageUploadDialogComponent } from './image-upload-dialog.component';

describe('ImageUploadDialogComponent', () => {
  // #region Positive Cases

  it('should build the upload url from the diagram helper user id', () => {
    const dialogRef = {
      afterOpened: () => EMPTY,
      close: jasmine.createSpy('close'),
    } as unknown as MatDialogRef<ImageUploadDialogComponent>;
    const localPersistenceService = {
      diagramHelperUserId: 'test-user',
    } as LocalPersistenceService;

    const component = new ImageUploadDialogComponent(dialogRef, localPersistenceService);

    expect(component.uploaderAsyncSettings.saveUrl).toBe(`${UrlConstants.webAPIPublicUrl}/users/test-user/customimages`);
  });

  // #endregion
});
