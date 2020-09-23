import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appModalContent]'
})
export class ModalContentDirective {
  constructor(public viewContainerRef: ViewContainerRef){

  }
}
