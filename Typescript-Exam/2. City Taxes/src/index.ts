interface City {
    name: string;
    population: number;
    treasury: number;
    taxRate: number;
    collectTaxes(): void;
    applyGrowth(percentage: number): void;
    applyRecession(percentage: number): void;
}

function cityTaxes(name: string, population: number, treasury: number): City {
    const taxRate: number = 10;

    const city: City = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: taxRate,

        collectTaxes() {
            const taxes = Math.floor(this.population * this.taxRate);
            this.treasury += taxes;
        },

        applyGrowth(percentage: number) {
            const growth = Math.floor((percentage / 100) * this.population);
            this.population += growth;
        },

        applyRecession(percentage: number) {
            const recession = Math.floor((percentage / 100) * this.treasury);
            this.treasury -= recession;
        },
    };

    return city;
}

// INPUT 1
// const city = cityTaxes('Tortuga', 7000, 15000);
// console.log(city);

// INPUT 2
const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

// city.applyRecession(2);
// console.log(city.treasury);
