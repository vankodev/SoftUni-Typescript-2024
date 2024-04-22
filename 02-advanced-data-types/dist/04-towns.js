const townsInput1 = [
    "Sofia | 42.696552 | 23.32601",
    "Beijing | 39.913818 | 116.363625",
];
const townsInput2 = ["Plovdiv | 136.45 | 812.575"];
function getTowns(townsInput) {
    const towns = townsInput.map((town) => {
        const townArray = town.split(" | ");
        const townObj = {
            town: townArray[0],
            latitude: Number(Number(townArray[1]).toFixed(2)),
            longitude: Number(Number(townArray[2]).toFixed(2)),
        };
        return townObj;
    });
    towns.forEach((town) => console.log(town));
}
getTowns(townsInput1);
getTowns(townsInput2);
//# sourceMappingURL=04-towns.js.map