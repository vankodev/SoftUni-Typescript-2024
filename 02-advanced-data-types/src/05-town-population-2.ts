type TownDetails = {
    townName: string;
    townPopulation: number;
};

function registerTowns(towns: string[]): void {
    const townRegistry: TownDetails[] = [];

    for (const townData of towns) {
        const [townName, populationString]: string[] = townData.split(" <-> ");
        const townPopulation: number = parseInt(populationString);

        const existingTown: TownDetails = townRegistry.find((town) => {
            return town.townName === townName;
        });

        if (existingTown) {
            existingTown.townPopulation += townPopulation;
        } else {
            townRegistry.push({ townName, townPopulation });
        }
    }

    for (const town of townRegistry) {
        console.log(`${town.townName} : ${town.townPopulation}`);
    }
}

registerTowns([
    "Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000",
]);

registerTowns([
    "Istanbul <-> 100000",
    "Honk Kong <-> 2100004",
    "Jerusalem <-> 2352344",
    "Mexico City <-> 23401925",
    "Istanbul <-> 1000",
]);
