import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { RoutingModule } from './routing/routing.module';
import { SharedModule } from './shared/shared.module';
import { DiModule } from './dependency-injection/di.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    ComponentsModule,
    RoutingModule,
    DiModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: '', component: ProductListComponent}
    ])
  ],

  declarations: [
    AppComponent,
    ProductListComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
