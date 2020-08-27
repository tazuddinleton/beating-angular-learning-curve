import { Component, Inject } from '@angular/core';
import { IJsStringService, JS_STRING_SVC } from './my-js-string-service';
import { LoggerService } from './logger.service';

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
    private jsStringSvc: IJsStringService,
    private loggerService: LoggerService

    ){

      loggerService.log('Log this message.');
  }

  reverseButtonText(){
    this.buttonText = this.jsStringSvc.reverse(this.buttonText);
  }

}
