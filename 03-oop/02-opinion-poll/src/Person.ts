export class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };

    public toString(): string {
        return `${this.name} is ${this.age} years old.`
    }
}
