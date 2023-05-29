/*
Write a function prototypeCount(obj) that takes an object obj as input and returns the count 
of prototype properties present in the object. Prototype properties are properties inherited 
from the object's prototype chain.
*/

const person = {
    name: 'John',
    age: 30
  };


function prototypeCount(obj){
    let count = 0;

    for(let prp in obj){
        console.log("prp", prp);
    }
}
  
const prototypePerson = Object.create(person);
prototypePerson.job = 'Engineer';

console.log(prototypeCount(prototypePerson)); // Output: 2
  