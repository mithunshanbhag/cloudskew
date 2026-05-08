import { Component } from '@angular/core';

@Component({
    selector: 'app-propertiesbar',
    templateUrl: './propertiesbar.component.html',
    styles: [':host { display: block; height: 100%; }'],
    standalone: false
})
export class PropertiesbarComponent {

  constructor() {
  }
}
