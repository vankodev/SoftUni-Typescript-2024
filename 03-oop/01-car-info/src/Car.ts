export class Car {
    public _brand: string;
    public _model: string;
    public _horsePower: number;

    constructor(brand: string, model: string, horsePower: number) {
        this._brand = brand;
        this._model = model;
        this._horsePower = horsePower;
    }

    public get brand(): string {
        return this._brand;
    }

    public get model(): string {
        return this._model;
    }

    public get horsePower(): number {
        return this._horsePower;
    }

    public set brand(brand: string) {
        this._brand = brand;
    }

    public set model(model: string) {
        this._model = model;
    }

    public set horsePower(horsePower: number) {
        this._horsePower = horsePower;
    }

    public toString() {
        return `The car is: ${this.brand} ${this.model} – ${this.horsePower} HP.`;
    }
}