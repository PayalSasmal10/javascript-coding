function printData (state) {
    console.log(this.name + " is " + this.age + " old and she is from " + state);
}

let obj = {
    name: "Payal",
    age: 28,
}

printData.apply(obj, ["west bengal"]);

// Polyfill

Function.prototype.myApply = function (obj, args){
    obj.mymethod = this;
    obj.mymethod(...args);
    console.log(obj);
}

printData.myApply(obj, ["karnataka"]);
