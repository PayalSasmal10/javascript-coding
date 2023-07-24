let arr = [600, 400, 700, [900, 300], 100, 50, 4];

let arr1 = arr.slice();
arr1[0] = 1000;
arr1[3][0] = 800;
console.log(arr);
console.log(arr1);