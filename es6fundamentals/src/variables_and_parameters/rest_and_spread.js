describe("rest parameters", () => {
    it("is like varargs", () => {
        // rest operator ...name 
        let getTotal = (name, ...scores) => {
            let result = 0;
            scores.forEach(x => result += x);
            return result;
        }

        let result = getTotal("John", 1, 2, 3, 4);
        expect(result).toBe(10);
    });
});

describe("spread operator", () => {
    it("can spread an array across parameters", () => {

        let getResult = (x, y, z) => {
            return x + y + z;
        }

        var result = getResult(...[1, 2, 3]);

        expect(result).toBe(6);

    });

    it("can build array", () => {
        var a = [4, 5, 6];
        var b = [1, 2, 3, ...a, 7, 8, 9];

        expect(b).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })
});