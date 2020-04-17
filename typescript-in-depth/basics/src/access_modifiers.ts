export class Person {
  private _email: string;
  constructor(public name: string, public age: number ) {
    this._email = "";
  }
  get email(): string {
    return this._email;
  }

  set email(name: string) {    
    this._email = name;
  }
}

let p1 = new Person("Taz Uddin", 30);
p1.email = "taz@mail.com";

console.log(p1.email);
