import { Component, NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { RouterModule } from '@angular/router';



@NgModule({
    imports: [
        FormsModule,
        CommonModule,        
        RouterModule.forChild([{path: 'compo-comm', component: ParentComponent}])
    ],
    declarations: [
        ParentComponent,
        ChildComponent
    ],

})
export class ComponentCommunicationModule {

}