import { NgModule, Optional, SkipSelf } from '@angular/core';
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
  constructor(@Optional() @SkipSelf() parentModule: SharedModule){
    throwErrorIfAlreadyLoaded(parentModule, 'SharedModule');
  }
}

export function
canRouteDeactivate(component: BaseComponent){
  if(component.isDirty){
    return confirm("Some data may not be stored, Are you sure you wan't to proceed ?");
  }else{
    return true;
  }
}

export function throwErrorIfAlreadyLoaded(parentModule: any, moduleName: string){
    if(parentModule){
      throw Error(`The module is already loaded. Load ${moduleName} only in app component.`);
    }
}
