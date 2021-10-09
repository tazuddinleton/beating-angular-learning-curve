import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../products/product.service';

@Component({
  template: `

  HELLO
  <div class="row" *ngIf="products.length" >
    <div class="col-md-4"  *ngFor="let product of products" style="margin-bottom: 5px">
    <app-child  [product]="product"  (onGreet)="handleGreeting($event)"></app-child>
    </div>
  </div>

  `
})
export class ParentComponent implements OnInit{

  products: any[] = []
  constructor(private productService: ProductService){

  }
  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
    console.log('Parent component');

  }



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
