let objModified = {
    name: "Oli",
}

let obj = {
    name: "Payal",
    getName : function (state) {
        console.log(this.name + " is from " + state);
    }

}

let returnBind = obj.getName.bind(objModified, "WB");
returnBind();

// Polyfill
Function.prototype.myBind = function (obj, ...args) {
    obj.myMethod = this;
    console.log(obj);
    return function () {
        obj.myMethod(...args);
    }
}

let returnMyCustPolyFill = obj.getName.myBind(obj, "Karnataka");
returnMyCustPolyFill();
