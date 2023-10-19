// 2nd one
var obj = {
  a: {
    b: {
      c: 12,

      j: false
    },

    k: null
  }
};
const findPath = (obj, path) => {
  //implement your code
  let findkeyFromPath = path.split(".");
  for(let key of findkeyFromPath){
    if(obj.hasOwnProperty(key)){
        obj = obj[key];
    }else return undefined;
  }
  return obj;
};

findPath(obj, "a.b.c"); // 12

console.log(findPath(obj, "a.b.c")); // 12

console.log(findPath(obj, "a.b")); // {c: 12, j: false}

console.log(findPath(obj, "a.b.c.d.e")); // undefined

console.log(findPath(obj, "a.b.j")); //false

console.log(findPath(obj, "a.k")); //null

"use strict";
const log = function () {
  console.log(this);
};

log();