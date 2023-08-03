// A function can do any operation and we can pass infinite numbers of parameters 

function currying(operator, x){
    return function (y){
        if(y) return currying(operator, eval(`${x} ${operator} ${y}`));
        return x;
    }
}

console.log(currying('+', 2)(3)(4)());
console.log(currying('*', 2)(3)(4)());
console.log(currying('-', 2)(3)(4)());