let name1 = {
    fname: "Payal",
    lname: "Sasmal"
}


let printFunction = function (home, state) {
    console.log(this.fname, this.lname + " from " + home + " " + state);
}

let name2 = {
    fname: "Oli",
    lname: "Sasmal"
}

// call function- it's brrow the feature from other functions.
printFunction.call(name1);
printFunction.call(name2);
printFunction.call(name1, "howrah", "westbengal");
printFunction.call(name2, "howrah", "westbengal");

// apply
printFunction.apply(name1, ["test", "test apply"]);
printFunction.apply(name2, ["test1", "test1 apply"]);

console.log("..........................................");

// bind
let printBindFunction = printFunction.bind(name1, "testing bind", "from testing bind");
printBindFunction();


console.log("..................................................");
const printData = function (lastname) {
    console.log(this.name + " " + lastname + " is" + " from " + this.address);
  }
  
  const obj = {
    name : "Payal",
    address: "Howrah"
  }
  
  printData.call(obj, "Sasmal");
  printData.apply(obj, ["Sasmal1"]);
  const test = printData.bind(obj, "sasmal2");
  test();