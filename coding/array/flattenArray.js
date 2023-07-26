let arr = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8, 9],
    [10, [11, [0], 12], 13, 14, 15]
];
// using flat method in an array
console.log("using flat method.......................................");
let depth = 3;
let flatArray = arr.flat();
console.log(flatArray);
let newFlatArray = arr.flat(depth);
console.log(newFlatArray);

// using concat and apply.
console.log("using concat and apply....................................");
let flattenArray1 = [].concat.apply([], arr);
console.log(flattenArray1);

// using spread operator
console.log("using spread operator....................................");
let flattenArray2 = [...[...arr]];
console.log(flattenArray2);

// using reduce method
console.log("using reduce method....................................");
let flattenArray3 = arr.reduce((initV, item) => initV.concat(item));
console.log(flattenArray3);

console.log("using recurssion method....................................");
// using recursion.
function fetchArray(arr){
    let flatend = [];
    for(let item of arr){
        if(Array.isArray(item)){
            flatend = flatend.concat(fetchArray(item));
        }else{
            flatend.push(item)
        }
    }
    return flatend;
}



console.log(fetchArray(arr));