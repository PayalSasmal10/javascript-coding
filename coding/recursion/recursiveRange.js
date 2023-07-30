// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21 - 1 + 2 + 3 + 4 + 5 + 6
// recursiveRange(10) // 55 

function recursiveRange(num){
    if(num === 1){
        return 1;
    }
    return num + recursiveRange(num-1);
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));