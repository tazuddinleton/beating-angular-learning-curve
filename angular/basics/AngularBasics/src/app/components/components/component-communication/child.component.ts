import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-child',
    template: `
    
        <div class="card " style="width: 100%">
        <div class="card-body">
            <h5 class="card-title">{{product.productName}}</h5>            

            <p class="card-text">{{product.description}}</p>            
            <button class="btn btn-sm btn-primary" (click)="sayHello(product.productName)">Add to Cart</button>
            
        </div>
        </div>
    `,    

})
export class ChildComponent {

    @Input()
    product: any
    @Output()
    onGreet : EventEmitter<string> = new EventEmitter<string>();

    sayHello(name: string){
        this.onGreet.emit(`${name} is added to your cart`);
    }
}