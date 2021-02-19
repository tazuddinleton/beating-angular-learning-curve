import { Component } from '@angular/core';
import { BaseComponent } from './shared/base.component';
import { setTheme } from 'ngx-bootstrap/utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    setTheme('bs4');
  }

  }
