import { Component, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSliderChange } from '@angular/material/slider';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { NodeModel, TextAlign, TextDecoration, TextStyleModel } from '@syncfusion/ej2-diagrams';
import { SymbolHelper } from 'src/app/utilities/symbol-helper';

@Component({
    selector: 'app-text-properties-editor',
    templateUrl: './text-properties-editor.component.html',
    styles: [],
    standalone: false
})
export class TextPropertiesEditorComponent {

  //
  @Input() activeTextShape: NodeModel;

  //
  faLockedIcon = faLock;
  faUnlockedIcon = faUnlock;

  //#region font size slider
  fontSizeSliderMin = 1;
  fontSizeSliderMax = 50;
  fontSizeSliderStep = 1;
  //#endregion font size slider

  //#region opacity slider
  opacitySliderMin = 0;
  opacitySliderMax = 1;
  opacitySliderStep = 0.05;
  //#endregion opacity slider

  //#region label/annotation: decoration type (note: case sensitive)
  textDecorationUnderLine = 'UnderLine';
  textDecorationLineThrough = 'LineThrough';
  textDecorationOverLine = 'OverLine';
  textDecorationNone = 'None';
  //#endregion label/annotation: decoration type

  //#region label/annotation: alignment type (note: case sensitive)
  textAlignmentLeft = 'Left';
  textAlignmentCenter = 'Center';
  textAlignmentRight = 'Right';
  textAlignmentJustify = 'Justify';
  //#endregion label/annotation: alignment type

  constructor() { }

  get textBackgroundColor(): string {
    return this.activeTextShape.style.fill === 'transparent' ? '#ffffff' /* white */ : this.activeTextShape.style.fill;
  }

  set textBackgroundColor(val: string) {
    this.activeTextShape.style.fill = (val === 'transparent') ? '#ffffff' /* white */ : val;
  }

  get textColor(): string {
    return (this.activeTextShape.style as TextStyleModel).color;
  }

  set textColor(val: string) {
    (this.activeTextShape.style as TextStyleModel).color = val;
  }

  get fontSize(): number {
    return (this.activeTextShape.style as TextStyleModel).fontSize;
  }

  get isTextBold() {
    return (this.activeTextShape.style as TextStyleModel).bold;
  }

  get isTextItalic() {
    return (this.activeTextShape.style as TextStyleModel).italic;
  }

  get textDecoration() {
    return (this.activeTextShape.style as TextStyleModel).textDecoration;
  }

  set textDecoration(val: TextDecoration) {
    (this.activeTextShape.style as TextStyleModel).textDecoration = val;
  }

  get textAlignment() {
    return (this.activeTextShape.style as TextStyleModel).textAlign;
  }

  set textAlignment(val: TextAlign) {
    (this.activeTextShape.style as TextStyleModel).textAlign = val;
  }

  get isSymbolAspectRatioLocked() {
    return SymbolHelper.isSymbolAspectRatioLocked(this.activeTextShape);
  }

  onBoldButtonClick() {
    (this.activeTextShape.style as TextStyleModel).bold = !(this.activeTextShape.style as TextStyleModel).bold;
  }

  onFontSizeChange(args: MatSliderChange) {
    (this.activeTextShape.style as TextStyleModel).fontSize = args.value;
  }

  onItalicButtonClick() {
    (this.activeTextShape.style as TextStyleModel).italic = !(this.activeTextShape.style as TextStyleModel).italic;
  }

  onOpacityChange(args: MatSliderChange) {
    this.activeTextShape.style.opacity = args.value;
  }

  onSymbolAspectRatioLockChange(args: MatCheckboxChange) {
    args.checked
      ? SymbolHelper.lockSymbolAspectRatio(this.activeTextShape)
      : SymbolHelper.unlockSymbolAspectRatio(this.activeTextShape);
  }

  isLocked() {
    return SymbolHelper.isSymbolLocked(this.activeTextShape);
  }

  lock() {
    SymbolHelper.lockSymbol(this.activeTextShape);
  }

  unlock() {
    SymbolHelper.unlockSymbol(this.activeTextShape);
  }
}
