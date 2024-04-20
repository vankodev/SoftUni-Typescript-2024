function printEmployees(employees) {
    employees.forEach((employee) => {
        const personalNum = employee.length;
        console.log(`Name: ${employee} -- Personal Number: ${personalNum}`);
    });
}
printEmployees([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal"
]);
printEmployees([
    "Samuel Jackson",
    "Will Smith",
    "Bruce Willis",
    "Tom Holland"
]);
//# sourceMappingURL=09-employees.js.map