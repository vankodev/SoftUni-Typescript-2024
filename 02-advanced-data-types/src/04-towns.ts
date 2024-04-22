const townsInput1: string[] = [
    "Sofia | 42.696552 | 23.32601",
    "Beijing | 39.913818 | 116.363625",
];

const townsInput2: string[] = ["Plovdiv | 136.45 | 812.575"];

type Town = {
    town: string;
    latitude: number;
    longitude: number;
};

function getTowns(townsInput: string[]): void {
    const towns: Town[] = townsInput.map((town): Town => {
        const townArray = town.split(" | ");

        const townObj: Town = {
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
