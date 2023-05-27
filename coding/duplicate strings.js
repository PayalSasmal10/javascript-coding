

function findDuplicateString(str){
    let obj ={};
    for (let i=0; i<str.length; i++){
        if(str[i] in obj){
            obj[str[i]] += 1; 
        }else{
            obj[str[i]] = 1;
        }
    }
    return obj;
}



console.log(findDuplicateString([1, 4, 4, 2, 1]));

arr = [3,2, 1, 1, 1,5,6,3,8]

const removeDuplicate = (arr) => [... new Set(arr)];
console.log(removeDuplicate(arr));