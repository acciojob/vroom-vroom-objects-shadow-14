// Complete the js code
class Car{
	constructor(make,model){
		this._make = make;
		this._model = model;
	}
	getMakeModel(){
		return `${this._make} ${this._model}`;
	}
}

class SportsCar extends Car {
	constructor(make,model,topSpeed){
		super(make,model);
		this.topspeed = topspeed;
	}
	getTopSpeed(){
		return this.topspeed;
	}
	get make(){
		return this._make;
	}
	get model(){
		return this._model;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
