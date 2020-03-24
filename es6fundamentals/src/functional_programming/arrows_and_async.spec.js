describe("arrow function and async/callback",()=>{
    it("lexically binds to this", (done)=>{
        this.name = "Bob";
        
        // using traditional syntax
        let self = this;
        setTimeout(function(){
            // this.name is undefined here            
            expect(this.name).toBe(undefined);    
            expect(self.name).toBe("Bob");
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