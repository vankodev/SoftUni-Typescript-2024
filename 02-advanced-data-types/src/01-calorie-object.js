const input1 = ["Yoghurt", "48", "Rise", "138", "Apple", "52"];
const input2 = ["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"];

function arrToObj(inputArr) {
    let caloriesObj = {};

    for (let i = 0; i < inputArr.length; i += 2) {
        caloriesObj[inputArr[i]] = Number(inputArr[i + 1]);
    }

    return caloriesObj;
}

console.log(arrToObj(input1));
console.log(arrToObj(input2));
