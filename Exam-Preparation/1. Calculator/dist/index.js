// function calc(first: number, operator: string, second: number): string {
//     // operators +, -, /, *
//     let result = null;
function calc(first, operator, second) {
    const dictCalculator = {
        "+": (first + second).toFixed(2),
        "-": (first - second).toFixed(2),
        "*": (first * second).toFixed(2),
        "/": (first / second).toFixed(2),
    };
    if (!dictCalculator[operator]) {
        return "Non existing operator!";
    }
    return dictCalculator[operator];
}
console.log(calc(5, "+", 10));
console.log(calc(25.5, "-", 3));
console.log(calc(9, "/", 2));
console.log(calc(7, "*", 5));
//# sourceMappingURL=index.js.map