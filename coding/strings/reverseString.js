const str = "payal";

const reverstring = str => str.split('').reverse().join('');
console.log(reverstring(str));


// reverse without reverse method

function reverseWithOutMethod(str){
    let result = "";
    for(let i of str){
        result = i + result;
    }
    return result;
}

console.log(reverseWithOutMethod("Hi there"));

// split convert a string to an array. 
// and join convert the array to a string.
