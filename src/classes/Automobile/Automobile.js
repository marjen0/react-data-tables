class Automobile {
    constructor(make, model, year, fuelType, cubicCapacity, HP, maxSpeed, mileage, fuelAverage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.fuelType = fuelType;
        this.cubicCapacity = cubicCapacity;
        this.HP = HP;
        this.maxSpeed = maxSpeed;
        this.mileage = mileage;
        this.fuelAverage = fuelAverage;
    }
    fullModel() {
        return `${this.make} ${this.model}`;
    }
    
}
export default Automobile;