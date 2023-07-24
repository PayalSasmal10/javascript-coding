let promise1 = Promise.resolve(3);
console.log(promise1);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'test');
});

Promise.all([promise1, promise2, promise3]).then((value) => {
    console.log(value);
});


