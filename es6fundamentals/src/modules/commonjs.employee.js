function Employee(name){
    this.name = name;
}

Employee.prototype.getName = function(){
    return this.name;
}

exports.Employee = Employee;