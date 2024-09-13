"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(brand, model, horsePower) {
        this._brand = brand;
        this._model = model;
        this._horsePower = horsePower;
    }
    get brand() {
        return this._brand;
    }
    get model() {
        return this._model;
    }
    get horsePower() {
        return this._horsePower;
    }
    set brand(brand) {
        this._brand = brand;
    }
    set model(model) {
        this._model = model;
    }
    set horsePower(horsePower) {
        this._horsePower = horsePower;
    }
    toString() {
        return `The car is: ${this.brand} ${this.model} – ${this.horsePower} HP.`;
    }
}
exports.Car = Car;
//# sourceMappingURL=Car.js.map