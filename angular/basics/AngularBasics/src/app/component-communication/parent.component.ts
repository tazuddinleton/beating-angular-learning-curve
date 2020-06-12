import { Component } from '@angular/core';



@Component({
  template: `
  <app-child [age]="age" [name]="name"></app-child>
  `  
})
export class ParentComponent {

  age: number = 10;
  name: string = "Child 1";
}