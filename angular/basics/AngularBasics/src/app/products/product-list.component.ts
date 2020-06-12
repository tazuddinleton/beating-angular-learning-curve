import { Component, OnInit, EventEmitter, ViewChild, AfterViewInit, ElementRef, ViewChildren, Query, QueryList } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';




@Component({    
    templateUrl: './product-list.component.html',
    styles: ["thead{color: teal;}"]
    
})
export class ProductListComponent implements OnInit, AfterViewInit {
    pageTitle: string = "Product List";
    showImage: boolean = false;

    products: any[] = [];
    filteredProducts: any[] = [];

    listFilter: string;       

    @ViewChild('filterInputElemRef')
    filterElemRef: ElementRef; 


    private _filterInput: NgModel;
    get filterInput(): NgModel {
        return this._filterInput;
    }

    @ViewChild(NgModel)
    set filterInput(value: NgModel){        
        this._filterInput = value
        console.log(value);

        if(this.filterInput){
            this.filterInput.valueChanges
            .subscribe(data => {
                console.log('perform filtering');
                console.log(data);
                this.performFilterOnProduct(data);
            })
        }
       

    }

    constructor(private productService: ProductService){
        this.filteredProducts = this.products;  
        //this.listFilter = 'digital';
        
    }
    ngAfterViewInit(): void {
        
    }

    ngOnInit(): void {
        this.productService.getAllProducts()
        .subscribe(data => {            
            this.products = data;
            this.filteredProducts = data;
        });
    }
    performFilterOnProduct(filter: string){
        if(!filter)        {
            this.filteredProducts = this.products;
            return;    
        }
        this.filteredProducts = this.products.filter(item =>
            item.productName.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) > -1);
    }

    onRatingClicked(event: string){
        console.log(event);

    }

        
    toggleImage() :void {
        this.showImage = !this.showImage;
    }


    
}