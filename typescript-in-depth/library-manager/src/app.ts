import { Book, Category } from "./book";
import {Books} from './books';


let bookList = new Books();

bookList.add(new Book(1,"book3", "author 1", true, Category.Drama));
bookList.add(new Book(2, "book4", "author 1", true, Category.Novel));

for(let book of bookList){
    console.log(book.title);
    console.log(book.category);
    console.log(Category[book.category]);    
}



