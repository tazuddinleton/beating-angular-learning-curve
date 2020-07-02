import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DiComponent } from './di.component';
import { JS_STRING_SVC, IJsStringService } from './my-js-string-service';

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

