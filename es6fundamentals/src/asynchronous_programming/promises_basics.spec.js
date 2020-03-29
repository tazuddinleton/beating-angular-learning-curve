describe("composing/chaining promises", ()=> {    

    it("should execute the callback given to then", (done)=> {
        let promise = new Promise((resolve, reject) => {
            resolve(100);
        });

        promise.then((data) => {
            expect(data).toBe(100);
            done();
        });
    });


    it("should compose when resolved with promise", (done)=> {
        let promise = new Promise((resolve, reject) => {
            resolve(100);
        });

        let promise2 = new Promise((resolve, reject) => {            
            promise.then((data) => {
                resolve(data+2);
            });            
        });

        promise2.then((data) => {
            expect(data).toBe(102);
            done();
        });


    });
});