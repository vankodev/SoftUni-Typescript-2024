import { Car } from "./Car";

function main() {
    // INPUT: Chevrolet Impala 390
    // OUTPUT: The car is: Chevrolet Impala - 390 HP.
    
    // INPUT: Skoda Karoq 150
    // OUTPUT: The car is: This Skoda Karoq - 150 HP.

    const input: string = "Chevrolet Impala 390";

    const [a, b, c] = input.split(" ");
    const brand: string = a;
    const model: string = b;
    const horsePower: number = parseInt(c);

    const car = new Car(brand, model, horsePower);
    console.log(car.toString());
}
main();
