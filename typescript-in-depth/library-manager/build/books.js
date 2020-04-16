"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Books {
    constructor() {
        this.books = new Array();
    }
    *[Symbol.iterator]() {
        for (let book of this.books) {
            yield book;
        }
    }
    add(book) {
        this.books.push(book);
    }
    findById(id) {
        return this.books.find((book) => book.id === id);
    }
    findByCategory(category) {
        return this.books.filter((book) => book.category === category);
    }
    findByAuthor(author) {
        return this.books.filter(book => book.author.includes(author));
    }
    filter() {
    }
}
exports.Books = Books;
//# sourceMappingURL=books.js.map