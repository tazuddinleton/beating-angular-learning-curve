describe("Numbers", ()=> {


    it("should support octal", ()=> {
        // octal start with zero
        let octal = 071;
        expect(octal).toBe(57);
    });

    it("should support octal literals", ()=> {
        // 0o
        let octal = 0o71;
        expect(octal).toBe(57);
    });

    it("should support binary literals", ()=> {
        // 0b 
        let bin = 0b101;
        expect(bin).toBe(5);
    });

    it("should parse binary and octal with Number", ()=> {
        let octal = Number("0o71");
        let bin = Number("0b101");
        expect(octal).toBe(57);
        expect(bin).toBe(5);
    });

    it("should expose parseInt and parseFloat", ()=> {
        expect(Number.parseInt("3")).toBe(3);
        expect(Number.parseFloat("3.5")).toBe(3.5);
    });
//
    it("should not convert strings when calling Number.isFinite vs gloabl", ()=> {
        expect(isFinite("1")).toBe(true);
        expect(Number.isFinite("1")).toBe(false);
    });

    it("should not convert strings when calling Number.isNan vs gloabal", ()=> {
        expect(isNaN("NaN")).toBe(true);
        expect(Number.isNaN("NaN")).toBe(false);
    });

    it("should correctly detect integers with isInteger", ()=> {
        expect(Number.isInteger(1)).toBe(true);
        expect(Number.isInteger(1.0)).toBe(true);
        expect(Number.isInteger(1.2)).toBe(false);        
    });

    it("should expose max and min safe integer constants", ()=> {
        expect(Math.pow(2, 53)).toBe(Math.pow(2,53)+1);
        //expect(Math.pow(2, 53)).toBe(Math.pow(2,53)+5);

        expect(Number.MAX_SAFE_INTEGER).toBe(Math.pow(2,53)-1);
        expect(Number.MIN_SAFE_INTEGER).toBe((Math.pow(2,53)*-1) +1);
        
    });

    it("should indicate safe integer with Number.isSafeInteger", ()=> {
        expect(Number.isSafeInteger(9007199254740991)).toBe(true);
        expect(Number.isSafeInteger(9007199254740991+1)).toBe(false);
    })
})