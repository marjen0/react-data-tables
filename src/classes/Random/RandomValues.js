class RandomValues {
    static cubicCapacity(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    static index(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    static mileage(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    static fuelAverage(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    static year() {
        return Math.floor(Math.random() * (2020 - 1995) ) + 1995;
    }
    static fuelType() {
        const fueltype = ['Petrol', 'Diesel']
        const index = Math.round(Math.random());
        return fueltype[index];
    }
    static HP(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    static maxSpeed(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    
}

export default RandomValues;