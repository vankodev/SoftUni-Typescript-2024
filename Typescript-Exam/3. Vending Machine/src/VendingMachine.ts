import { Drink } from "./Drink";

export class VendingMachine {
    private buttonCapacity: number;
    private drinks: Drink[];

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [] as Drink[];
    }

    addDrink(drink: Drink): void {
        // adds an entity to the collection of Drinks, if the capacity allows it.

        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }

    removeDrink(name: string): boolean {
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

    getLongest(): string {
        //returns the Drink as string in the format of the overriden toString() method with the biggest value of volume property

        let volume: number = 0;
        let biggestDrink = {} as Drink;

        for (const drink of this.drinks) {
            if (drink.getVolume() > volume) {
                volume = drink.getVolume();
                biggestDrink = drink;
            }
        }

        return biggestDrink.toString();
    }

    getHighestPrice(): number {
        let highestPrice: number = 0;

        for (const drink of this.drinks) {
            if (drink.getPrice() > highestPrice) {
                highestPrice = drink.getPrice();
            }
        }

        return highestPrice;
    }

    getCheapest(): string {
        // returns the Drink as string in the format of the overriden toString() method with the lowest value of price property

        let price: number = this.getHighestPrice();
        let cheapestDrink = {} as Drink;

        for (const drink of this.drinks) {
            if (drink.getPrice() < price) {
                price = drink.getPrice();
                cheapestDrink = drink;
            }
        }

        return cheapestDrink.toString();
    }

    buyDrink(name: string): string {
        // returns a string in the format of the overriden toString() method

        const drink = this.drinks.find((drink) => drink.getName() === name);

        return drink.toString();
    }

    getCount(): number {
        // returns the number of drinks, available in the vending machine

        return this.drinks.length;
    }

    report(): string {
        const availableDrinks = this.drinks
            .map((drink) => {
                return drink.toString();
            })
            .join("\n");
        return availableDrinks;
    }
}
