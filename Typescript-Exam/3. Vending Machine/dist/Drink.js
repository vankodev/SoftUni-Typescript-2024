"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drink = void 0;
class Drink {
    constructor(name, price, volume) {
        this.name = name;
        this.price = price;
        this.volume = volume;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getVolume() {
        return this.volume;
    }
    setVolume(volume) {
        this.volume = volume;
    }
    toString() {
        return `Name: ${this.name}, Price: $${this.price.toFixed(1)}, Volume: ${this.volume} ml`;
    }
}
exports.Drink = Drink;
//# sourceMappingURL=Drink.js.map