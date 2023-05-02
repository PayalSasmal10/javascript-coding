// Memoization in javascript is a optimizing technique that can be used to reduce
// time comsuming to calculate the value from previous input and store the value to cache
// and return the value from it.

let sum = 0;
function calc(n){
    for(let i=0; i<=n; i++){
        sum += i;
    }
    return sum;
}

console.time();
console.log(calc(6));
console.timeEnd();