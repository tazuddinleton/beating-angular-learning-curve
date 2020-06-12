import { Component } from '@angular/core';

@Component({
  template: `

  <app-child *ngFor="let child of childList" [child]="child"  (onGreet)="handleGreeting($event)"
  >
    
  </app-child>

  
  `  
})
export class ParentComponent {

  childList = [
    {
      name: 'Child 1',
      age: 10
    },
    {
      name: 'Child 2',
      age: 15
    },
    {
      name: 'Child 3',
      age: 5
    }
  ];

  handleGreeting(msg: string){
    alert(msg);
  }
}