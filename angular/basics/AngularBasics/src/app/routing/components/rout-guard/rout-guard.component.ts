import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base.component';
import { Router } from '@angular/router';

@Component({
  template: ` 
  <div class="form-check">
  <input 
    type="checkbox" 
    class="form-check-input" 
    id="exampleCheck1"
    [(ngModel)]="isDirty"
    >
  <label class="form-check-label" for="exampleCheck1">Make me dirty!</label>
</div>
    <button class="btn btn-outline-dark" (click)="cancel()">
      <i class="fa fa-angle-left"></i> Back
    </button>
  `,
})
export class RouteGuardComponent extends BaseComponent {
  constructor(private router: Router) {
    super();
    this.isDirty = false;
  }


  cancel(){
    this.router.navigate(['/routing']);
  }
  
}
