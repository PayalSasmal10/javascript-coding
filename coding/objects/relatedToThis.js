// all about this
const example5 = {
    name: "Payal",
    details: () =>{
      console.log("First", this.name);
      function printDetails() {
        console.log("inner", this.name);
      }
      printDetails();
    }
  };
  example5.details();

  // 2nd example with regular function- always refer to the context of the function
  // being called in regular function

  const myObj = {
    myMethod: function () {
      console.log(this)
    },
  }
myObj.myMethod();

const myObj1 = {
    myMethod: () => {
      console.log(this)
    },
  }
  myObj1.myMethod()


  // 3rd way to check
  const myObject = {
    fullname: 'John Doe',
    sayName: () => {
      return `My name is ${this.fullname}`
    },
  }
console.log(myObject.sayName());  

const myObject1 = {
    fullname: 'John Doe',
    sayName: function () {
      return `My name is ${this.fullname}`
    },
  }
  console.log(myObject1.sayName());
  const test1 = myObject1.sayName;
  console.log(test1());