// How to write a function without passing any arguments to the avg function and make an average
arr = [1, 2, 4, 5, 7, 8, 3, 5,10],



Array.prototype.Avg = function(){
    let sum = 0;
    for(let i=0; i<this.length; i++){
        sum = sum + this[i];
    }

    return sum / this.length;

  
}

const result = arr.Avg();
console.log(result);


var a = 0;
let b = 0;
const c = 0;
if (true) {
   var a = 1;
   let b = 1;
   const c = 1;
}
console.log(a); 
console.log(b); 
console.log(c);