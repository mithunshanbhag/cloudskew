import { DialogPosition, MatDialogConfig, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";

export const DialogProvider = {
    provide: MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: {
        hasBackdrop: true, // enables user to dismiss dialog by clicking outside of it
        position: {
            top: '0px',
            right: '0px'
        } as DialogPosition,
    } as MatDialogConfig,
};
