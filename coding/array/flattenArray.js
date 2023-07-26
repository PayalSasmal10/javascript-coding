let arr = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8, 9],
    [10, [11, 12], 13, 14, 15]
];
let depth = 2;
let flatArray = arr.flat();
console.log(flatArray);
let newFlatArray = arr.flat(depth);
console.log(newFlatArray);