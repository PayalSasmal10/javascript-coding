let a = c => c;
let b = c => c;

a = 3;
b = 3;
console.log( a == b);
console.log(a(7) === b(7));