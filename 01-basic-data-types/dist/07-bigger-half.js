function sortArray(arr) {
    arr.sort((a, b) => a - b);
    const halfIndex = Math.floor(arr.length / 2);
    const secondHalf = arr.slice(halfIndex);
    return secondHalf;
}
console.log(sortArray([4, 7, 2, 5]));
console.log(sortArray([3, 19, 14, 7, 2, 19, 6]));
//# sourceMappingURL=07-bigger-half.js.map