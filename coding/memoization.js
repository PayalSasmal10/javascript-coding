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

function memoization(func){
    let cache = {};
    return function(...args){
        let n = args[0];
        if(n in cache){
            return cache[n];
        }else{
            cache[n] = func(n);
            return cache[n];
        }

    }
}

console.time();
const efficiency = memoization(calc);
console.log(efficiency(6));
console.timeEnd();

console.time();
console.log(efficiency(6));
console.timeEnd();