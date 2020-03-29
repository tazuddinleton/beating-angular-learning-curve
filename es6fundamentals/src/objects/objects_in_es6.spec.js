describe("object.is()", ()=> {
    it("shows object.is function", ()=> {
        expect(-0 === 0).toBe(true);
        expect(Object.is(-0, 0)).toBe(false);
    });

    it("should consider NaN to be NaN", ()=> {
        expect(NaN === NaN).toBe(false);
        expect(Object.is(NaN, NaN)).toBe(true);
    });

    it("should extend object using Object.assign()", () => {
        let person = {
            name: 'Bob'            
        }
        let army = {
            combat(){
                console.log('can combat');
            }
        }
        Object.assign(person, army);
        expect(person.combat).toBeDefined();
    });

    
});