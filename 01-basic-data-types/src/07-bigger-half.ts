function sortArray(arr: number[]): number[] {
    arr.sort((a, b) => a - b);

    const halfIndex: number = Math.floor(arr.length / 2);

    const secondHalf: number[] = arr.slice(halfIndex);

    return secondHalf;
}

console.log(sortArray([4, 7, 2, 5]));
console.log(sortArray([3, 19, 14, 7, 2, 19, 6]));