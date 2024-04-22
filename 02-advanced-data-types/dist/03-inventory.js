const heroInput1 = [
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
];
const heroInput2 = [
    "Batman / 2 / Banana, Gun",
    "Superman / 18 / Sword",
    "Poppy / 28 / Sentinel, Antara",
];
function registerHeroes(heroData) {
    const heroes = heroData.map((hero) => {
        const heroArray = hero.split(" / ");
        const heroObj = {
            heroName: heroArray[0],
            heroLevel: Number(heroArray[1]),
            items: heroArray[2].split(", "),
        };
        return heroObj;
    });
    heroes.sort((a, b) => a.heroLevel - b.heroLevel);
    heroes.forEach((hero) => {
        const items = hero.items.join(", ");
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`Items => ${items}`);
    });
}
registerHeroes(heroInput1);
registerHeroes(heroInput2);
//# sourceMappingURL=03-inventory.js.map