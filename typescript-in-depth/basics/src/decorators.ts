
// class decorator
function ClassDecorator(component: any){
    console.log(component);
}

@ClassDecorator
class MyComponent {
    message: string = "Hello world";
    constructor(){

    }
}


// method decorator
function MethodDecorator(target: any, propertyKey: any, descriptor: any){
    console.log(target, propertyKey, descriptor);
    descriptor.value = () => "No hay egual!";
    return descriptor;
}

class MyComponent2 {

    constructor(){

    }

    @MethodDecorator
    getMessage(): string{
        return "Hello world!";
    }
}

let comp2 = new MyComponent2();
let msg = comp2.getMessage();
console.log(msg);

// decorator factory
interface IOptions{

}
function DecoratorFactory(component: IOptions){
    return function(component: any){
        console.log(component);
    }
}

@DecoratorFactory({
    option: "option"
})
class MyComponent3{

    logMsg(msg: string){
        console.log(msg);
    }
}



