"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = require("./Car");
function main() {
    // INPUT: Chevrolet Impala 390
    // OUTPUT: The car is: Chevrolet Impala - 390 HP.
    // INPUT: Skoda Karoq 150
    // OUTPUT: The car is: This Skoda Karoq - 150 HP.
    const input = "Chevrolet Impala 390";
    const [a, b, c] = input.split(" ");
    const brand = a;
    const model = b;
    const horsePower = parseInt(c);
    const car = new Car_1.Car(brand, model, horsePower);
    console.log(car.toString());
}
main();
//# sourceMappingURL=main.js.map