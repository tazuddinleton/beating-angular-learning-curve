var Employee = require('./commonjs.employee').Employee;

describe("commonJS module systems", ()=> {
    it("should be able to create an employee object using Employee", ()=> {
        let employee = new Employee('Bob Martin');
        expect(employee.getName()).toBe("Bob Martin");
    });
});