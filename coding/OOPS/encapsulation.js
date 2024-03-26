// encpsulation cant be implemented directly as we can't directly hide using
// any keyword like private in object using #.
// encapsulation can't be done in js only partially can be done.
const user = {
  firstName: "Payal",
  secondName: "Sasmal",
  age: "29",
  getFullYear : function(){
    return new Date().getFullYear() - this.age;
  }
};

console.log(user.getFullYear());