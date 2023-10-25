let promise1 = Promise.resolve(3);
console.log(promise1);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'test');
});

Promise.all([promise1, promise2, promise3]).then((value) => {
    console.log(value);
});

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

Promise.all([p1, p2, p3])
.then((res) => console.log(res))
.catch((err) => console.error(err));