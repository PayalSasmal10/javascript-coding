
function findTheOccurances(arr){
    let cache = {};
    for(num of arr){
        cache[num] = cache[num] ? cache[num] + 1: 1;
    }
    return cache;
}

const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
console.log(findTheOccurances(arr));