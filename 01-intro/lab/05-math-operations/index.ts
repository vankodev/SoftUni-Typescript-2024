function mathOperations(num1: number, num2: number, str: string): number {
    switch (str) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "%":
            return num1 % num2;
        case "**":
            return num1 ** num2;
    }
}

console.log(mathOperations(5, 6, "+"));
console.log(mathOperations(3, 5.5, "*"));
console.log(mathOperations(15, 5, "/"));
console.log(mathOperations(3, 5, "*"));
console.log(mathOperations(3, 10, "%"));
console.log(mathOperations(3, 2, "**"));
