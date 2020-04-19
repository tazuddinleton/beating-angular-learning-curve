import { Shelf, Book } from "../src/generics";

describe("Test generics", () => {
    it("should demonstrate how to use generic types", () => {
        let bookShelf = new Shelf<Book>();

        let book1 = new Book("Book 1", "Author 1");
        bookShelf.add(book1);
        bookShelf.add(new Book("Book 2", "Author 1"));
        bookShelf.add(new Book("Book 3", "Author 2"));

        expect(bookShelf.count()).toBe(3);
        bookShelf.remove(book1);
        expect(bookShelf.count()).toBe(2);        
    });
});
