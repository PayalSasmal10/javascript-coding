
function findAVariable(arr, targetValue){
    arr.sort((a,b) => (a-b));

    let left = 0;
    let right = arr.length - 1;
    while(left<right){
        let sum = arr[left] + arr[right];
        if(sum === targetValue){
            return "Found";
        }
        else if(sum > targetValue){
            right--
        }else{
            left++;
        }
        
    }
    return "Not Found"
}

const arr = [4, 1, -9, 3, 5, 30, 90, 8];
const targetValue = 15;
console.log(findAVariable(arr, targetValue));
