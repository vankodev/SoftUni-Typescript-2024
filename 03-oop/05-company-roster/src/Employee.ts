export class Employee {
    private name: string;
    private salary: number;
    private position: string;
    private department: string;
    private email: string;
    private age: number;

    constructor(
        name: string,
        salary: number,
        position: string,
        department: string,
        email: string,
        age: number
    ) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    getPosition(): string {
        return this.position;
    }

    getDepartment(): string {
        return this.department;
    }

    getEmail(): string {
        return this.email;
    }

    getAge(): number {
        return this.age;
    }
}
