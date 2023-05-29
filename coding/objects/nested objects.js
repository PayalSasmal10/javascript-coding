const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
};


console.log(myObj.cars[0].models[2]);
let x =  "";
for (let i in myObj.cars){
    console.log("....................");
    console.log(myObj.cars[i].name);

    for(let j in myObj.cars[i].models){
        console.log(myObj.cars[i].models[j]);
    }
}
