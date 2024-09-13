import { Person } from "./Person";

function main() {
    // INPUT: Peter 12
    // OUTPUT: Peter is 12 years old.
    
    // INPUT: Sofia 33
    // OUTPUT: Sofia is 33 years old.

    const input: string = "Peter 12"

    const [a, b] = input.split(" ");
    const name: string = a;
    const age: number = parseInt(b);

    const person = new Person(name, age);
    console.log(person.toString());
}

main();
