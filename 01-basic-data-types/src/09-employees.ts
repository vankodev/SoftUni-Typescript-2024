function printEmployees(employees: string[]): void {
    employees.forEach((employee) => {
      const personalNum: number = employee.length;
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
  