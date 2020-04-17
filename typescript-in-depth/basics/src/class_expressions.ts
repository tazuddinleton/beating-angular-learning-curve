export interface IVehicleState {
    driveForward(): number;
    driveBackward(): number;
}

export class VehicleState implements IVehicleState {
    constructor(private vehicleSpeed: number) {}
    driveBackward(): number {
        return this.vehicleSpeed;
    }
    driveForward(): number {
        return this.vehicleSpeed;
    }
}

export abstract class Vehicle {
    abstract start(): void;
    abstract stop(): void;
    abstract speed: number;
    abstract carState: IVehicleState;
    abstract driveForward(): number;
    abstract driveBackward(): number;
}

export let Car = class extends Vehicle {
    carState: IVehicleState;
    constructor(public speed: number) {
        super();
        this.carState = new VehicleState(0);
    }
    start(): void {
        console.log("Car started");
        this.carState = new VehicleState(this.speed);
    }
    stop(): void {
        console.log("Car stopped.");
        this.carState = new VehicleState(0);
    }

    driveForward(): number {
        return this.carState.driveForward();
    }
    driveBackward(): number {
        return this.carState.driveBackward();
    }
};

export let Bike = class extends Vehicle {
    carState: IVehicleState;
    constructor(public speed: number) {
        super();
        this.carState = new VehicleState(0);
    }

    start(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }

    driveForward(): number {
        throw new Error("Method not implemented.");
    }
    driveBackward(): number {
        throw new Error("Method not implemented.");
    }
};


