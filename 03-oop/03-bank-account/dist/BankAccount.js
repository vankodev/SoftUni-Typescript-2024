"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor() {
        this._id = BankAccount.nextId++;
        this._balance = 0;
    }
    id() {
        return this._id;
    }
    balance() {
        return this._balance;
    }
    static setInterestRate(interest) {
        BankAccount.interestRate = interest;
    }
    getInterest(years) {
        return BankAccount.interestRate * years;
    }
    deposit(amount) {
        this._balance += amount;
    }
    error() {
        console.log("Account does not exist!");
    }
}
exports.BankAccount = BankAccount;
BankAccount.nextId = 1;
BankAccount.interestRate = 0.02;
//# sourceMappingURL=BankAccount.js.map