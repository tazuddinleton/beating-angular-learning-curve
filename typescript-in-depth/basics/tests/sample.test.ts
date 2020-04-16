import {Log} from '../src/logger';



describe("Test", ()=> {
    it("should test Log", ()=> {
        let msg = "Hello jasmine!";

        expect(Log(msg)).toBe(msg);
    })
})