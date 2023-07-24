let promise1 = Promise.resolve(3);
let promise2 = 54;
let promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 100000, 'testing');
});
Promise.allSettled([promise1, promise2, promise3]).then((values) => console.log(values));