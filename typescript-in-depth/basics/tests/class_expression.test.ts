import { Car, Bike } from "../src/class_expressions";

describe("class expression", () => {
    it("should demonstrate the usage of class expression", () => {
        var acar = new Car(100);
        let currentSpeed = acar.driveForward();

        expect(currentSpeed).toBe(0);
        acar.start();
        currentSpeed = acar.driveForward();
        expect(currentSpeed).toBe(100);
        acar.stop();
        currentSpeed = acar.driveForward();
        expect(currentSpeed).toBe(0);
    });
});
