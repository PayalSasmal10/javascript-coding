Array.prototype.show = function(){
    return this;
}

const cities = ["Howrah"];
console.log(cities.show());

// how to create our own prototype

function MyPrototye(name){
    this.name;
}

// MyPrototye.prototype=obj;

const myproto=new MyPrototye("Oli");
console.log(myproto);