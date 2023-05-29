const arr = [1, 2, 3, 5, 6];

const setsArray = new Set(arr);

console.log(setsArray.size);

setsArray.add(9);
setsArray.add(10);
setsArray.add(90);

console.log(setsArray);

// forEach
console.log("ForEach...................................");
const forEachEx = arr.forEach((data) => data);
console.log(forEachEx);