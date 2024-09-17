export class Drink {
    private name: string;
    private price: number;
    private volume: number;

    constructor(name: string, price: number, volume: number) {
        this.name = name;
        this. price = price;
        this.volume = volume;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number): void {
        this.price = price;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(volume: number): void {
        this.volume = volume;
    }

    toString(): string {
        return `Name: ${this.name}, Price: $${this.price.toFixed(1)}, Volume: ${this.volume} ml`;
    }
}