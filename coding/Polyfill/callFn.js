// Normal way - https://medium.com/developers-arena/how-to-create-a-polyfill-for-call-apply-and-bind-917ae110edc3
function printMyData(state){
    console.log(this.firstname + " " + this.lastname + " is from " + state + " and DOB is " + this.DOB);
}

const obj = {
    firstname: "Payal",
    lastname: "Sasmal",
    DOB: "12/08/1994",
};


printMyData.call(obj, "west bengal");

// Polyfill way
console.log("Polyfill...............................................");

Function.prototype.custCall = function(context, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + "THis is not callable");
    }
    context.fnRef = this;
    context.fnRef(...args);
    // console.log(this);
}


printMyData.custCall(obj, "Karnataka")

