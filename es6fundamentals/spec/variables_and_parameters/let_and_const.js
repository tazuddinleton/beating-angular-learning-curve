describe("how let works", () => {
    it("will provide block scoping, unlike var", () => {
        var doWork = function (flag) {
            if (flag) {
                let x = 3;
                return x;
            }

        }

        var result = doWork(true);
        expect(result).toBe(3);
    });


    it("will provide block scoping with for", () => {
        //const i = 0;
        let i = 0;
        var doWork = function (flag) {            
            for (var i = 0;i < 10; i++) {
                
            }            
            return i;
        }        

        var result = doWork();
        expect(result).toBe(10);
        expect(i).toBe(0);
    });
});
