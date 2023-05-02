// rest opearator is used to put the rest of some values provided by user in javascript array.
// IT is used to combine the arrays or objects. and it returns array.
// In ES5 arguments were introduced in rest operator but it was not the real array. it was a 
// virtual array. we can't use map,sort, set function to this. but we can use them in rest operator.

// using string
function nameThis(fname,lname,...others){
    // console.log(others);
    return fname + lname + others;
}

console.log(nameThis("payal sasmal is a good girl.", " Do you know that? ",
"Do you think you can be her friend?", "She loves to make friends."));

//using array
function sum(...theArgs){
    let total = 0;
    for (const arg of theArgs){
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3, 5));

// using objects - destructuring
const {firstname, lastname, ...others} = {
    firstname: "Oli",
    lastname: "sasmal",
    company: "visa",
    professional: "web developer",
    geneder: "female"
};

console.log(others);


// Spread operator: It is used to spread the values to the variables.

function sum1(x, y, z){
    return x + y+ z;
}

number = [1, 2, 3];
console.log(sum1(...number)); 
console.log(sum1.apply(null, number)); // this is same as above syntax


function myFunction(x, y, z, u, v){
    return x + y + z + u + v;
}

const args = [0, 1];

console.log(myFunction(9, ...args, 8, 1));

// spread using objects

var students = {
    name: "Saheb",
    age: "22",
    hobbies: ["playing games", "watching movies"]
};

var newstudent = {
     ...students,
     name: "Oli",
     age : "28"
}

console.log(students);
console.log(newstudent);