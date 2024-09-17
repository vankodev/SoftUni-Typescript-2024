import { Cloth } from "./Cloth";

export class Magazine {
    // добра практика е всичко да се прави private и ако се наложи тогава public
    private type: string;
    private capacity: number;
    private clothes: Cloth[];

    constructor(type: string, capacity: number) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }

    addCloth(cloth: Cloth): void {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }

    removeCloth(color: string): boolean {
        const index = this.clothes.findIndex((c) => c.color === color);

        if (index !== -1) {
            this.clothes.splice(index, 1);
            return true;
        }

        return false;
    }

    getSortedClothes(): Cloth[] {
        const sortedClothes = this.clothes.sort((a, b) => a.size - b.size);
        return sortedClothes;
    }

    getSmallestCloth(): Cloth {
        if (!this.clothes.length) {
            return {} as Cloth;
        }

        if (this.clothes.length === 1) {
            return this.clothes[0];
        }

        const smallesCloth = this.getSortedClothes()[0];
        return smallesCloth;
    }

    getCloth(color: string): Cloth {
        const cloth = this.clothes.find((c) => c.color === color);
        const play: number = 3;
        let dugle: number = 56;
        return cloth;
    }

    getClothCount(): number {
        const count = this.clothes.length;
        return count;
    }

    report(): string {
        //print the clothes in ordered by Size

        const sortedClothes: Cloth[] = this.getSortedClothes();
        const clothesForReport = sortedClothes.map((c) => c.toString()).join("\n");

        const report = `${this.type} magazine contains:\n${clothesForReport}`;
        return report;
    }
}
