import { Component, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { TextAlign, TextDecoration, TextStyleModel } from '@syncfusion/ej2-angular-diagrams';
import { NodeModel } from '@syncfusion/ej2-diagrams';
import { SymbolHelper } from 'src/app/utilities/symbol-helper';

@Component({
    selector: 'app-basic-shape-properties-editor',
    templateUrl: './basic-shape-properties-editor.component.html',
    styles: [],
    standalone: false
})
export class BasicShapePropertiesEditorComponent {

  //
  @Input() activeBasicShape: NodeModel;

  //
  faLockedIcon = faLock;
  faUnlockedIcon = faUnlock;

  //#region border style
  borderStyleSolid = '';
  borderStyleDashed = '10 5';
  borderStyleDotted = '2 2';
  //#endregion border style

  //#region border width slider
  borderWidthSliderMin = 0;
  borderWidthSliderMax = 9;
  borderWidthSliderStep = 1;
  //#endregion border width slider

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
    return this.activeBasicShape.annotations[0].style.fill === 'transparent'
      ? '#ffffff' /* white */
      : this.activeBasicShape.annotations[0].style.fill;
  }

  set annotationBackgroundColor(val: string) {
    this.activeBasicShape.annotations[0].style.fill = (val === 'transparent')
      ? '#ffffff' /* white */
      : val;
  }

  get annotationTextColor(): string {
    return (this.activeBasicShape.annotations[0].style as TextStyleModel).color;
  }

  set annotationTextColor(val: string) {
    (this.activeBasicShape.annotations[0].style as TextStyleModel).color = val;
  }

  get annotationFontSize(): number {
    return (this.activeBasicShape.annotations[0].style as TextStyleModel).fontSize;
  }

  get borderColor(): string {
    return this.activeBasicShape.style.strokeColor === 'transparent'
      ? '#ffffff' /* white */
      : this.activeBasicShape.style.strokeColor;
  }

  set borderColor(val: string) {
    this.activeBasicShape.style.strokeColor = (val === 'transparent')
      ? '#ffffff' /* white */
      : val;
  }

  get fillColor(): string {
    return this.activeBasicShape.style.fill === 'transparent'
      ? '#ffffff' /* white */
      : this.activeBasicShape.style.fill;
  }

  set fillColor(val: string) {
    this.activeBasicShape.style.fill = (val === 'transparent')
      ? '#ffffff' /* white */
      : val;
  }

  get isAnnotationTextBold() {
    return (this.activeBasicShape.annotations[0].style as TextStyleModel).bold;
  }

  get isAnnotationTextItalic() {
    return (this.activeBasicShape.annotations[0].style as TextStyleModel).italic;
  }

  get annotationTextDecoration() {
    return (this.activeBasicShape.annotations[0].style as TextStyleModel).textDecoration;
  }

  set annotationTextDecoration(val: TextDecoration) {
    (this.activeBasicShape.annotations[0].style as TextStyleModel).textDecoration = val;
  }

  get annotationTextAlignment() {
    return (this.activeBasicShape.annotations[0].style as TextStyleModel).textAlign;
  }

  set annotationTextAlignment(val: TextAlign) {
    (this.activeBasicShape.annotations[0].style as TextStyleModel).textAlign = val;
  }

  get isSymbolAspectRatioLocked() {
    return SymbolHelper.isSymbolAspectRatioLocked(this.activeBasicShape);
  }

  onAnnotationBoldButtonClick() {
    (this.activeBasicShape.annotations[0].style as TextStyleModel).bold = !(this.activeBasicShape.annotations[0].style as TextStyleModel).bold;
  }

  onAnnotationFontSizeChange(value: number) {
    (this.activeBasicShape.annotations[0].style as TextStyleModel).fontSize = value;
  }

  onAnnotationItalicButtonClick() {
    (this.activeBasicShape.annotations[0].style as TextStyleModel).italic = !(this.activeBasicShape.annotations[0].style as TextStyleModel).italic;
  }

  onOpacityChange(value: number) {
    this.activeBasicShape.style.opacity = value;
  }

  onStrokeWidthChange(value: number) {
    this.activeBasicShape.style.strokeWidth = value;
  }

  onSymbolAspectRatioLockChange(args: MatCheckboxChange) {
    args.checked
      ? SymbolHelper.lockSymbolAspectRatio(this.activeBasicShape)
      : SymbolHelper.unlockSymbolAspectRatio(this.activeBasicShape);
  }

  isLocked() {
    return SymbolHelper.isSymbolLocked(this.activeBasicShape);
  }

  lock() {
    SymbolHelper.lockSymbol(this.activeBasicShape);
  }

  unlock() {
    SymbolHelper.unlockSymbol(this.activeBasicShape);
  }
}
