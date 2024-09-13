export class Pokemon {
    private name: string;
    private element: string;
    private health: number;

    constructor(name: string, element: string, health: number) {
        this.name = name;
        this.element = element;
        this.health = health;
    }

    getHealth(): number {
        return this.health;
    }

    setHealth(health: number): void {
        this.health = health;
    }

    getElement(): string {
        return this.element;
    }

    takeDamage(damage: number): number {
        this.health = this.health - damage;
        return this.health;
    }
}