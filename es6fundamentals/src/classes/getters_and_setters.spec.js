describe("getters and setters", () => {
    it("shows how getters and setters work", () => {
        
        class Employee {
            constructor(){

            }

            get name() {
                return this._name;
            }
            set name(name) {
                if(name === "" || name === null || name === undefined){
                    throw Error("Name cannot be empty.");
                }
                this._name = "Mr. " + name;
            }
        }


        let p = new Employee();     
        function setNameToEmpty(){
            //p.name = "";
            //p.name = "null"; // fails the test
            p.name = undefined;
        }

        expect(setNameToEmpty).toThrow(new Error("Name cannot be empty."));

       
    });
})