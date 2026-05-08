import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ErrorMessageConstants } from 'src/app/constants/error-message-constants';
import { DiagramImportDTO } from 'src/app/models/dto/diagramImportDTO';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
    selector: 'app-diagram-import-dialog',
    templateUrl: './diagram-import-dialog.component.html',
    styleUrls: ['./diagram-import-dialog.component.css'],
    standalone: false
})
export class DiagramImportDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<DiagramImportDialogComponent>,
    private notificationService: NotificationService,
  ) { }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const selectedFile = input.files?.[0];
    if (!selectedFile) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const fileContents = reader.result as string;
      if (!this.isJson(fileContents)) {
        this.notificationService.request({
          kind: 'IDiagramNotificationRequestArgs',
          type: 'error',
          title: 'Error',
          content: ErrorMessageConstants.invalidJsonFile,
        });
        input.value = '';
        return;
      }

      this.dialogRef.close(new DiagramImportDTO(fileContents));
    };
    reader.readAsText(selectedFile);
  }

  private isJson(value: string) {
    try {
      JSON.parse(value);
    } catch {
      return false;
    }

    return true;
  }
}
