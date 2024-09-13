import { Employee } from "./Employee";

export class Department {
    private name: string;
    private employees: Employee[];

    constructor(name: string) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    getAverageSalary(): number {
        if (this.employees.length === 0) {
            return 0;
        }
        return (
            this.employees.reduce((acc, employee) => acc + employee.getSalary(), 0) /
            this.employees.length
        );
    }

    private sortBySalary(): Employee[] {
        return this.employees.slice().sort((a, b) => b.getSalary() - a.getSalary());
    }

    getEmployeesList(): string {
        const sortedEmployees = this.sortBySalary();
        const employeesList = sortedEmployees.map((employee) => {
            return `${employee.getName()} ${employee.getSalary().toFixed(2)} ${employee.getEmail()} ${employee.getAge()}`;
        }).join("\n");
        return employeesList;
    }

    getName(): string {
        return this.name;
    }

    getEmployees(): Employee[] {
        return this.employees;
    }
}
