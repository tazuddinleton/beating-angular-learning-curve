describe("sets", ()=>{
    it("should contain zero items when constructed", ()=> {
        let set = new Set();
        expect(set.size).toBe(0);;
    });

    it("should contain 1 item when one item is added", ()=>{
        let set = new Set();
        set.add("some value");
        expect(set.size).toBe(1);
        expect(set.has("some value")).toBe(true);
    });

    it("should allow objects as key", ()=> {
        let set = new Set();
        let key = {a: 1};
        set.add(key);
        expect(set.has(key)).toBe(true);
    });

    it("shoudl contain items when given an array in the constructor", ()=> {

        let emptyObj = {};
        let objectWithProp = {name: 'Bob'};

        let set = new Set([1,2,3,emptyObj,objectWithProp, {key: 'value'}]);

        expect(set.has(1)).toBe(true);
        expect(set.has(2)).toBe(true);
        expect(set.has(emptyObj)).toBe(true);
        expect(set.has(objectWithProp)).toBe(true);

        expect(set.has({key: 'value'})).toBe(false);
    });

    it("should not allow duplicate values", ()=> {
        let set = new Set();
        set.add(1);
        set.add(1);
        set.add(1);
        set.add(1);
        expect(set.size).toBe(1);
    });
        
});