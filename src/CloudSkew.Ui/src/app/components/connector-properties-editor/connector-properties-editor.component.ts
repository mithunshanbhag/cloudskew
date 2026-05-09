import { Component, Input, ViewEncapsulation } from '@angular/core';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { TextAlign, TextDecoration, TextStyleModel } from '@syncfusion/ej2-angular-diagrams';
import { ConnectorModel } from '@syncfusion/ej2-diagrams';
import { SymbolHelper } from 'src/app/utilities/symbol-helper';

@Component({
    selector: 'app-connector-properties-editor',
    templateUrl: './connector-properties-editor.component.html',
    styleUrls: ['./connector-properties-editor.component.css'],
    // Per docs, encapsulation has to be disabled in order for the
    // component style (specified via [panelClass]) to apply to the select panel.
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class ConnectorPropertiesEditorComponent {

  //
  @Input() activeConnector: ConnectorModel;

  //
  faLockedIcon = faLock;
  faUnlockedIcon = faUnlock;

  //#region width slider
  widthSliderMin = 1;
  widthSliderMax = 3;
  widthSliderStep = 1;
  //#endregion width slider

  //#region opacity slider
  opacitySliderMin = 0;
  opacitySliderMax = 1;
  opacitySliderStep = 0.05;
  //#endregion opacity slider

  //#region source, target shape
  shapeOptions: string[] = [ // note: case sensitive
    'Arrow',
    'Diamond',
    'Square',
    'Circle',
    'None',
  ];
  //#endregion source, target shape

  //#region style
  styleSolid = '';
  styleDashed = '10 5';
  styleDotted = '2 2';
  //#endregion style

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

  get fillColor(): string {
    return this.activeConnector.style.strokeColor;
  }

  set fillColor(val: string) {
    this.activeConnector.style.strokeColor = val;
    this.activeConnector.sourceDecorator.style.fill = val;
    this.activeConnector.sourceDecorator.style.strokeColor = val;
    this.activeConnector.targetDecorator.style.fill = val;
    this.activeConnector.targetDecorator.style.strokeColor = val;
  }

  get annotationBackgroundColor(): string {
    return this.activeConnector.annotations[0].style.fill === 'transparent'
      ? '#ffffff' /* white */
      : this.activeConnector.annotations[0].style.fill;
  }

  set annotationBackgroundColor(val: string) {
    this.activeConnector.annotations[0].style.fill = (val === 'transparent')
      ? '#ffffff' /* white */
      : val;
  }

  get annotationTextColor(): string {
    return (this.activeConnector.annotations[0].style as TextStyleModel).color;
  }

  set annotationTextColor(val: string) {
    (this.activeConnector.annotations[0].style as TextStyleModel).color = val;
  }

  get annotationFontSize(): number {
    return (this.activeConnector.annotations[0].style as TextStyleModel).fontSize;
  }

  get isAnnotationTextBold() {
    return (this.activeConnector.annotations[0].style as TextStyleModel).bold;
  }

  get isAnnotationTextItalic() {
    return (this.activeConnector.annotations[0].style as TextStyleModel).italic;
  }

  get annotationTextDecoration() {
    return (this.activeConnector.annotations[0].style as TextStyleModel).textDecoration;
  }

  set annotationTextDecoration(val: TextDecoration) {
    (this.activeConnector.annotations[0].style as TextStyleModel).textDecoration = val;
  }

  get annotationTextAlignment() {
    return (this.activeConnector.annotations[0].style as TextStyleModel).textAlign;
  }

  set annotationTextAlignment(val: TextAlign) {
    (this.activeConnector.annotations[0].style as TextStyleModel).textAlign = val;
  }

  onAnnotationFontSizeChange(value: number) {
    (this.activeConnector.annotations[0].style as TextStyleModel).fontSize = value;
  }

  onAnnotationBoldButtonClick() {
    (this.activeConnector.annotations[0].style as TextStyleModel).bold = !(this.activeConnector.annotations[0].style as TextStyleModel).bold;
  }

  onAnnotationItalicButtonClick() {
    (this.activeConnector.annotations[0].style as TextStyleModel).italic = !(this.activeConnector.annotations[0].style as TextStyleModel).italic;
  }

  onOpacityChange(value: number) {
    this.activeConnector.style.opacity = value;
    this.activeConnector.sourceDecorator.style.opacity = value;
    this.activeConnector.targetDecorator.style.opacity = value;
  }

  onWidthChange(value: number) {
    this.activeConnector.style.strokeWidth = value;
  }

  isLocked() {
    return SymbolHelper.isSymbolLocked(this.activeConnector);
  }

  lock() {
    SymbolHelper.lockSymbol(this.activeConnector);
  }

  unlock() {
    SymbolHelper.unlockSymbol(this.activeConnector);
  }
}
