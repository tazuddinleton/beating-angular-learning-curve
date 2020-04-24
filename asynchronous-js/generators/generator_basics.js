function* main(){
    yield 1;
    yield 0;
    yield {x: 10};
    yield 'hello';
}

function *range(start, end){    
    while(start != end){
        yield start++;
    }
}

for(let i of main()){
    print(i);
}

for(let i of range(0, 10)){
    print(i);
}



function print(){
    console.log(...arguments);
}
