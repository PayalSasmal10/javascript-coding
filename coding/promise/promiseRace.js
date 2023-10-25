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
