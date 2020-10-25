import { Component } from '@angular/core';
import { PopupService } from './popup.service';

@Component({
  template: `

  <button (click)="showAsComponent()">Show as component</button>
  <button (click)="showAsElement()">Show as element</button>


  `
})

export class CustomElementLandingComponent {


  constructor(private popupService: PopupService){}

  showAsComponent(){
    this.popupService.showAsComponent("As Component");
  }

  showAsElement(){
    this.popupService.showAsElement("As Element");
  }
}
