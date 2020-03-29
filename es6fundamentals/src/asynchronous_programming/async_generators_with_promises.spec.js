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
                // handle error
            }
            done();
        }

        class Async {
            constructor(generator) {
                this.sequence = generator();

            }
            run() {
                let process = (result) => {
                    if (!result.done) {
                        result.value.then((data) => {
                            process(this.sequence.next(data));
                        }).catch((err) => {
                            process(this.sequence.throw(err));
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
                setTimeout(() => {
                    try {
                        resolve(100);
                    }
                    catch (ex) {
                        reject(ex);
                    }
                }, 100);
            });
            return promise;
        }

        function executeTrade(price) {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        console.log(`trade is completed using promise with price ${price}`);                        
                        resolve();
                    }
                    catch (ex) {
                        reject(ex)
                    }
                }, 100);
            });
            return promise;
        }
    });
});