import { Component } from '@angular/core';

@Component({
    template: `
    <a class="nav-link" 
    [routerLink]="['/route-guard']"
    [routerLinkActive]="['link-active']"
    >Implementing route guards</a>
    
    ` 
})
export class RoutingLandingComponent {

}