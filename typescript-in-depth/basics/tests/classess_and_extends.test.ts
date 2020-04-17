import { Person, Employee } from "../src/classess_and_extends";

describe("classess and extends", () => {
    it("should extend classess", () => {
        let person1: Person = new Employee("Kevin", "ke@vin", "Sales", new Date());

        expect(person1 instanceof Person).toBe(true);
        expect(person1 instanceof Employee).toBe(true);
    });
});
