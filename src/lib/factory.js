const warehouse = require("./warehouse");

function CarFactory(power = 10) {
    this.power = power;
    this.warehouse = warehouse;
    this.produceCar = function(color="red", wheels = 4, engine = false) {
        if(this.power < 2) {
            return null
        } else {
            const newCar = {
                id: this.warehouse.nextIdentifier++,
                color,
                wheels,
                engine
            }
            this.warehouse.createdCars.push(newCar)
            this.power -= 2;
            return newCar;
        }
    }
    this.addEnergyPower = function(boost) {
        this.power += boost;
    }
    this.changeCarColor = function(car, color='blue') {
        if(this.power < 1) {
            return null
        } else {
            car.color = color
            this.power -= 1;
            return car
        }
        
    }
}

module.exports = CarFactory;


