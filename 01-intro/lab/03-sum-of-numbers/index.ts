function numSum(a: number, b: number): number {
    let num: number = 0;

    for (let i = a; i <= b; i++) {
        num += i;
    }

    return num;
}

console.log(numSum(1, 5));
console.log(numSum(-8, 20));
