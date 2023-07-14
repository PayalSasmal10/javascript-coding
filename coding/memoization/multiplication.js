function mul(x, ...y) {
  console.log("from original calculation");
  let result = x;
  for (let i = 0; i < y.length; i++) {
    result *= y[i];
  }
  return result;
}

console.log("here", mul(4, 5, 6, 7, 80));

function memoization(mul) {
  cache = {};
  function newFunc(...args) {
    let a = args[0];
    let b = args[1];
    if ((a, b) in cache) {
      console.log(cache);

      return cache[(a, b)];
    } else {
      cache[(a, b)] = mul(a, b);
      return cache[(a, b)];
    }
  }
  return newFunc;
}

console.time();
let efficiency = memoization(mul);
console.log(efficiency(2, 3));
console.timeEnd();

console.time();
console.log(efficiency(2, 3));
console.timeEnd();

console.time();
console.log(efficiency(4, 3));
console.timeEnd();
