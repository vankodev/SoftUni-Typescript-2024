"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getAverageSalary() {
        if (this.employees.length === 0) {
            return 0;
        }
        return (this.employees.reduce((acc, employee) => acc + employee.getSalary(), 0) /
            this.employees.length);
    }
    sortBySalary() {
        return this.employees.slice().sort((a, b) => b.getSalary() - a.getSalary());
    }
    getEmployeesList() {
        const sortedEmployees = this.sortBySalary();
        const employeesList = sortedEmployees.map((employee) => {
            return `${employee.getName()} ${employee.getSalary().toFixed(2)} ${employee.getEmail()} ${employee.getAge()}`;
        }).join("\n");
        return employeesList;
    }
    getName() {
        return this.name;
    }
    getEmployees() {
        return this.employees;
    }
}
exports.Department = Department;
//# sourceMappingURL=Department.js.map