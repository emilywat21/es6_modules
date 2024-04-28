
import {Car} from './car.js';

export class Wishlist {
    list = [];
    nextId = 0;

    add(make, model, year) {
        let myCar = new Car(++this.nextId, make, model, year);
        this.list.push(myCar);
    }

remove(carId) {
    this.list = this.list.filter((myCar) => myCar.id != carId);
}
}
