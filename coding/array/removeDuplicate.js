// Can you write a function in JavaScript to remove duplicate elements from an array?

const arr = [12, 23, 12, 23, 2, 2, 45, 4, 5, 45];
let newArr = [];
function removeDuplicates(arr){
for(let i of arr){
  if(!newArr.includes(i)){
    newArr.push(i);
  }  
 }
 
 return newArr;
}

console.log(removeDuplicates(arr));