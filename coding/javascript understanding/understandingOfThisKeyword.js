
let hero = {
    _name: "John Deo",
    getSecurityIdentity: function(){
        return this._name;
    },
    getArroFuncSecurityIdentity: () => {
        this._name;
    }
}

let storeSecurityIdentity = hero.getSecurityIdentity.bind(hero);
console.log(storeSecurityIdentity());
console.log(hero.getSecurityIdentity());

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

console.log("..................................");

const obj = {
    name: "hi",
    fn : function (){
        console.log(this.name);
    },
    fn1 : () => {
        console.log(this.name);
    }
};

obj.fn(); // Obj expressions
obj.fn1() // window
