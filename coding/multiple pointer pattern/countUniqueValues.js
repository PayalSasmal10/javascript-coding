// write a function to count the unique values
// [1,2,2,1,3,5,4]

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let newTest = {};
    for(let i=0; i<arr.length; i++){
        if(arr[i] in newTest){
            newTest[arr[i]] += 1;
        }else{
            newTest[arr[i]] = 1;
        }
    }
    return Object.keys(newTest).length;
}

const arr = [];
console.log(countUniqueValues(arr));