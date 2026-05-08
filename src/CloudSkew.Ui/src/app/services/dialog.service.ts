import { MatDialogConfig, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";

export const DialogProvider = {
    provide: MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: {
        hasBackdrop: true, // enables user to dismiss dialog by clicking outside of it
        backdropClass: 'cloudskew-dialog-backdrop',
        panelClass: 'cloudskew-dialog-panel',
        maxWidth: 'calc(100vw - 48px)',
    } as MatDialogConfig,
};
