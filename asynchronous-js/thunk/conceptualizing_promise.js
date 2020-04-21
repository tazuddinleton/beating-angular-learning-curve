

/// conceptualizing promise
function addAsyncPromise(x, y){
    
    return {
        then: resolve
    }
    function resolve(cb){
        setTimeout(() => {
            return cb(x+y);
        }, 1000);
        
    }
}
addAsyncPromise(10, 15).then(function(value){
    console.log(value);
});
