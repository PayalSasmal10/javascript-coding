let myweakmap = new WeakMap();
console.log(myweakmap);
let obj = {};
myweakmap.set(obj, "newData");
console.log(myweakmap);
console.log(myweakmap.get(obj));
console.log(myweakmap.has(obj));
console.log("Delete the weak map", myweakmap.delete(obj));
console.log(myweakmap);
let weakMap1 = new WeakMap();
let obj1 = {};