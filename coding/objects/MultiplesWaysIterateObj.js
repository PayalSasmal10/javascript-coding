const obj = {
    id: "1",
    Name: "Payal",
    value: {
      id: "2",
      Obj: {
        id: "3",
      },
    },
    value1: {
      id: "4",
      obj: {
        id: "5",
      },
    },
  };

let key = Object.keys(obj);
console.log(key);

let value = Object.values(obj);
console.log(value);

const entries = Object.entries(obj);
for (const [key, value] of entries) {
  console.log([key, value]);
}

console.log("............................................");
for(let key in obj){
    console.log(key);
    console.log(obj[key]);
}
