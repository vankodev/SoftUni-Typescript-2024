"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
function main() {
    // INPUT: Peter 12
    // OUTPUT: Peter is 12 years old.
    // INPUT: Sofia 33
    // OUTPUT: Sofia is 33 years old.
    const input = "Peter 12";
    const [a, b] = input.split(" ");
    const name = a;
    const age = parseInt(b);
    const person = new Person_1.Person(name, age);
    console.log(person.toString());
}
main();
//# sourceMappingURL=main.js.map