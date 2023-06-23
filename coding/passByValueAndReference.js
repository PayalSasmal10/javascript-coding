// primitive data types are pass by value
let a = 70;
let b = a;

console.log(a);
console.log(b);
a = 90;
console.log("afte changing value", a);
console.log("afte changing value", b);

// non-primitive data types are pass by reference

let x = {name: "Payal", age: 28};
let z = x;

x.name = "Oli";

console.log(x);
console.log(z);