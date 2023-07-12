// Normal way - https://medium.com/developers-arena/how-to-create-a-polyfill-for-call-apply-and-bind-917ae110edc3
function printMyData(state){
    console.log(this.firstname + " " + this.lastname + " is from " + state + " and DOB is " + this.DOB);
}

let dobDetails = {
    DOB: "09/06/1996"
}

const obj = {
    firstname: "Payal",
    lastname: "Sasmal",
    DOB: "12/08/1994",
    myDOB: function (){
        console.log(this.DOB);
    }
};


printMyData.call(obj, "west bengal");
//accessing myDOB function
obj.myDOB.call(dobDetails);

// Polyfill way
console.log("Polyfill...............................................");

Function.prototype.custCall = function(obj, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + "THis is not callable");
    }
    obj.myMethod = this;
    console.log("obj->", obj);
    obj.myMethod(...args);
    // console.log(this);
}


printMyData.custCall(obj, "Karnataka")


