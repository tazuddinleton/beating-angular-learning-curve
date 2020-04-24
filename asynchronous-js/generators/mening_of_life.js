const { Sequence, print } = require('./sequence');

let seq = new Sequence(function*(){
    let x = 1 + (yield);
    let y = 1 + (yield);
    yield (x + y);
});

seq.next(10);
print("The meaning of life is ",seq.next(30).value);





let run = getSequence(function* () {
    let x = 1 + (yield);
    let y = 1 + (yield);
    yield (x + y);
});
run();
run(10);
print("The meaning of life is", run(30).value);








function getSequence(generator) {
    let iterator = generator();
    return function () {
        return iterator.next.apply(iterator, arguments);
    }
}


