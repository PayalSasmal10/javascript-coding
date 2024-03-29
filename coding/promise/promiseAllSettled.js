let promise1 = Promise.resolve(3);
let promise2 = 54;
let promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 100000, 'testing');
});
Promise.allSettled([promise1, promise2, promise3]).then((values) => console.log(values));

// Akshay saini examples
console.log("Akshay saini examples......");

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p1 Fail"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p2 success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p3 success"), 2000);
});

Promise.allSettled([p1, p2, p3])
.then((res) => console.log(res))
.catch((err) => console.error(err));