let arr = [1, 2, 3, 4, 5];

// using map function
let squares = arr.map((currentItems) => currentItems ** 2);
console.log(squares);

// creating own map
console.log("created own map function........");
function customMap(arr, callbackFunc) {
  let mapArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callbackFunc(arr[i]);
    mapArr.push(result);
  }

  return mapArr;
}

let square = customMap(arr, function (currentItem) {
  return currentItem ** 2;
});

console.log(square);

console.log("using in-built filter function........");
// filter
let fillteredValue = arr.filter((x) => x % 2 == 0);
console.log(fillteredValue);

// custom filter function
console.log("created own filter function........");
function customFilter(arr, callBackfn) {
  let filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callBackfn(arr[i]);
    if (result) {
      filterArr.push(arr[i]);
    }
  }
  return filterArr;
}

let custFilter = customFilter(arr, (currentVariable) => {return currentVariable%2 == 0;}
);

console.log(custFilter);