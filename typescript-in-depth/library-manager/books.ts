import { Book } from "./book";

export class Books {
  constructor(private books: Array<Book>) {}

  *[Symbol.iterator]() {
    for (let book of this.books) {
      yield book;
    }
  }

  add(book: Book){
      this.books.push(book);
  }
}
