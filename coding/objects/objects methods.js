const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    today: new Date(),
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName); // return function defination
console.log(person.fullName()); // return firstName and LastName of the object.
person.name = function () {
    return "Name : " + this.firstName; // Name : John
}

console.log(person.name);
console.log(person.name());

// How to display an object

console.log(person); //  it returns only objects

console.log(person.name() + " " + person.id);

//Displaying the object in a loop.
let s = "";
for(let x in person){
    s += person[x] + " ";
}
console.log(s);

// using objects.values()

console.log("using objects.values()......................");

const myArray = Object.values(person);
console.log(myArray);

// using JSON.stringify

console.log("using JSON Stringify..................................");

let myString = JSON.stringify(person);
console.log(myString);

// stringify cant stringify a function. It can be overcome using stringify.

person.fullName = person.fullName.toString();

let myString1 = JSON.stringify(person);
console.log(myString1);

// stringify an array- we will see in array section.
