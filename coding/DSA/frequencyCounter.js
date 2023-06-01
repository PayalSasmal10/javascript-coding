// write a function called same . which accepts two arrays, The function should return true if every
// value in the array has it's corresponding value squared in the second array. The frequency
// of values must be the same.
/*
[1,2,3], [4, 1, 9] // true
[1, 2, 3] , [1, 9] // false
[1, 2, 1] , [4, 4, 1] // false (must be same frequency)
*/

// Time complexity is O(n^2) beacuse indexOf is iterating whole array. which is nested loop.
function same (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for(let i =0; i< arr1.length; i++){
        // find out the index from array2
        const correctIndex = arr2.indexOf(arr1[i] ** 2);
        console.log("indexof", correctIndex);
        if(correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex, 1);[4]
    }
    return true;
}

arr1 = [1, 2, 1];
arr2 = [1, 4, 1];

console.log(same(arr1, arr2));

console.log("REfactor code starting............................");
// Refactor the code
function same1 (arr1, arr2){
    // console.log("test");
    if(arr1.length !== arr2.length){
        // console.log("here");
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1){
        // console.log("val:", val);
        // console.log("frequencyCounter1:", frequencyCounter1[val]);
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;// {1:2, 2:1}
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 // {1:1, 4: 2}
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        // console.log("key", key);
        if(!(key ** 2 in frequencyCounter2)){ // 1 in 1 
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){ // 1 !== 2, 2
            return false;
        }
    }
    return true;

}

arr3 = [1, 2, 3];
arr4 = [4, 1, 9] ;


console.log(same1(arr3, arr4));