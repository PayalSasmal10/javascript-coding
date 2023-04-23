// advanced way to invoke the function. we can currying our function in 2 ways

// 1.using bind
function multiply(x,y){
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);