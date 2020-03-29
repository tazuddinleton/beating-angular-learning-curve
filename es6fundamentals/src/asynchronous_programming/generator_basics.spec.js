describe("async generators", () => {
    xit("should be difficult to rad with regular async", (done) => {
        console.log('start');
        pause(500, ()=> {
            console.log('middle');
        });        

        pause(500,()=> {
            console.log('end');
        }, done);
        

        function pause(delay, callBack, done){
            setInterval(() => {
                console.log('paused for 500ms');
                callBack();
                
                if(done){
                    done();
                }
            }, delay);
        }
    });

    
    it("should be easier to rad with generator", (done) => {
        
        // generator         
        function* main(){
            console.log('start');
            yield pause(500);
            console.log('middle');
            yield pause(500);
            console.log('end');
            done();            
        }

        class Async {
            constructor(generator){
                this.sequence = generator();                
            }
            run(){
                this.sequence.next();
            }
            resume(){
                this.sequence.next();
            }
        }        
        let async = new Async(main);
        async.run();

        function pause(delay){
            setTimeout(() => {
                console.log('paused for 500ms');
                async.resume();
            }, delay);
        }
    });

    
    
});