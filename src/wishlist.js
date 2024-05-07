
import Car from "./car";

class Wishlist {
    constructor() {
    this.list = [];
    this.nextId = 0;
    }

    add(make, model, year) {
        let myCar = new Car(++this.nextId, make, model, year);
        this.list.push(myCar);
    }

remove(carId) {
    this.list = this.list.filter((myCar) => myCar.id != carId);
}
}
export default Wishlist;