import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { PopupComponent } from './popup.component';
import { NgElement, WithProperties } from '@angular/elements';
@Injectable({providedIn: 'root'})
export class PopupService {

  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ){}

  showAsComponent(message:string){
    const popup = document.createElement('popup-component');
    const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);

    const popupComponentRef = factory.create(this.injector, [], popup);
    popupComponentRef.instance.message = message;

    this.applicationRef.attachView(popupComponentRef.hostView);
    document.body.appendChild(popup);

    popupComponentRef.instance.closed.subscribe(() =>{
      document.body.removeChild(popup);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });
  }

  showAsElement(message: string){
    debugger;
    const el: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any;
    el.message = message;
    el.addEventListener('closed', ()=> document.body.removeChild(el));
    document.body.appendChild(el);
  }



}
