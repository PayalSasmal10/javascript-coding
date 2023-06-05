// write a function to count the unique values
// [1,2,2,1,3,5,4]

// THis is one of the way and when array is not accesnding order.
// object.keys()- O(n), for loop- O(n), so time - O(n). space o(n)
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


// second way if array is accending order. two pointer

function countUniqueValuesTwoPointer(arr1){
    if(arr1.length === 0) return 0;
    let i = 0;
    for(let j=1; j<arr1.length; j++){
        if(arr1[i] !== arr1[j]){
            i++;
            arr1[i] = arr1[j];
        }
    }
    return i + 1;
}




const arr1 = [1,2,2,3,3,4,5];
console.log(countUniqueValuesTwoPointer(arr1));
