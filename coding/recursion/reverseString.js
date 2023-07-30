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