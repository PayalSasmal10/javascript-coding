let arr = [{ a: 1 }, { a: 2 }, { b: 2 }, { c: 3 }];
// -> o/p {a:3, b:2, c:3}
let result = {};
arr.forEach((obj) => {
  for (let key in obj) {
    if (result.hasOwnProperty(key)) {
        result[key] += obj[key];
    }else{
        result[key] = obj[key]
    }
  }
});  
console.log(result);
