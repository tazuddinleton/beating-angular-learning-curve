import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-star',
    styleUrls: ['./star.component.css'],
    templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges{
    
    @Input()
    rating: number;
        
    @Output()
    notify : EventEmitter<string> = new EventEmitter<string>();

    starWidth: number;

    
    constructor(){
        this.starWidth = this.rating * 15;
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating * 15;
    }
    
    onClick(){
        this.notify.emit("Clicked!");
    }

}