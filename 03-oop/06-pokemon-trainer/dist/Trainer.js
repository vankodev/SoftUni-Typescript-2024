"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trainer = void 0;
class Trainer {
    constructor(name) {
        this.badges = 0;
        this.name = name;
        this.badges = 0;
        this.pokemons = [];
    }
    getName() {
        return this.name;
    }
    getBadges() {
        return this.badges;
    }
    setBadges(badges) {
        this.badges = badges;
    }
    getPokemons() {
        return this.pokemons;
    }
    addPokemon(pokemon) {
        this.pokemons.push(pokemon);
    }
    hasPokemon(element) {
        const foundPokemons = this.pokemons.some(pokemon => pokemon.getElement() === element);
        return foundPokemons;
    }
    addBadge() {
        this.badges = this.badges + 1;
    }
    hitPokemons(damage) {
        // delete the falled pokemons
        this.pokemons = this.pokemons.filter(pokemon => {
            const currentHealth = pokemon.takeDamage(damage);
            return currentHealth > 0;
        });
    }
}
exports.Trainer = Trainer;
//# sourceMappingURL=Trainer.js.map