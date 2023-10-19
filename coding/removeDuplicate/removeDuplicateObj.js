const obj = [
    {
        id: 1,
        name: "test1"
    },
    {
        id: 2,
        name: "test2"
    },
    {
        id: 1,
        name: "test3"
    },
    {
        id: 3,
        name: "test4"
    },
    {
        id: 3,
        name: "test5"
    },
    {
        id: 2,
        name: "test6"
    },
];

// console.log([...new Set(obj.map((item) => item.id))]);

let uniqueValue = {};
obj.forEach((item) => {
    // console.log(item);
    uniqueValue[item.id] = item;
})
// o/p: 
console.log(uniqueValue);
const result = Object.values(uniqueValue);
console.log(result);
