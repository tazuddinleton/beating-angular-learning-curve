import { Book, Category } from "./book";

export class Books {
  private books: Book[];
  constructor() {    
    this.books = new Array<Book>();    
  }

  *[Symbol.iterator]() {
    for (let book of this.books) {
      yield book;
    }
  }

  add(book: Book) {
    this.books.push(book);
  }

  findById(id: number): Book {
    return this.books.find((book) => book.id === id);
  }

  findByCategory(category: Category): Book[] {
    return this.books.filter((book) => book.category === category);
  }
  
  findByAuthor(author: string): Book[]{
    return this.books.filter(book => book.author.includes(author));
 
  }

  filter(){
    
  }
}
