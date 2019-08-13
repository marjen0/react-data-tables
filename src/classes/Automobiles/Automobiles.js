import Automobile from '../Automobile/Automobile';
import RandomValues from '../Random/RandomValues';

const manufacturers = {
    Volvo: ['S40', 'V40', 'V50', 'C70', 'V70', 'S80', 'S60', 'S90', 'XC90'],
    BMW: ['235', '130', '320', '325', '328', '330', '335', '528', '530', '730', '740', 'X5', 'X6', 'X7'],
    Mercedes_Benz: ['GL450', 'ML320', 'E320', 'E220', 'GLS350', 'GLS450', 'E55', 'E63', 'CLS500', 'S500'],
    Audi: ['A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'S6', 'S7', 'Q5', 'Q7', 'Q8'],
    Ford: ['Focus', 'S-max', 'Mondeo', 'Mustang', 'Galaxy', 'Fiesta', 'Kuga'],
    Toyota: ['Camry', 'Avensis', 'Auris', 'Yaris', 'RAV4']
}
let automobiles = [];

for (const make in manufacturers) {
    manufacturers[make].forEach(model => {
        const automobile = new Automobile(
            make,
            model,
            RandomValues.year(), 
            RandomValues.fuelType(),
            RandomValues.cubicCapacity(1,6),
            RandomValues.HP(80,600),
            RandomValues.maxSpeed(180,320),
            RandomValues.mileage(0,600000),
            RandomValues.fuelAverage(4,30)
        );
        automobiles.push(automobile);
    })
}
class Automobiles {
    
    constructor() {
        this.automobiles = automobiles;
    }

}

export default Automobiles;