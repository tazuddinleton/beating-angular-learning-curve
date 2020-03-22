describe("default parameters", () => {
    it("provides defaults", () => {


        let greet = (name = "Taz") => {
            return "Hello, " + name;
        }


        let greeting1 = greet();
        expect(greeting1).toBe("Hello, Taz");

        let greeting2 = greet("John");
        expect(greeting2).toBe("Hello, John");

        let greeting3 = greet("");
        expect(greeting3).toBe("Hello, ");

        let greeting4 = greet(undefined);
        expect(greeting4).toBe("Hello, Taz");

        let greeting5 = greet(null);
        expect(greeting4).toBe("Hello, Taz");
    });



    it("will provide a value for undefined", () => {

        let getValues = (a = 1, b = 2, c = 3) => {
            return [a, b, c];
        }

        let [a, b, c] = getValues(10, undefined);

        expect(a).toBe(10);
        expect(b).toBe(2);
        expect(c).toBe(3);
    });

    
    it("will work with destructuring", () => {

        let getPerson = (url, {firstName = "Taz", lastName}) => {
            return firstName;
        }

        let result = getPerson("api/test", {lastName: "Uddin"});
        
        expect(result).toBe("Taz");
    });
});