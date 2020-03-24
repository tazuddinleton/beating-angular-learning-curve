describe("super keyword", ()=> {
    it("can be called from a derived class to call the same method in the super class",
    ()=> {

        class Person{
            constructor(name){
                this.name = name;
            }

            getName(){
                return this.name + " from super";
            }
            
            getFoo(){
                return "foo";
            }
            // default implementation
            hourlyPayRate(){
                return 30; //assuming minimum wage = 30
            }
            // more default impl
            toString(){
                return this.name + " is a person.";
            }            
        }

        class Employee extends Person{
            constructor(name, title){
                super(name);
                this.title = title;
            }

            // demonstrates how to call a method from 
            // super class
            getFoo(){
                return super.getFoo();
            }

            getTitle(){
                return this.title;
            }
            // overridden method
            hourlyPayRate(){
                return 100; 
            }
            // overriden
            toString(){
                return this.name + " is a Developer.";
            }
        }

        let p = new Person("Bob");
        let e = new Employee("John", "Developer");

        expect(p.hourlyPayRate()).toBe(30);
        expect(e.hourlyPayRate()).toBe(100);
        
        expect(p.toString()).toBe("Bob is a person.");
        expect(e.toString()).toBe("John is a Developer.");

        expect(e.getName()).toBe("John from super");
        expect(e.getFoo()).toBe("foo");
        expect(e.getTitle()).toBe("Developer");

    });
})