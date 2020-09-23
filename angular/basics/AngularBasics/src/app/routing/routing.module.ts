import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutingLandingComponent } from './components/landing/routing-landing.component';
import { SharedModule } from '../shared/shared.module';
import { RouteGuardComponent } from './components/rout-guard/rout-guard.component';
import { CommonModule } from '@angular/common';
import { ChildRouteComponent } from './components/child-route/child-route.component';
import { BasicInfoComponent, ChildOneComponent, ChildTwoComponent } from './components/child-route/basic-info.component';

@NgModule({
    imports: [
      SharedModule,
      CommonModule,
        RouterModule.forChild([
            {path: 'routing', component: RoutingLandingComponent},
            {path: 'route-guard', component: RouteGuardComponent, canDeactivate: ['canRouteDeactivate']},
            {
              path: 'child-route',
              component: ChildRouteComponent,
              canDeactivate: ['canRouteDeactivate'],
              children: [
                {path: '', redirectTo: 'basic-info', pathMatch: 'full'},
                {path: 'basic-info',  component: BasicInfoComponent},
                {path: 'child-one',  component: ChildOneComponent},
                {path: 'child-two', component: ChildTwoComponent}
              ]
          },
        ])
    ],
    declarations: [
        RoutingLandingComponent,
        RouteGuardComponent,
        ChildRouteComponent,
        BasicInfoComponent,
        ChildOneComponent,
        ChildTwoComponent
    ]
})
export class RoutingModule {

}
