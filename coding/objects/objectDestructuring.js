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

// 
const {dept: {empAge = 25}} = employee;
console.log(empAge);
console.log(employee);