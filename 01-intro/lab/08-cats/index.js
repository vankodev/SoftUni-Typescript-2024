class Cat {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
function createCats(catStrings) {
    for (const catString of catStrings) {
        const [name, age] = catString.split(" ");
        const cat = new Cat(name, parseInt(age));
        cat.meow();
    }
}
createCats(["Mellow 2", "Tom 5"]);
createCats(["Candy 1", "Poppy 3", "Nyx 2"]);
//# sourceMappingURL=index.js.map