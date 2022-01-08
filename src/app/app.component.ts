import { Component } from '@angular/core';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'simple           call';

  constructor(public nav: NavigationService) {
    
  }
}
