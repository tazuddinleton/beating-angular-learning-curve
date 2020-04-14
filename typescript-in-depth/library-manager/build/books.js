"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Books {
    constructor(books) {
        this.books = books;
    }
    *[Symbol.iterator]() {
        for (let book of this.books) {
            yield book;
        }
    }
    add(book) {
        this.books.push(book);
    }
}
exports.Books = Books;
//# sourceMappingURL=books.js.map