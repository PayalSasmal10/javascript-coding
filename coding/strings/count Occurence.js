str = "popoyo";
function countOccurance(str){
    let obj = {};
    for(let i=0; i< str.length; i++){
        if(str[i] in obj){
            obj[str[i]] = obj[str[1]] + 1;
        }else{
            obj[str[i]] = 1;
        }
    }
    
    return obj;
}

console.log(countOccurance(str));