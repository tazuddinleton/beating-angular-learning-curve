import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h1>Age: {{name}}</h1>
        <h2>Age: {{age}}</h2>
    `

})
export class ChildComponent {

    @Input()
    name: string;
    @Input()
    age: number;


}