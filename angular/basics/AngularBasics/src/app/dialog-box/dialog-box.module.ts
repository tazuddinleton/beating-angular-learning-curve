import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomDialogComponent } from './components/custom-dialog.component';

@NgModule({
  declarations: [],
  providers: [],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {path: 'dialog', component: CustomDialogComponent}
    ])
  ]
})

export class DialogBoxModule {

}
