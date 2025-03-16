"use strict";
// Implement the Car class that follows the Vehicle interface
class Car {
    // Constructor to initialize the Car object
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implementing the start method
    start() {
        console.log("Car engine started");
    }
}
// Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2022);
// Call the start method to verify output
myCar.start();
