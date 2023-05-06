// simple closure
function x() {
  var a = 8;
  function y() {
    console.log(a);
  }
  y();
}

x();

// advanced closure: z function stil remembering it's lexical environment and thati is called closure
function x1() {
  var a = 9;
  function y() {
    console.log(a);
  }
  return y;
}
z = x1();
console.log(z);
z();

// 3rd example
console.log("...............................");
function x2() {
  var a = 9;
  function y() {
    console.log(a);
  }
  a = 900;
  return y;
}
z1 = x2();
console.log(z1);
z1();

// 4th example

function b() {
  function x3() {
    var a = 9;
    function y() {
      console.log(a);
    }
    a = 900;
    return y;
  }
  z1 = x2();
  console.log(z1);
  z1();
}
