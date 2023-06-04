const employee = {
    id: 518110,
    name: "Payal",
    dept: {
        id: 'D001',
        name: 'Spy',
        address: {
            street: '15th cross BTM',
            city: 'Bangalore'
        }
    }

};

const {dept: {address}} = employee;
console.log(address);

const {dept: {address : {street}}} = employee;
console.log(street);

//adding data to the object

// traditional way
const age = employee.age ? employee.age : 28;

console.log(employee);

// 2nd way
console.log("..............................................");
const {dept: {empAge = 25}} = employee;
console.log(empAge);
console.log(employee);

// 3rd way
console.log("..............................................");
const {name, dept, id, message = `${name} id is ${id}`} = employee;
console.log(message);


// alias
console.log("..............................................");
const newEmployee = {
    id: 007,
    name: 'Payal',
    dept: 'Spy',
};

const {dept: depratment} = newEmployee;
console.log(depratment);

// Handle dynamic name 
console.log("..............................................");

//tradition way
let key = 'id';
console.log(newEmployee[key]);

// normal way
function getPropertyValue(key){
    return newEmployee[key];
}

const ids = getPropertyValue('id');
const names = getPropertyValue('name');
console.log(ids);
console.log(names);

// destructuring way

function getPropertyValueDestruct(keys){
   const { [keys]: returnValue } = newEmployee;
   return returnValue;
}

const idss = getPropertyValueDestruct('id');
const namess = getPropertyValueDestruct('name');
console.log(idss);
console.log(namess);

console.log("..............................................");
//destructuring in functions

// ex-1
function logEmployee({name, dept}){
    console.log(`${name} is a ${dept}`);
}

logEmployee(newEmployee);

// ex-2
function getUser(){
    return {
        'name': 'Oli',
        'ages' : 45,
    }
}

// traditional way to get the age value
const obj = getUser();
console.log(obj.ages);

// detrsucturing way
const { ages } = getUser();
console.log(ages);