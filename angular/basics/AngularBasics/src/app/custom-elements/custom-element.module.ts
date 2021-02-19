import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CustomElementLandingComponent } from './components/custom-element.landing.component';
import { PopupComponent } from './components/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports:[
    SharedModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forChild([

      {path: 'ce', component: CustomElementLandingComponent},
    ])
  ],

  declarations:[CustomElementLandingComponent, PopupComponent],
  entryComponents: [PopupComponent],
  providers: []
})
export class CustomElementModule{

}
