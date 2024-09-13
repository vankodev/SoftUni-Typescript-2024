export class BankAccount {
    private static nextId: number = 1;
    private _id: number;
    private _balance: number;
    private static interestRate: number = 0.02;

    constructor() {
        this._id = BankAccount.nextId++;
        this._balance = 0;
    }

    public id(): number {
        return this._id;
    }

    public balance(): number {
        return this._balance;
    }

    public static setInterestRate(interest: number): void {
        BankAccount.interestRate = interest;
    }

    public getInterest(years: number): number {
        return BankAccount.interestRate * years;
    }

    public deposit(amount: number): void {
        this._balance += amount;
    }

    public error() {
        console.log("Account does not exist!");
    }
}
