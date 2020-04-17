export interface Book {
    title: string;
    pubDate: Date;    
}

export interface Person {
  name: string;
  email: string;
  occupation?: string;
  logDetail? : () => void;
}

export interface Employee extends Person {
  designation: string;
}

export interface Author extends Person {
    publications: Book[]
}

export class Architect implements Employee {
    designation: string;
    name: string;
    email: string;    
    occupation: string;
    constructor(){
        this.designation = "Architect";
        this.name = "John Doe",
        this.email = "j@d";        
        this.occupation = this.designation;
    }
    
}

export class Developer implements Employee {
    designation: string;
    name: string;
    email: string;    
    occupation: string;
    constructor(){
        this.designation = "Developer";
        this.name = "Robin Hood",
        this.email = "r@h"
        this.occupation = this.designation;
    }    
}

export class FictionAuthor implements Author {
    publications: any[];
    name: string;
    email: string;
    occupation: string;
    constructor(){
        this.name = "JK Rowling",
        this.email = "jk@r"
        this.publications = [{
            title: "Harry Potter and the Goblet of Fire",
            pubDate: new Date()
        }];
        this.occupation = "Fiction author";
    }
    
}

export function logPerson(person: Person){
    console.log(`Name: ${person.name} is ${person.occupation}, can be reached at ${person.email}`);
}

export function logEmployee(employee: Employee){
    logPerson(employee);    
}

export function logAuthor(author: Author){
    logPerson(author);
    console.log("Books published: ");
    author.publications.forEach(book => console.log(`Title: ${book.title}, Puplished at: ${book.pubDate.toLocaleDateString()})`));
}

logPerson(new Developer());
logEmployee(new Architect());
logAuthor(new FictionAuthor());