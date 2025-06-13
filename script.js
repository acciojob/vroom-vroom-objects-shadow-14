class Car {
	constructor(make, model) {
		this._make = make;
		this._model = model;
	}

	getMakeModel() {
		return `${this._make} ${this._model}`;
	}

	get make() {
		return this._make;
	}

	get model() {
		return this._model;
	}
}

class SportsCar extends Car {
	constructor(make, model, topSpeed) {
		super(make, model);
		this._topSpeed = topSpeed;  // Use _topSpeed for consistency
	}

	getTopSpeed() {
		return this._topSpeed;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
