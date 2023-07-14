// sort function normally convert the number to string using UTF-16 code. so we
// use compare Function to get the number value.

function compareFunction(a, b) {
  return a - b;
}

const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

mixedNumericArray.sort();
console.log(mixedNumericArray);
mixedNumericArray.sort(compareFunction);
console.log(mixedNumericArray);

const mixedNumericArray1 = ["80", "9", "700", 40, 1, 5, 200];
mixedNumericArray1.join()
let newArray = mixedNumericArray1.sort().sort((a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a > b ? 1 : -1
  }else{
    return 0;
  }
});

console.log(newArray);
