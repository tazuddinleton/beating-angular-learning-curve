import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutingLandingComponent } from './components/landing/routing-landing.component';
import { SharedModule } from '../shared/shared.module';
import { RouteGuardComponent } from './components/rout-guard/rout-guard.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: 'routing', component: RoutingLandingComponent},
            {path: 'route-guard', component: RouteGuardComponent, canDeactivate: ['canRouteDeactivate']},
                  
        ])        
    ],
    declarations: [
        RoutingLandingComponent,
        RouteGuardComponent
    ]
})
export class RoutingModule {

}