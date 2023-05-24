

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

console.log(findDuplicateString("canaada"));

arr = [3,2, 1, 1, 1,5,6,3,8]

const removeDuplicate = (arr) => [... new Set(arr)];
console.log(removeDuplicate(arr));