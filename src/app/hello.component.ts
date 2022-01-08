import { Component, Input } from '@angular/core';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'hello',
  template: `<h1 *ngIf="nav.visible">Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  constructor(public nav: NavigationService) {

  }
}
