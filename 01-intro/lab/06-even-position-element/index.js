function findEven(arr) {
    let evenElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenElements.push(arr[i]);
        }
    }
    return evenElements.join(" ");
}
console.log(findEven(["20", "30", "40", "50", "60"]));
console.log(findEven(["5", "10"]));
//# sourceMappingURL=index.js.map