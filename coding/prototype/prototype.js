// Prototype is mechanism by which javascript inherits features from one another.

let arr = ["hi", "there"];

let obj = {
    name: "Payal",
    city: "Howrah",
    getIntro : function(){
        console.log(this.name + " is from " + this.city);
    }
}

