import { Injectable } from "@angular/core";
import { Observable, from, of } from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(){

    }

    getAllProducts(): Observable<any[]>{


        return from([this.products])
        .pipe(delay(1000));
    }

    products : any[] = [
        {
            productId: 1,
            productName: 'Digital Camera',

            category: 'Produc category 1',
            productCode: 'dcam-25x',
            unitPrice: 230,
            description: 'description',
            image: "https://via.placeholder.com/100",
            starRating: 4,
        },
        {
            productId: 2,
            productName: 'Speaker',
            category: 'Produc category 1',
            productCode:'sp-25x',
            unitPrice: 230.335,
            description: 'description',
            image: "https://via.placeholder.com/100",
            starRating: 1
        }
        ,
        {
            productId: 2,
            productName: 'Speaker',
            category: 'Produc category 1',
            productCode:'sp-25x',
            unitPrice: 230.335,
            description: 'description',
            image: "https://via.placeholder.com/100",
            starRating: 4.8
        }
        ,
        {
            productId: 2,
            productName: 'Speaker',
            category: 'Produc category 1',
            productCode:'sp-25x',
            unitPrice: 230.335,
            description: 'description',
            image: "https://via.placeholder.com/100",
            starRating: 3.9
        }
        ,
        {
            productId: 2,
            productName: 'Speaker',
            category: 'Produc category 1',
            productCode:'sp-25x',
            unitPrice: 230.335,
            description: 'description',
            image: "https://via.placeholder.com/100",
            starRating: 2.5
        }
    ];
}
