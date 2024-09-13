"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, salary, position, department, email, age) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getSalary() {
        return this.salary;
    }
    getPosition() {
        return this.position;
    }
    getDepartment() {
        return this.department;
    }
    getEmail() {
        return this.email;
    }
    getAge() {
        return this.age;
    }
}
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map