// MAP is a new DS which is introduced in ES6. It is returned a key value data.

let m = new Map([
    [1,2],
    [2,3],
    [3,4],
    [4,5]
]);

console.log(m);
m.set("newData", "newValue");
console.log(m);
console.log(m.has(1));
console.log(m.has("test"));
console.log(m.delete(1));
console.log(m);
m.clear();
console.log(m);

let test = new Map();
console.log("test", test);