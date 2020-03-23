
describe("how template literals work", () => {
    it("can easily combine literals and date", () => {
        let func = (name) => {
            return `Hello ${name}`;
        }

        let result = func('John');
        expect(result).toBe('Hello John');
    });

    it("can help build url", () => {
        let category = "music";
        let id = 21212;
        let url = `http://apiserver/${category}/${id}`;
        expect(url).toBe("http://apiserver/music/21212");
    });


    it("can use tags", () => {
        let upper = (strings, ...values) => {
            let result = "";
            for (let i = 0; i < strings.length; i++) {
                result += strings[i];
                if (i < values.length) {
                    result += values[i];
                }
            }
            return result.toUpperCase();
        }
        let x = 1;
        let y = 2;
        let result = upper `${x} + ${y} is ${x + y}`;
        expect(result).toBe("1 + 2 IS 3");
    });
});