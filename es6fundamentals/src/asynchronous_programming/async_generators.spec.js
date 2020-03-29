describe("async generators", () => {
    xit("should be difficult to rad with regular async", (done) => {
        console.log('start');
        pause(500, () => {
            console.log('middle');
        });

        pause(500, () => {
            console.log('end');
        }, done);


        function pause(delay, callBack, done) {
            setInterval(() => {
                console.log('paused for 500ms');
                callBack();

                if (done) {
                    done();
                }
            }, delay);
        }
    });


    xit("should be easier to rad with generator", (done) => {

        // generator         
        function* main() {
            console.log('start');
            yield pause(500);
            console.log('middle');
            yield pause(500);
            console.log('end');
            done();
        }

        class Async {
            constructor(generator) {
                this.sequence = generator();
            }
            run() {
                this.sequence.next();
            }
            resume() {
                this.sequence.next();
            }
        }
        let async = new Async(main);
        async.run();

        function pause(delay) {
            setTimeout(() => {
                console.log('paused for 500ms');
                async.resume();
            }, delay);
        }
    });


    xit("should pass value through next", (done) => {

        // generator         
        function* main() {
            let price = yield getStockPrice();
            if (price > 45) {
                yield executeTrade(price);
            } else {
                console.log('trade not made');
            }
            done();
        }

        class Async {
            constructor(generator) {
                this.sequence = generator();
            }
            run() {
                this.sequence.next();
            }
            resume(value) {
                this.sequence.next(value);
            }
        }

        let async = new Async(main);
        async.run();

        function getStockPrice() {
            setTimeout(() => {
                async.resume(100);
            }, 100);
        }

        function executeTrade(price) {
            setTimeout(() => {
               // console.log(`trade is completed with price ${price}`);
                async.resume();
            }, 100);
        }
    });

    it("should handle exception", (done) => {
        // generator         
        function* main() {
            try{
                let price = yield getStockPrice();
                if (price > 45) {
                    yield executeTrade(price);
                } else {
                    
                }
            }
            catch (err){
                      
            }
            done();
        }

        class Async {
            constructor(generator) {
                this.sequence = generator();
            }
            run() {
                this.sequence.next();
            }
            resume(value) {
                this.sequence.next(value);
            }
            fail(err){
                this.sequence.throw(err);
            }
        }

        let async = new Async(main);        
        async.run();

        function getStockPrice() {
            try{
                setTimeout(() => {
                    async.resume(100);
                }, 100);
            }
            catch(err){
                async.fail(err);
            }
        }

        function executeTrade(price) {
            try{
                setTimeout(() => {
                    //console.log(`trade is completed with price ${price}`);
                    //throw Error("trade exception occured");
                    async.resume();
                }, 100);
            }
            catch(err){
                async.fail(err);
            }
        }
    });
});