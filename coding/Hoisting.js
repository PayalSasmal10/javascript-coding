var a = 10;
  {   
    console.log(a);
    var a = -10;
    console.log(a);
  }
let b = a;
  {
    let b = -20;
  }

console.log(b)

let x = 22;
let y = "Hello";
console.log("x+y ->", x+y);
console.log("x-y ->", x-y);
let z = "3";
console.log("after reassiging the y", x-z);

function foo() {
    let variable1;
    let variable2;

    variable1 = 5;
    variable2 = 6;
    return variable1 + variable2;
}

console.log(foo());


var variable = 10;
(()=>{
   console.log(variable);
   var variable = 20;
//    console.log(variable);
})();

console.log("var Example.........................................");

// var block and functional scope

var test = 90;
if(test){
    console.log(test);
    var test = "hi";
    console.log(test);
}

console.log("outside block scope", test);

// so the var is having functional scope not the block scope
// redeclaring won't work like clousure. 
// if not re-declaring then work like clouser
var test1 = 100;
function abc () {
    console.log(test1);
    var test1 = "hello";
    console.log(test1);
}

abc();

var variable = 10;
(()=>{
   console.log(variable);   // 10
   variable = 20;
   console.log(variable);   // 20
})();

console.log("let examples.........................................");
// let block scope

let letEx = 90;
if(letEx){
    // console.log(letEx); // Ref Error
    let letEx = "hi";
    console.log(letEx);
}

let letFunc = 100;
function abc () {
    // console.log(letFunc); // Ref ERror- before intializing can't access
    let letFunc = "hello";
    console.log(letFunc);
}

abc();



console.log("const examples.........................................");
// const block scope

const constEX = 90;
if(constEX){
    // console.log(constEX); // Ref Error
    const constEX = "hi";
    console.log(constEX);
}

const constFunc = 100;
function abc () {
    // console.log(constFunc); //Ref Error
    const constFunc = "hello";
    console.log(constFunc);
}

abc();

const validInput = ["first", 1, "second", 2];
if(validInput.includes(input)){
  someFunction()
}