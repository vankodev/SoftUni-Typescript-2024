const input1: string[] = ["Yoghurt", "48", "Rise", "138", "Apple", "52"];
const input2: string[] = [ "Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42", ];

// type Calories = { [key: string]: number };
type Calories = Record<string, number>;

function arrToObj(inputArr: string[]): Calories {
    let caloriesObj: Calories = {};

    for (let i = 0; i < inputArr.length; i += 2) {
        caloriesObj[inputArr[i]] = Number(inputArr[i + 1]);
    }

    return caloriesObj;
}

console.log(arrToObj(input1));
console.log(arrToObj(input2));
