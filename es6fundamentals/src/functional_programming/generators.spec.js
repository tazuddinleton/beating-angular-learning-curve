describe("generators", ()=> {
    it("can build an iterable", ()=> {
        let range = function*(start, end) {
            for(let i = start; i < end; i++){
                yield i;           
            }
        }

        let sum = 0;
        for(let i of range(1, 10)){
            sum += i;
        }
        expect(sum).toBe(45);
    });


    it("shows how to impelement iterator using generator", () => {

        class Company {
            constructor() {
                this.employees = [];
            }

            addEmployees(...name) {
                this.employees = this.employees.concat(name);
            }
            *[Symbol.iterator]() {
                for(let employee of this.employees){               
                    yield employee;
                }
            }

            *where(predicate){
                for(let emp of this){
                    if(predicate(emp)){
                        yield emp;
                    }
                }
            }
        }

        let filter = function*( ){
            
        }

        let count = 0;
        let company = new Company();
        company.addEmployees("Bob", "Scott", "Tom", "Jane", "Sujane");

        for (let employee of company.where(e=> e[0] == 'S')) {            
            count += 1;
        }
        expect(count).toBe(2);
    })
})