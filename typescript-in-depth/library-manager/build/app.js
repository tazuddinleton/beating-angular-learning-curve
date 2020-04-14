"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./book");
const books_1 = require("./books");
let bookList = new books_1.Books([
    new book_1.Book("book1", "author 1"),
    new book_1.Book("book2", "author 2"),
]);
let newBook = new book_1.Book("book3", "author 1");
newBook.isAvailable;
bookList.add(newBook);
for (let book of bookList) {
    console.log(book.title);
}
//# sourceMappingURL=app.js.map