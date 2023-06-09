// write a function called sumzero which accepts a sorted array of integers. THe function should find
// the first pair where the sum is 0. Return and array that includes both values that sum to zero
// or undefined if a pair does not exist.

// o(n^2) ways. space o(1)
function sumZero(arr){
    for(let i=0; i<arr.length; i++){
        for(let j =0; j<arr.length; j++){
            if (arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
    return "undefined";
}

const arr = [1, 2, 3];
const arr1 = [-3, -2, -1, 0, 1, 2, 3];
console.log(sumZero(arr));
console.log(sumZero(arr1));

console.log("Better way to do it........................................");
// Better way- O(n) time complexity and o(1) space complexity
function sumToZero(arr){
   let left = 0;
   let right = arr.length - 1;
   while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
        return [arr[left], arr[right]];
    }
    else if(sum > 0){
        right--;
    }else{
        left++;
    }
   }
   return "undefined";

}

console.log(sumToZero(arr));
console.log(sumToZero(arr1));