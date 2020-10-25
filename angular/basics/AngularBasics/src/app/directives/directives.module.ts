import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ChangeBgColorDirective } from './change-bg-color.directive';



@NgModule({
  declarations: [LandingComponent, ChangeBgColorDirective],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
