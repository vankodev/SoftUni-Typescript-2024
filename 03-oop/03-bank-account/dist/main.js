"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
function main() {
    // Create
    const account1 = new BankAccount_1.BankAccount();
    console.log(`Account ID${account1.id()} created`);
    // Create
    const account2 = new BankAccount_1.BankAccount();
    console.log(`Account ID${account2.id()} created`);
    // Deposit 1 20
    account1.deposit(20);
    console.log(`Deposited 20 to ID${account1.id()}`);
    // Deposit 1 20
    account1.deposit(20);
    console.log(`Deposited 20 to ID${account2.id()}`);
    // GetInterest 1 10
    const interest = account1.getInterest(10);
    console.log(interest.toFixed(2));
}
main();
//# sourceMappingURL=main.js.map