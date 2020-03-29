describe("async generators with promises", () => {
    it("should work with generators and promises", (done) => {
        function* main() {
            try {
                let price = yield getStockPrice();
                if (price > 45) {
                    yield executeTrade(price);
                } else {
                    console.log('trade not made');
                }
            }
            catch (err) {
                console.log('error: ' + err);
            }
            done();
        }

        class Async {
            constructor(generator) {
                this.sequence = generator();

            }
            run() {
                let process = (result) => {                          
                    if(!result.done){                            
                        result.value.then((data) => {
                            process(this.sequence.next(data));
                        });
                    }
                }
                process(this.sequence.next());
            }
        }

        let async = new Async(main);
        async.run();

        function getStockPrice() {
            let promise = new Promise((resolve, reject) => {
                try {
                    setTimeout(() => {
                        resolve(100);
                    }, 100);
                }
                catch (err) {
                    reject(err);
                }
            });            
            return promise;
        }

        function executeTrade(price) {
            let promise = new Promise((resolve, reject) => {
                try {
                    setTimeout(() => {
                        console.log(`trade is completed using promise with price ${price}`);
                        //throw Error("trade exception occured");
                        resolve();
                    }, 100);
                }
                catch (err) {
                    reject(err);
                }
            });            
            return promise;
        }
    });
});