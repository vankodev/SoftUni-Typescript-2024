function aggregateElements(elements) {
    const sum = elements.reduce((acc, curr) => acc + curr, 0);
    const inverseSum = elements.reduce((acc, curr) => acc + 1 / curr, 0);
    const concat = elements.join('');
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
//# sourceMappingURL=index.js.map