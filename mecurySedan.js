import "vehicle.js";
//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
    "Mecury",
    "Sedan",
    "1965",
    "color",
    "mileage"
);
console.log(v.make);

class Car extends Vehicle {
    constructor(
        maxPassengers,
        passenger,
        numberOfWheels,
        maxSpeed,
        fuel,
        scheduleService
    ) {
        this.maxPassengers = maxPassengers;
        this.passenger = passenger;
        this.numberOfWheels = numberOfWheels;
        this.maxSpeed = maxSpeed;
        this.fuel = fuel;
        this.scheduleService = scheduleService;
    }
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if (num + this.passengers <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
    start() {
        if (this.fuel > 0) {
            return start == true;
        }
    }
    scheduleService() {
        if (this.milage > 30000) {
            timeForMaintenence = true;
        }
    }
}
let lambo = new Car(
    "Lamborghini",
    "Aventador SVJ",
    "2020",
    "Verde Mantis",
    50000
);

lambo.start();
myCar.loadPassenger(5);
myCar.stop();
myCar.checkService();

console.log(myCar);

//if passenger less than maximumPassengers then availableRoom =
