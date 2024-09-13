import { Department } from "./Department";
import { Employee } from "./Employee";

function main() {
    // const input = [
    //     "Peter 120.00 Dev Development peter@abv.bg 28",
    //     "Tina 333.33 Manager Marketing 33",
    //     "Sam 840.20 ProjectLeader Development sam@sam.com",
    //     "George 0.20 Freeloader Nowhere 18",
    // ];

    const input = [
        "Silver 496.37 Temp Coding silver@yahoo.com",
        "Sam 610.13 Manager Sales",
        "John 609.99 Manager Sales john@abv.bg 44",
        "Venci 0.02 Director BeerDrinking beer@beer.br 23",
        "Andre 700.00 Director Coding",
        "Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey",
    ];

    const departments = [] as Department[];

    for (const employeeData of input) {
        const [name, salary, position, department, email = "n/a", age = -1] =
            employeeData.split(" ");
        const employee = new Employee(name, +salary, position, department, email, +age);

        let foundDepartment = departments.find((d) => d.getName() === department);
        if (!foundDepartment) {
            foundDepartment = new Department(department);
            departments.push(foundDepartment);
        }

        foundDepartment.addEmployee(employee);
    }

    let maxAverageSalary = 0;
    let departmentWithMaxAverage: Department | null = null;

    for (const department of departments) {
        const averageSalary = department.getAverageSalary();
        if (averageSalary > maxAverageSalary) {
            maxAverageSalary = averageSalary;
            departmentWithMaxAverage = department;
        }
    }

    if (departmentWithMaxAverage) {
        console.log(`Highest Average Salary: ${departmentWithMaxAverage.getName()}`);
        console.log(departmentWithMaxAverage.getEmployeesList());
    } else {
        console.log("No departments found.");
    }
}

main();
