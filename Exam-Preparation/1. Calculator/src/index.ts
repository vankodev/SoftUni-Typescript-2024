// function calc(first: number, operator: string, second: number): string {
//     // operators +, -, /, *
//     let result = null;

//     switch (operator) {
//         case "+":
//             result = (first + second).toFixed(2);
//             break;
//         case "-":
//             result = (first - second).toFixed(2);
//             break;
//         case "*":
//             result = (first * second).toFixed(2);
//             break;
//         case "/":
//             result = (first / second).toFixed(2);
//             break;
//         default:
//             result = "Non existing operator!";
//             break;
//     }

//     return result;
// }

type DictCalc = {
    [key: string]: string;
};

function calc(first: number, operator: string, second: number): string {
    const dictCalculator: DictCalc = {
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
