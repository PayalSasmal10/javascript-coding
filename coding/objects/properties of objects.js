myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

console.log(myObj.name);
console.log(myObj.cars.car3);
console.log(myObj.cars["car2"]);
console.log(myObj["cars"]["car1"]);

delete myObj["cars"];
console.log(myObj.cars.car3);

