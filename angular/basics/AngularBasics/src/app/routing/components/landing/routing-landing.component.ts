import { Component } from '@angular/core';

@Component({
    template: `
    <a class="nav-link"
    [routerLink]="['/route-guard']"
    [routerLinkActive]="['link-active']"
    >Implementing route guards</a>

    <a class="nav-link"
    [routerLink]="['/child-route']"
    [routerLinkActive]="['link-active']"
    >Child route</a>

    `
})
export class RoutingLandingComponent {

}
