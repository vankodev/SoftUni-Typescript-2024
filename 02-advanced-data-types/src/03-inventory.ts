const heroInput1: string[] = [
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
];

const heroInput2: string[] = [
    "Batman / 2 / Banana, Gun",
    "Superman / 18 / Sword",
    "Poppy / 28 / Sentinel, Antara",
];

type Hero = {
    heroName: string;
    heroLevel: number;
    items: string[];
};

function registerHeroes(heroData: string[]): void {
    const heroes: Hero[] = heroData.map((hero): Hero => {
        const heroArray: string[] = hero.split(" / ");

        const heroObj: Hero = {
            heroName: heroArray[0],
            heroLevel: Number(heroArray[1]),
            items: heroArray[2].split(", "),
        };

        return heroObj;
    });

    heroes.sort((a: Hero, b: Hero) => a.heroLevel - b.heroLevel);

    heroes.forEach((hero) => {
        const items: string = hero.items.join(", ");

        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`Items => ${items}`);
    });
}

registerHeroes(heroInput1);
registerHeroes(heroInput2);
