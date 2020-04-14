import { Book } from "./book";
import {Books} from './books';


let bookList = new Books([
    new Book("book1", "author 1"),
    new Book("book2", "author 2"),
]);

let newBook = new Book("book3", "author 1");
newBook.isAvailable

bookList.add(newBook);



for(let book of bookList){
    console.log(book.title);
}


