var a = 10;
{
    var a = -10;
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
    variable1, variable2;

    variable1 = 5;
    varaible2 = 6;
    return variable1 + variable2;
}

console.log(foo());