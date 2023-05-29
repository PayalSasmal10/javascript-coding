const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
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
