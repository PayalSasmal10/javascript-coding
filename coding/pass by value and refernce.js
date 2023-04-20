// primitive are pass by value 
function passByValue() {
    var a = 10;
    var b = a;
    a = 20;
    console.log(a);
    console.log(b);
}

passByValue();

// non-primitives data type

function passByReference() {
    var obj = {fname: "payal", lname: "sasmal" };
    var obj1 = obj;
    obj.fname = "Oli";
    console.log(obj);
    console.log(obj1);

}

passByReference();