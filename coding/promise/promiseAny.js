// Akshay saini examples
console.log("Akshay saini examples......");

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p1 Fail"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p2 Fail"), 5000);
});

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("p3 success"), 2000);
    setTimeout(() => reject("p3 Fail"), 2000);
});

// It waits for first settled success promise

Promise.any([p1, p2, p3])
.then((res) => console.log(res))
.catch((err) => {
    console.error(err);
    console.log(err.error());
});