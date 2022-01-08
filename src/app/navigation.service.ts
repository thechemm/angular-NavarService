import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  visible: boolean;

  constructor() { 
    this.visible = true; //It's working either set true or fasle 
  }

  hide() { 
    this.visible = false; //Function working fine but Not reflecting in UI
  }

  show() { 
    this.visible = true; 
  }

  toggle() { 
    this.visible = !this.visible; 
  }

}