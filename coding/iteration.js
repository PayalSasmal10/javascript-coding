/*
Iterator is a spacial object which is used for implementating iterable protocol(
    a iterable protocol is a used tp create custom iteration. like for...of
) 
using next() method.
*/
function myNumbers(){
    let n =0;
    return {
        next : function (){
            n += 10;
            return {value:n, done: true};
        }

    };
}

const n  = myNumbers();
console.log(n.next());
console.log(n.next());
console.log(n.next());