"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(id, title, author, isAvailable, category) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
        this.category = category;
        if (!id) {
            throw new Error("Id must be provided");
        }
    }
}
exports.Book = Book;
var Category;
(function (Category) {
    Category[Category["Novel"] = 1] = "Novel";
    Category[Category["Drama"] = 2] = "Drama";
    Category[Category["Poetry"] = 3] = "Poetry";
})(Category = exports.Category || (exports.Category = {}));
//# sourceMappingURL=book.js.map