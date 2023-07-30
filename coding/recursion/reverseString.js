// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// nowmal way using iteratively
function iterativeWay(str){
    let newStr = "";
    for(let i=str.length-1; i>=0; i--){
        newStr += str[i];
    }
    return newStr;
}

console.log(iterativeWay('awesome'));

// using recursion
function reverseRecursion(str){
    if(str.length <=1) return str;
    return reverseRecursion(str.slice(1)) + str[0];
}