"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./book");
const books_1 = require("./books");
let bookList = new books_1.Books();
bookList.add(new book_1.Book(1, "book3", "author 1", true, book_1.Category.Drama));
bookList.add(new book_1.Book(2, "book4", "author 1", true, book_1.Category.Novel));
for (let book of bookList) {
    console.log(book.title);
    console.log(book.category);
    console.log(book_1.Category[book.category]);
}
//# sourceMappingURL=app.js.map