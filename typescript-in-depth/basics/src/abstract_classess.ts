export abstract class Person {
    abstract name: string;
    abstract email: string;
}

export abstract class Employee extends Person {
    abstract department: string;
    abstract joinDate: Date;
    abstract salary: number;
    abstract calculateYearlyDefaultRaise(): number;
    abstract getAttendanceHistory(): AttendanceHistory;
}

export abstract class AttendanceHistory {}

export class MarketingExecutive extends Employee {
    getAttendanceHistory(): AttendanceHistory {
        throw new Error("Method not implemented.");
    }
    calculateYearlyDefaultRaise(): number {
        return this.salary + this.salary * 0.05;
    }
    constructor(
        public name: string,
        public email: string,
        public department: string,
        public joinDate: Date,
        public salary: number
    ) {
        super();
    }
}

let marketingHead = new MarketingExecutive("Bob", "bob@mail", "Marketing", new Date(), 1000);

let raisedAmount = marketingHead.calculateYearlyDefaultRaise();
console.log(raisedAmount);
