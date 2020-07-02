import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DiComponent } from './di.component';
import { JS_STRING_SVC, IJsStringService } from './my-js-string-service';

//Reference: https://dzone.com/articles/quick-tip-%E2%80%93-typescript-declare#:~:text=The%20declare%20keyword%20is%20used,myLibrary%20in%20the%20global%20namespace.
declare let stringService: IJsStringService;

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
          {path: 'di', component: DiComponent}
        ])
    ],
    declarations: [
      DiComponent
    ],
    providers: [
      {provide: JS_STRING_SVC, useValue: stringService}
    ]
})
export class DiModule {

}

