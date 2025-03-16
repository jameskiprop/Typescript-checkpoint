// Define the Vehicle interface with required properties and method
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void; // Method that returns void
}

// Implement the Car class that follows the Vehicle interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  // Constructor to initialize the Car object
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Implementing the start method
  start(): void {
    console.log("Car engine started");
  }
}

// Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2022);

// Call the start method to verify output
myCar.start();
