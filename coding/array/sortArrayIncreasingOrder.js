// We are given an array of strings, we need to sort the array in increasing order of string lengths.
// Input : ['I', 'yoga', 'daily', 'do'].  Output :['I', 'do', 'yoga', 'daily']

let input = ['I', 'yoga', 'daily', 'do'];
let newSort = input.sort((a,b) => {
    console.log("a", a);
    console.log("b", b);
    if(a.length>b.length){ // if returning positive intger place b before a
        return 1;          // [I, yoga]
    }else if(a.length<b.length){ // if returning -ve then place a before b
        return -1;               // [do]
    }
    return 0;
    
});
console.log(newSort);
