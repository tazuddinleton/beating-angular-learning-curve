function addAsync(x, y, cb){
    setTimeout(() => {
        cb(x+y);
    }, 1000);
}


function makeThunk(fn){
    var args = [].splice.call(arguments, 1);
    return function(cb){
        args.push(cb);
        fn.apply(null, args);
    }
}

// var thunk = makeThunk(addAsync, 10, 10);

// thunk(function(val){
//     console.log(val);
// });

module.exports = {
    makeThunk: makeThunk
}

