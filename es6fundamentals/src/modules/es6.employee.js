export class Employee{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

export let log = function(employee){
    console.info(employee.getName());
}

export let salary = 155000;

// if only one export 
// u can use export default keyword

// 
