export class Person {
    constructor(public name: string) {
        Person.instances++;
    }
    static instances: number = 0;
    static getInstanceCount(): number {
        return Person.instances;
    }
}

let p1 = new Person("Person 1");
let p2 = new Person("Person 2");

console.log(Person.instances);

console.log(Person.getInstanceCount());
