import { Component, NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './components/component-communication/parent.component';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './components/component-communication/child.component';
import { ComponentModuleLandingComponent } from './components/module-landing/component.module.landing';




@NgModule({
    imports: [
        FormsModule,
        CommonModule,                
        RouterModule.forChild([
            {path: 'components', component: ComponentModuleLandingComponent},
            {path: 'compo-comm', component: ParentComponent}
        ])        
    ],
    declarations: [
        ParentComponent,
        ChildComponent,
        ComponentModuleLandingComponent
    ],

})
export class ComponentsModule {

}