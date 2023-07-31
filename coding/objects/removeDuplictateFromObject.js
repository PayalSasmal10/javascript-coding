const arr = [
    { city: "delhi", food: "pani puri" },
    { city: "delhi", food: "bhel puri" },
    { city: "mumbai", food: "vada pav" }
  ];

  // ouput [  { city: "delhi", food: "pani puri" },  { city: "mumbai", food: "vada pav" }]


  // using filter
function removeDuplicate(arr){
    return arr.filter((currentItem, index, array) => {
        console.log("currentItem", currentItem);
        console.log("index", index);
        console.log("array", array);
        return index === array.findIndex((item) => item.city === currentItem.city);
    });
}

console.log(removeDuplicate(arr));

// using reducer
function removeDuplicateUsingReducer(arr){
    // const test = arr.reduce((accV, item) => )
}

console.log(removeDuplicateUsingReducer(arr));