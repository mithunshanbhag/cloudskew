import { Component, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSliderChange } from '@angular/material/slider';
import { faEllipsisH, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { TextAlign, TextDecoration, TextStyleModel } from '@syncfusion/ej2-angular-diagrams';
import { NodeModel } from '@syncfusion/ej2-diagrams';
import { ISymbolMetadata } from 'src/app/interfaces/symbol-metadata';
import { SymbolHelper } from 'src/app/utilities/symbol-helper';
import { IResourceDocumentationRequest } from '../../interfaces/resource-documentation-request';
import { ResourceDocumentationDialogComponent } from '../resource-documentation-dialog/resource-documentation-dialog.component';

@Component({
    selector: 'app-native-properties-editor',
    templateUrl: './native-properties-editor.component.html',
    styles: [],
    standalone: false
})
export class NativePropertiesEditorComponent {

  @Input() activeNativeSymbol: NodeModel;

  //
  faLockedIcon = faLock;
  faUnlockedIcon = faUnlock;
  faInfoIcon = faEllipsisH;

  //#region opacity slider
  opacitySliderMin = 0;
  opacitySliderMax = 1;
  opacitySliderStep = 0.05;
  //#endregion opacity slider

  //#region label/annotation: font size slider
  annotationFontSizeSliderMin = 1;
  annotationFontSizeSliderMax = 50;
  annotationFontSizeSliderStep = 1;
  //#endregion label/annotation: font size slider

  //#region label/annotation: decoration type (note: case sensitive)
  annotationDecorationUnderLine = 'UnderLine';
  annotationDecorationLineThrough = 'LineThrough';
  annotationDecorationOverLine = 'OverLine';
  annotationDecorationNone = 'None';
  //#endregion label/annotation: decoration type

  //#region label/annotation: alignment type (note: case sensitive)
  annotationAlignmentLeft = 'Left';
  annotationAlignmentCenter = 'Center';
  annotationAlignmentRight = 'Right';
  annotationAlignmentJustify = 'Justify';
  //#endregion label/annotation: alignment type

  constructor(
    private resourceDocumentationDialog: MatDialog,
  ) { }

  get symbolMetadata(): ISymbolMetadata {
    return this.activeNativeSymbol.addInfo as ISymbolMetadata;
  }

  get annotationTextColor(): string {
    return (this.activeNativeSymbol.annotations[0].style as TextStyleModel).color;
  }

  set annotationTextColor(val: string) {
    (this.activeNativeSymbol.annotations[0].style as TextStyleModel).color = val;
  }

  get annotationBackgroundColor(): string {
    return this.activeNativeSymbol.annotations[0].style.fill === 'transparent'
      ? '#ffffff' /* white */
      : this.activeNativeSymbol.annotations[0].style.fill;
  }

  set annotationBackgroundColor(val: string) {
    this.activeNativeSymbol.annotations[0].style.fill = (val === 'transparent')
      ? '#ffffff' /* white */
      : val;
  }

  get annotationFontSize(): number {
    return (this.activeNativeSymbol.annotations[0].style as TextStyleModel).fontSize;
  }

  get isAnnotationTextBold() {
    return (this.activeNativeSymbol.annotations[0].style as TextStyleModel).bold;
  }

  get isAnnotationTextItalic() {
    return (this.activeNativeSymbol.annotations[0].style as TextStyleModel).italic;
  }

  get annotationTextDecoration() {
    return (this.activeNativeSymbol.annotations[0].style as TextStyleModel).textDecoration;
  }

  set annotationTextDecoration(val: TextDecoration) {
    (this.activeNativeSymbol.annotations[0].style as TextStyleModel).textDecoration = val;
  }

  get annotationTextAlignment() {
    return (this.activeNativeSymbol.annotations[0].style as TextStyleModel).textAlign;
  }

  set annotationTextAlignment(val: TextAlign) {
    (this.activeNativeSymbol.annotations[0].style as TextStyleModel).textAlign = val;
  }

  get isSymbolAspectRatioLocked() {
    return SymbolHelper.isSymbolAspectRatioLocked(this.activeNativeSymbol);
  }

  onAnnotationFontSizeChange(args: MatSliderChange) {
    (this.activeNativeSymbol.annotations[0].style as TextStyleModel).fontSize = args.value;
  }

  onAnnotationBoldButtonClick() {
    (this.activeNativeSymbol.annotations[0].style as TextStyleModel).bold = !(this.activeNativeSymbol.annotations[0].style as TextStyleModel).bold;
  }

  onOpacityChange(args: MatSliderChange) {
    this.activeNativeSymbol.style.opacity = args.value;
  }

  onSymbolAspectRatioLockChange(args: MatCheckboxChange) {
    args.checked
      ? SymbolHelper.lockSymbolAspectRatio(this.activeNativeSymbol)
      : SymbolHelper.unlockSymbolAspectRatio(this.activeNativeSymbol);
  }

  onAnnotationItalicButtonClick() {
    (this.activeNativeSymbol.annotations[0].style as TextStyleModel).italic = !(this.activeNativeSymbol.annotations[0].style as TextStyleModel).italic;
  }

  onResourceDocumentationInfoGlyphClick() {
    const symbolMetadata = this.symbolMetadata;
    this.resourceDocumentationDialog.open(ResourceDocumentationDialogComponent, {
      data: {
        symbolId: symbolMetadata.symbolId,
        symbolGroupId: symbolMetadata.symbolGroupId,
        symbolFamilyId: symbolMetadata.symbolFamilyId,
      } as IResourceDocumentationRequest,
    } as MatDialogConfig<IResourceDocumentationRequest>);
  }

  isLocked() {
    return SymbolHelper.isSymbolLocked(this.activeNativeSymbol);
  }

  lock() {
    SymbolHelper.lockSymbol(this.activeNativeSymbol);
  }

  unlock() {
    SymbolHelper.unlockSymbol(this.activeNativeSymbol);
  }
}
