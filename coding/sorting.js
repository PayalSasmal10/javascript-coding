// sort function normally convert the number to string using UTF-16 code. so we
// use compare Function to get the number value.

function compareFunction(a, b){
    return a-b;
}

const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

mixedNumericArray.sort();
console.log(mixedNumericArray);
mixedNumericArray.sort(compareFunction);
console.log(mixedNumericArray);