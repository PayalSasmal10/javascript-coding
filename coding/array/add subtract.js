
const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
let addArray = arr.reduce((initV, item) => initV + item, 0);
let subArray = arr.reduce((initV, item) => initV - item, 0);
console.log(addArray);
console.log(subArray);
