describe("destructuring", () => {

    it("can destructure arrays", () => {
        let x = 12;
        let y = 3;

        // swapping the variable values with
        // destructuring 
        [x, y] = [y, x];


        expect(x).toBe(3);
        expect(y).toBe(12);
    });

    it("can destructure arrays", () => {

        // declaring variables with
        // destructuring
        let [, x, y, z] = [10, 3, 12];


        expect(x).toBe(3);
        expect(y).toBe(12);
        expect(z).toBeUndefined();
    });

    it("can destructure objects", () => {

        function getPerson() {
            return {
                firstName: "John",
                lastName: "Doe",
                handles: {
                    twitter: "@johndoe"
                }
            }
        }
        // declaring variables with destructuring
        let { firstName: fname,
            handles: {
                twitter: twitter
            }
        } = getPerson();

        expect(fname).toBe("John");
        expect(twitter).toBe("@johndoe")
    });

    it("can destructure objects", () => {

        function getPerson() {
            return {
                firstName: "John",
                lastName: "Doe",
                handles: {
                    twitter: "@johndoe"
                }
            }
        }
        // declaring variables with destructuring
        // with same name 
        let { firstName,
            handles: {twitter}} = getPerson();

        expect(firstName).toBe("John");
        expect(twitter).toBe("@johndoe")
    });

    it("can destructure function parameters", () => {

        function addPerson(url, {firstName, lastName, twitter}) {
            return firstName + " " + lastName + " " + twitter;
        }
        // destructure works with function params
        let result = addPerson("api/person",{
            firstName: "John",
            lastName: "Doe",
            twitter: "@johndoe"
        });

        expect(result).toBe("John Doe @johndoe");        
    });
});