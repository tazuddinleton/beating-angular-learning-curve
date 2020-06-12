import { Component } from '@angular/core';

@Component({
    selector: 'comp-module-landing',
    template: `
    <a class="nav-link" 
    [routerLink]="['/compo-comm']"
    [routerLinkActive]="['link-active']"
    >Component communications</a>
    
    `  
})
export class ComponentModuleLandingComponent{

}