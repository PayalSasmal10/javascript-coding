// abstraction means hide the complexity
const user = {
  firstName: "Payal",
  secondName: "Sasmal",
  age: "29",
};

function getFullYear(){
  return new Date().getFullYear() - user.age;
}
console.log(getFullYear());