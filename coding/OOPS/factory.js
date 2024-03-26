// factory method allow us to prevent duplicay in the code.
// for multiple user we have to create multiple users like user1 and user2. 
// we will create  common function
function createUser(firstName, secondName, age) {
  const user = {
    firstName,
    secondName,
    age,
    getFullYear(){
      return new Date().getFullYear() - user.age;
    },
  }
  return user;
};

const user1 = createUser("Payal", "Sasmal", 29);
const user2 = createUser("Oli", "Sasmal", 28);
console.log(user1.getFullYear());
console.log(user2.getFullYear());