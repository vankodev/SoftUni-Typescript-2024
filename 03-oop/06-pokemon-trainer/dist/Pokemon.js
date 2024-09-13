"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    constructor(name, element, health) {
        this.name = name;
        this.element = element;
        this.health = health;
    }
    getHealth() {
        return this.health;
    }
    setHealth(health) {
        this.health = health;
    }
    getElement() {
        return this.element;
    }
    takeDamage(damage) {
        this.health = this.health - damage;
        return this.health;
    }
}
exports.Pokemon = Pokemon;
//# sourceMappingURL=Pokemon.js.map