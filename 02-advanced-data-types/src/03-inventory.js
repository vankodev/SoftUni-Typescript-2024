const input1 = [
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
];

const input2 = [
    "Batman / 2 / Banana, Gun",
    "Superman / 18 / Sword",
    "Poppy / 28 / Sentinel, Antara",
];

function heroRegister(heroData) {
    const heroArray = heroData.map((hero) => hero.split(" / "));

    heroArray.sort((a, b) => a[1] - b[1]);

    heroArray.forEach((hero) => {
        const heroName = hero[0];
        const heroLevel = hero[1];
        const items = hero[2];

        console.log(`Hero: ${heroName}`);
        console.log(`level => ${heroLevel}`);
        console.log(`Items => ${items}`);
    });
}

heroRegister(input1);
heroRegister(input2);
