//Normal way
const arr = [2, 4, 6, 7, 8, 10, 70];

arr.forEach((item, index) => {
    console.log(item + " is on " + index + " index");
});
// console.log(arr);

console.log("Polyfill started.......................");
// Polyfill
Array.prototype.custForEachFn = function(callbackFn){
    let result = "";
    for(let i=0; i<this.length; i++){
        result = callbackFn(this[i], i);
    }
    return result;
}


arr.custForEachFn(function(item, index) {
    console.log(item + " is on " + index + " index")
})