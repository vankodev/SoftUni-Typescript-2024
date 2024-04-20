class Cat {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    meow(): void {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

function createCats(catStrings: string[]): void {
    for (const catString of catStrings) {
        const [name, age]: string[] = catString.split(" ");
        const cat: Cat = new Cat(name, parseInt(age));
        cat.meow();
    }
}

createCats(["Mellow 2", "Tom 5"]);
createCats(["Candy 1", "Poppy 3", "Nyx 2"]);
