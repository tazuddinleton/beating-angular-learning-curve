

// name: is required
// msg: has a default value
// date: is optional

function greet(name: string, msg: string = "Default log msg", date?: Date){
    console.log(msg);
}

greet("Taz");


