function isAlphanumeric(str){
    return str.match(/^[A-Za-z0-9]+$/) !== null;
}

console.log(isAlphanumeric('FTabC3'));
console.log(isAlphanumeric('FT&abC3'));
console.log(isAlphanumeric(""));
console.log(isAlphanumeric("abc123"));