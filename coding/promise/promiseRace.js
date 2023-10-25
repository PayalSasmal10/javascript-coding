// Akshay saini examples
console.log("Akshay saini examples......");

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p1 Fail"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p2 Fail"), 5000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p3 success"), 2000);
});

// whatever first promise got setteled that value will be 
Promise.race([p1, p2, p3])
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});