const { Sequence, print } = require('./sequence');

function getData(data) {
    return setTimeout(() => {
        seq.next(data);``
    }, 1000);
}

let seq = new Sequence(function* () {
    let x = 1 + (yield getData(10));
    let y = 1 + (yield getData(30));
    let answer = yield getData("The meaning of life is " + (x + y));
    print(answer);
});

seq.run();