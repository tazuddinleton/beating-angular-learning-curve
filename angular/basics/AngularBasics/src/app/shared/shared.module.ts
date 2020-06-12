import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { StarComponent } from './star.component';
import { ConvertToSpacePipe } from './convert-to-space.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        BaseComponent,
        StarComponent,
        ConvertToSpacePipe,
        ConvertToSpacePipe
    ],
    exports: [
        FormsModule,
        CommonModule,
        BaseComponent,
        StarComponent,
        ConvertToSpacePipe
    ],
    providers: [
      {provide: 'canRouteDeactivate', useValue: canRouteDeactivate}
    ]
})
export class SharedModule {
    
}

export function
canRouteDeactivate(component: BaseComponent){
  if(component.isDirty){
    return confirm("Some data may not be stored, Are you sure you wan't to proceed ?");
  }else{
    return true;
  }
}