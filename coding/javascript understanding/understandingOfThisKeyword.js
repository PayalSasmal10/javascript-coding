
let hero = {
    _name: "John Deo",
    getSecurityIdentity: function(){
        return this._name;
    },
    getArroFuncSecurityIdentity: () => {
        this._name;
    }
}

let storeSecurityIdentity = hero.getSecurityIdentity;
console.log(storeSecurityIdentity());
console.log(hero.getSecurityIdentity());
console.log(hero.getArroFuncSecurityIdentity());

console.log("......................................................");
// 2nd way

var lenggth = 10;
function fn() {
	console.log(this.lenggth);
}

fn();
// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//     console.log(arguments[0]);
//     arguments[0]();
//   }
// };

// obj.method(fn, 1);

console.log("2nd Examples..................................");

const obj = {
    _name: "hi",
    fn : function (){
        console.log(this._name);
    },
    fn1 : () => {
        console.log(this._name);
    }
};

obj.fn(); // Obj expressions
obj.fn1(); // window


console.log("3rd examples..............................");
// 3. examples
// this keyword doesn't mean that where you are. It depends on how you are called.

function  x(){
    console.log(this);
    function y(){
        console.log(this);
        function z(){
            console.log(this);
        }
        z();
    }
    y();
}

x();

console.log("4th examples..............................");
// 4. examples

const person = {
    name: "Payal",
    print : function (){
        console.log(this);
    }
}

const person1 = {
    name: "Oli",
}

function text(){
    console.log(this)
}

text();
text.call(this);
text.call(person);
text.call(person1);
// these 2 are same
person.print(); 
person.print.call(person);
// these 2 are same
person.print.call();
person.print.call(this);

console.log("5th examples..............................");
// 5. examples

const obj1 = {
    name: "Hi",
    printName : function (){
        console.log(this);
    },
    printName1: () => {
        console.log(this);
    }
}

const obj2 = {
    name: "Hello",
}

obj1.printName(); // will print obj1 objects
obj1.printName1(); // window object because It is a arrow func
obj1.printName.call() // window object
obj1.printName1.call() // window object
obj1.printName.call(obj2) // will print obj2 object 
obj1.printName1.call(obj2) // window object 


