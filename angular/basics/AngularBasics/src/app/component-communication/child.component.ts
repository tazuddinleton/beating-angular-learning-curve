import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-child',
    template: `
        <div class="card " style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{child.name}}</h5>            
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button class="btn btn-sm btn-primary" (click)="sayHello(child.name)">SayHello</button>
            
        </div>
        </div>
    `,    

})
export class ChildComponent {

    @Input()
    child: any
    @Output()
    onGreet : EventEmitter<string> = new EventEmitter<string>();

    sayHello(name: string){
        this.onGreet.emit(`Hello world! from ${name}`);
    }
}