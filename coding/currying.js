// advanced way to invoke the function. we can currying our function in 2 ways. we can borrow the
// feature of an object/function - this is the use case of currying.

// 1.using bind
function multiply(x, y) {
  console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
// let multiplyByTwo = multiply.bind(this,5, 2); if we are using this then the down multiplyByTwo will be ignored.
multiplyByTwo(3);

// 2. using closure

let multiplyCloser = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplying = multiplyCloser(7, 8);
multiplying(6);

// infinite currying

function add(x) {
  return function (y) {
    if (y) return add(x + y);
    return x;
  };
}

console.log(add(4)(5)(1)());

// infinite currying example-2

function mul(x){
  return function(y){
    if (y) return mul(x*y);
    return x;
    
  }
}

function mul(x) {
  return function(y){
    if(y) return mul(x*y);
    return x;
  }
}

console.log(mul(2)(3)(4)());

