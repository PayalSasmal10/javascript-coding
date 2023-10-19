"use strict";
const log = function () {
  console.log(this);
};

log();

const foo = {
  log
};

foo.log();

const b = foo.log;

b();

new log();

class abc {};
typeof abc;
let arr = [];
for(let i=0; i<1000; i++) {
    // code here
}

// Now I want to add a function printName() to all the objects created above
//  How can I do ?

function printName() {
  ///
}