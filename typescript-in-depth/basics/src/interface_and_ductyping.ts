interface Duck {
    walk: ()=> void;
    swim: ()=> void;
    quack: ()=> void;
}

class ADuck implements Duck {    
    walk(){
        console.log('A duck is walking');
    }
    swim(){
        console.log('A duck is swimming');
    }
    quack(){
        console.log('A duck is quacking');
    }
}

let probablyADuck = {
    walk: ()=> console.log("walking like a duck"),
    swim: ()=> console.log('swimming like a duck'),
    quack: ()=> console.log('quacking like a duck')
}


let birds: Duck[] = [];
birds.push(new ADuck(), probablyADuck);
birds.forEach(bird => simulate(bird));



function simulate(bird: Duck){
    bird.walk();
    bird.swim();
    bird.quack();
}


