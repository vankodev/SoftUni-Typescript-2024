function mathOperations(num1, num2, str) {
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
//# sourceMappingURL=05-math-operations.js.map