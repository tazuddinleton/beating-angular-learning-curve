describe("iterables", () => {
    it("can work with iterators at low level", () => {
        let sum = 0;
        let numbers = [1, 2, 3, 4];

        // for loop
        sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        expect(sum).toBe(10);

        // for in
        sum = 0;
        for (let i in numbers) {
            sum += numbers[i];
        }
        expect(sum).toBe(10);

        // iterator
        sum = 0;
        let iterator = numbers.values();
        let next = iterator.next();
        while (!next.done) {
            sum += next.value;
            next = iterator.next();
        }
        expect(sum).toBe(10);
    });

    // for of b
    it("show how to use for of syntax", () => {
        let numbers = [1, 2, 3, 4];
        let sum = 0;

        for (let i of numbers) {
            sum += i;
        }
        expect(sum).toBe(10);
    });

    it("how to impelement iterator", () => {

        class Company {
            constructor() {
                this.employees = [];
            }

            addEmployees(...name) {
                this.employees = this.employees.concat(name);
            }
            [Symbol.iterator]() {
                return new ArrayIterator(this.employees);
            }
        }

        class ArrayIterator {
            constructor(array) {
                this.array = array;
                this.index = 0;
            }
            next() {
                if (this.index < this.array.length) {
                    this.index += 1;
                    return new IteratorResult(false, this.array[this.index]);
                }
                return new IteratorResult(true, undefined);
            }
        }

        class IteratorResult {
            constructor(done, value) {
                this.done = done;
                this.value = value;
            }
        }

        let count = 0;
        let company = new Company();
        company.addEmployees("Bob", "Scott", "Tom", "Jane");

        for (let employee of company) {
            count += 1;
        }
        expect(count).toBe(4);
    })
});