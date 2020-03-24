describe("arrow function and async",()=>{
    it("lexically binds to this", (done)=>{
        this.name = "Bob";
        
        // using traditional syntax
        setTimeout(function(){
            // this.name is undefined here
            expect(this.name).toBe(undefined);    
            done();
        }, 15);

        // using arrow function syntax
        setTimeout(() => {
            // this.name is "Bob"
            expect(this.name).toBe("Bob");    
            done();
        }, 15);
    });
})