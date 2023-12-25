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

console.log("Reducer function...................");
// using reducer function

let reducerFn = arr.reduce((initialValue,currentValue) => initialValue + currentValue, 0);
console.log(reducerFn);
console.log(".............................");

// custom Reduce function
Array.prototype.custReduce = function(callBackFn, initV) {
  let reduceV = initV;
  for(let i=0; i< this.length; i++){
    reduceV = callBackFn(reduceV, this[i]);
  }
  return reduceV;
}

let custRedu = arr.custReduce((initialV, item) => initialV + item,0);

console.log(custRedu);