class Sequence {
    constructor(g) {
        this.sequence = g();
    }
    next() {
        this.sequence.next(...arguments);
    }
    run() {
        this.next(...arguments);
    }
}

class AsyncSequence {
    constructor(g) {
        this.sequence = g();
    }

    run() {
        let process = (result) => {
            if(!result.done){
                result.value.then((data)=>{
                    process(this.sequence.next(data));
                });
            }
        }
        process(this.sequence.next());
    }
}




function print() {
    console.log(...arguments);
}

module.exports = {
    Sequence: Sequence,
    AsyncSequence: AsyncSequence,
    print: print
}