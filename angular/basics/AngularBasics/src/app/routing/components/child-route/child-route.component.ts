import { Component } from '@angular/core';

@Component({
  template: `
    <a [routerLink]="['basic-info']">Basic info</a>
    <a [routerLink]="['child-one']">Child one</a>
    <a [routerLink]="['child-two']">Child two</a>

    <router-outlet></router-outlet>
  `
})
export class ChildRouteComponent{

}
