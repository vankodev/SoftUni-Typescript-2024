"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        // adds an entity to the collection of Drinks, if the capacity allows it.
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        // removes a drink by the given name, if such exists, and returns true if it is removed, otherwise – false
        const index = this.drinks.findIndex((drink) => {
            return drink.getName() === name;
        });
        if (index !== -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        //returns the Drink as string in the format of the overriden toString() method with the biggest value of volume property
        let volume = 0;
        let biggestDrink = {};
        for (const drink of this.drinks) {
            if (drink.getVolume() > volume) {
                volume = drink.getVolume();
                biggestDrink = drink;
            }
        }
        return biggestDrink.toString();
    }
    getHighestPrice() {
        let highestPrice = 0;
        for (const drink of this.drinks) {
            if (drink.getPrice() > highestPrice) {
                highestPrice = drink.getPrice();
            }
        }
        return highestPrice;
    }
    getCheapest() {
        // returns the Drink as string in the format of the overriden toString() method with the lowest value of price property
        let price = this.getHighestPrice();
        let cheapestDrink = {};
        for (const drink of this.drinks) {
            if (drink.getPrice() < price) {
                price = drink.getPrice();
                cheapestDrink = drink;
            }
        }
        return cheapestDrink.toString();
    }
    buyDrink(name) {
        // returns a string in the format of the overriden toString() method
        const drink = this.drinks.find((drink) => drink.getName() === name);
        return drink.toString();
    }
    getCount() {
        // returns the number of drinks, available in the vending machine
        return this.drinks.length;
    }
    report() {
        const availableDrinks = this.drinks
            .map((drink) => {
            return drink.toString();
        })
            .join("\n");
        return availableDrinks;
    }
}
exports.VendingMachine = VendingMachine;
//# sourceMappingURL=VendingMachine.js.map