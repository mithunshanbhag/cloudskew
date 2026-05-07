import { Component, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSliderChange } from '@angular/material/slider';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { NodeModel, TextAlign, TextDecoration, TextStyleModel } from '@syncfusion/ej2-angular-diagrams';
import { SymbolHelper } from 'src/app/utilities/symbol-helper';

@Component({
  selector: 'app-image-properties-editor',
  templateUrl: './image-properties-editor.component.html',
  styles: []
})
export class ImagePropertiesEditorComponent {

  //
  @Input() activeImageShape: NodeModel;

  //
  faLockedIcon = faLock;
  faUnlockedIcon = faUnlock;

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

  constructor() { }

  get annotationBackgroundColor(): string {
    return this.activeImageShape.annotations[0].style.fill === 'transparent'
      ? '#ffffff' /* white */
      : this.activeImageShape.annotations[0].style.fill;
  }

  set annotationBackgroundColor(val: string) { 
    this.activeImageShape.annotations[0].style.fill = (val === 'transparent') 
      ? '#ffffff' /* white */
      : val;
  }

  get annotationTextColor(): string {
    return (this.activeImageShape.annotations[0].style as TextStyleModel).color;
  }

  set annotationTextColor(val: string) {
    (this.activeImageShape.annotations[0].style as TextStyleModel).color = val;
  }

  get annotationFontSize(): number {
    return (this.activeImageShape.annotations[0].style as TextStyleModel).fontSize;
  }

  get isAnnotationTextBold() {
    return (this.activeImageShape.annotations[0].style as TextStyleModel).bold;
  }

  get isAnnotationTextItalic() {
    return (this.activeImageShape.annotations[0].style as TextStyleModel).italic;
  }

  get annotationTextDecoration() {
    return (this.activeImageShape.annotations[0].style as TextStyleModel).textDecoration;
  }

  set annotationTextDecoration(val: TextDecoration) {
    (this.activeImageShape.annotations[0].style as TextStyleModel).textDecoration = val;
  }

  get annotationTextAlignment() {
    return (this.activeImageShape.annotations[0].style as TextStyleModel).textAlign;
  }

  set annotationTextAlignment(val: TextAlign) {
    (this.activeImageShape.annotations[0].style as TextStyleModel).textAlign = val;
  }

  get isSymbolAspectRatioLocked() {
    return SymbolHelper.isSymbolAspectRatioLocked(this.activeImageShape);
  }

  onAnnotationBoldButtonClick() {
    (this.activeImageShape.annotations[0].style as TextStyleModel).bold = !(this.activeImageShape.annotations[0].style as TextStyleModel).bold;
  }

  onAnnotationItalicButtonClick() {
    (this.activeImageShape.annotations[0].style as TextStyleModel).italic = !(this.activeImageShape.annotations[0].style as TextStyleModel).italic;
  }

  onAnnotationFontSizeChange(args: MatSliderChange) {
    (this.activeImageShape.annotations[0].style as TextStyleModel).fontSize = args.value;
  }

  onOpacityChange(args: MatSliderChange) {
    this.activeImageShape.style.opacity = args.value;
  }

  onSymbolAspectRatioLockChange(args: MatCheckboxChange) {
    args.checked
      ? SymbolHelper.lockSymbolAspectRatio(this.activeImageShape)
      : SymbolHelper.unlockSymbolAspectRatio(this.activeImageShape);
  }

  isLocked() {
    return SymbolHelper.isSymbolLocked(this.activeImageShape);
  }

  lock() {
    SymbolHelper.lockSymbol(this.activeImageShape);
  }

  unlock() {
    SymbolHelper.unlockSymbol(this.activeImageShape);
  }
}
