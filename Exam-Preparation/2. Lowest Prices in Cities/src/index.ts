const inputData: string[] = [
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
];

function solve(input: string[]): void {
    for (const line of input) { // започваме да обхождаме инпута който получаваме
        // 0 -> town, 1-> product, 2-> price
        console.log(line.split(" | "));
    }
}

solve(inputData);