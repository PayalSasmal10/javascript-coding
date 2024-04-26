/* Question 5: Can you write a function in JavaScript to calculate the cumulative sum of an array? 
Input array => 10, 15, 20, 25, 30. 
Output array => 10, 25, 45, 70, 100.
*/
let arr = [10, 15, 20, 25, 30];

function cumulativeArray(arr){
    let sum =0;
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(i>0){
            sum = sum + arr[i];
            result.push(sum)
        }else{
            console.log(i);
            result.push(arr[i]);
            sum = arr[i];
        }
    }
    return result;
}

console.log(cumulativeArray(arr));