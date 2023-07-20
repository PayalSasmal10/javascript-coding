const arr = [3, 5, 2, 1, 1, 2, 3, 4, 2, 5, 5];
const uniqueArray = [...new Set(arr)];
console.log(uniqueArray);

// not using a set method. using only filter method
let uniqueArray1 = arr.filter((val, index) => arr.indexOf(val) === index);
console.log(uniqueArray1)
