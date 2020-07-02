import { Component, Inject } from '@angular/core';
import { IJsStringService, JS_STRING_SVC } from './my-js-string-service';

@Component({
  template: `
    Welcome to dependency injection

    <ol>
      <li>Injection Token
      <button (click)=reverseButtonText()>{{buttonText}}</button>
      </li>
    </ol>

  `
})
export class DiComponent {

  buttonText: string = "Reverse Me";
  constructor(
    @Inject(JS_STRING_SVC)
    private jsStringSvc: IJsStringService){

      console.log(jsStringSvc);
  }

  reverseButtonText(){
    this.buttonText = this.jsStringSvc.reverse(this.buttonText);
  }

}
