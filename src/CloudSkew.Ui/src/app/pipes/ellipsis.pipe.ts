import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(text: string, maxLength: number): string {

    //#region pre-condition checks

    if (!text) {
      return text;
    }
    if (Number.isNaN(maxLength)) {
      return text;
    }
    if (text.length <= maxLength - 3) {
      return text;
    }

    //#endregion pre-condition checks

    return text.slice(0, maxLength - 3).concat('...');
  }
}
