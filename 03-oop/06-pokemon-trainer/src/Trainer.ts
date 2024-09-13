import { Pokemon } from "./Pokemon";

export class Trainer {
    private name: string;
    private badges: number = 0;
    private pokemons: Pokemon[];

    constructor(name: string) {
        this.name = name;
        this.badges = 0;
        this.pokemons = [];
    }

    getName(): string {
        return this.name;
    }

    getBadges(): number {
        return this.badges;
    }

    setBadges(badges: number): void {
        this.badges = badges;
    }

    getPokemons(): Pokemon[] {
        return this.pokemons;
    }

    addPokemon(pokemon: Pokemon): void {
        this.pokemons.push(pokemon);
    }

    hasPokemon(element: string): boolean {
        const foundPokemons = this.pokemons.some(pokemon => pokemon.getElement() === element);
        return foundPokemons;
    }

    removePokemon(pokemon: Pokemon): void {
        const index = this.pokemons.indexOf(pokemon);
        if (index > -1) {
            this.pokemons.splice(index, 1);
        }
    }
    
    catchPokemon(pokemon: Pokemon): void {
        this.pokemons.push(pokemon);
    }

    // method to boost pokemon
    
    boostPokemon(pokemon: Pokemon, healthBoost: number): void {
        const index = this.pokemons.indexOf(pokemon);
        if (index > -1) {
            let currentHealth = pokemon.getHealth();
            currentHealth += healthBoost;
            pokemon.setHealth(currentHealth);
        }
    }

    addBadge(): void {
        this.badges = this.badges + 1;
    }

    hitPokemons(damage: number): void {
        // delete the falled pokemons
        this.pokemons = this.pokemons.filter(pokemon => {
            const currentHealth = pokemon.takeDamage(damage);
            return currentHealth > 0;
        });
    }
}