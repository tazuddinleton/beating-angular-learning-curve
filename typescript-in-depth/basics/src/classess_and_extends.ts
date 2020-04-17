export class Person {
    constructor(public name: string, public email: string) {}
}

export class Employee extends Person {
    constructor(
        public name: string,
        public email: string,
        public department: string,
        public joinDate: Date
    ) {
        super(name, email);
    }
}

let marketingHead = new Employee("Bob", "bob@mail", "Marketing", new Date());
