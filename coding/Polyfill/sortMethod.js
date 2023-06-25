const arr = [8, 4, 10, 3, 1, 70, 90, 20];

arr.sort((a, b) => {
    console.log("a :", a);
    console.log("b :", b);
    if(a < b){
        return -1; // sort a before b
    }
    if(a > b) {
        return 1; // sort a after b
    }
    return 0;
});
console.log(arr);


console.log("polyfill.......................................");

Array.prototype.custSort = function (callBackFn) {

}

arr.custSort()