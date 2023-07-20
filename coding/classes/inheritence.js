class Car {
    constructor(color="white"){
        this.color = color;
    }
    colors() {
        return "color is " + this.color;
    }
}

class NewCar extends Car{
    constructor(brand, mileage, color){
        super(color);
        this.brand = brand;
        this.mileage = mileage;
    }
    get show(){
        return this.brand + " is a having " + this.mileage + " , " + this.colors();
    }
}

const objsFord = new NewCar("Ford", "1234556");
console.log(objsFord.show);