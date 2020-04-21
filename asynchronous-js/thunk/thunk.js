function add(x,y){
    return x+y;
}

var thunk = function(){
    return add(10, 15);
}


console.log(thunk());

