const townPopulationInput1 = [
    "Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000",
];
const townPopulationInput2 = [
    "Istanbul <-> 100000",
    "Honk Kong <-> 2100004",
    "Jerusalem <-> 2352344",
    "Mexico City <-> 23401925",
    "Istanbul <-> 1000",
];
function printPopulation(input) {
    const towns = input.map((town) => {
        const townArray = town.split(" <-> ");
        const townObj = {
            townName: townArray[0],
            townPopulation: Number(townArray[1]),
        };
        return townObj;
    });
    towns.forEach((town) => console.log(town.townName + " : " + town.townPopulation));
}
printPopulation(townPopulationInput1);
printPopulation(townPopulationInput2);
//# sourceMappingURL=05-town-population.js.map