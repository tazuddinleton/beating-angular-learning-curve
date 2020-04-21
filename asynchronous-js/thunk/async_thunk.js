function addAsync(x, y, cb){
    setTimeout(() => {
        cb(x+y);
    }, 1000);
}

var thunk = function(cb){
    addAsync(10, 15, cb);
}


thunk(function(value){
    console.log(value);
});

thunk(function(value){
    console.log(value);
});