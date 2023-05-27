function memoize(func) {
    // code goes here
    let cache = {};
    // console.log("func", func);
    
    function memoizeFunction(...args){
      console.log("args", args);
      const key = JSON.stringify(args);
      console.log("key", key);
  
      if (cache[key]) {
        // console.log("from cache");
        return cache[key];
      }else{
  
      const result = func.apply(this, args);
      cache[key] = result;
      // console.log("from computation");
      return result;
      }
      
    }
  
    memoizeFunction.clear = function() {
      // console.log(cache);
      cache = {};
      // console.log(cache);
    };
  
    return memoizeFunction;
  }
  
    // ==============================
    // Test suite #1
    // Goals:
    // 1. Only most recent result is memoized
    // 2. Can clear memoized result
  
    function square(x) {
      console.log(`computing ${x} * ${x}`);
      return x * x;
    }
  
    const memoizedSquare = memoize(square);
    console.log(memoizedSquare);
    memoizedSquare(1); // from computation
    memoizedSquare(1); // from cache
    memoizedSquare(2); // from computation
    memoizedSquare(2); // from cache
    memoizedSquare(1); // from computation
    memoizedSquare.clear();
    memoizedSquare(1); // from computation
  
    // ==============================
    // Test suite #2
    // Goals:
    // 1. Works with arbitrary number of arguments (4 in this example)
  
    function sum(a, b, c, d) {
      console.log(`computing ${a} + ${b} + ${c} + ${d}`);
      return a + b + c + d;
    }
  
    const memoizedSum = memoize(sum);
  
    memoizedSum(1, 2, 3, 4); // from computation
    memoizedSum(1, 2, 3, 4); // from cache
    memoizedSum(2, 1, 3, 4); // from computation
  
    // ==============================
    // Test suite #3 (bonus point)
    // Goals:
    // 1. Non-primitive arguments are compared by deep equality
  
    function compare(obj) {
      console.log(`comparing ${obj.a} and ${obj.b}`);
      return obj.a > obj.b;
    }
  
    const memoizedCompare = memoize(compare);
  
    memoizedCompare({ a: 1, b: 2 }); // from computation
    memoizedCompare({ a: 1, b: 2 }); // from cache
    memoizedCompare({ b: 2, a: 1 }); // from cache
    memoizedCompare({ b: 3, a: 1 }); // from computation