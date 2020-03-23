
describe("class and prototype", () => {
    it("shows how prototype works", () => {
        // declareing base class
        function Person(name) {
            this.name = name;
        }
        Person.prototype.getName = function () {
            return this.name;
        }

        // declaring sub class
        function Employee(name, department) {
            // calling the base class' constructor
            Person.call(this, name);
            this.department = department;
        }
        Employee.prototype = Person.prototype;
        Employee.prototype.getDepartment = function () {
            return this.department;
        }

        let john = new Employee("John", "HRM");
        let bob = new Employee("Bob", "Sales");


        expect(john.getName()).toBe("John");
        expect(john.getDepartment()).toBe("HRM");


        expect(bob.getName()).toBe("Bob");
        expect(bob.getDepartment()).toBe("Sales");
    });


    it("shows how es6 class workds with inheritance", () => {
        class Person {
            constructor(name) {
                this.name = name;
            }
            getName(){
                return this.name;
            }
        }

        class Employee extends Person{
            constructor(name, department){
                super();
                this.name = name;
                this.department = department;
            }
            getDepartment(){
                return this.department;
            }
        }


        let john = new Employee("John", "HRM");
        let bob = new Employee("Bob", "Sales");

        expect(john.getName()).toBe("John");
        expect(john.getDepartment()).toBe("HRM");


        expect(bob.getName()).toBe("Bob");
        expect(bob.getDepartment()).toBe("Sales");

        expect(Employee.prototype.getName.call(bob, "Bob")).toBe("Bob");
    })
})
