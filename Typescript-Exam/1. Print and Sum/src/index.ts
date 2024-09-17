function printAndSum(startNumber: number, endNumber: number): void {
    let numSum: number = 0;

    for (let i = startNumber; i <= endNumber; i++) {
        console.log(i);
        numSum += i;
    }

    console.log("Sum: " + numSum);
}

printAndSum(5, 10);
// printAndSum(0, 26);
// printAndSum(50, 60);
