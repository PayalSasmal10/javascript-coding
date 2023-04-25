let div = document.querySelector(".div");
let button = document.querySelector(".button");

// Event bubbling
// div.addEventListener("click", () => {
//     console.log("div");
// });

// button.addEventListener("click", () => {
//     console.log("button");
// });

// //capturing
// div.addEventListener("click", () => {
//     console.log("div");
// },true);

// button.addEventListener("click", () => {
//     console.log("button");
// },true);


// // stop propagation
// div.addEventListener("click", (event) => {
    
//     console.log("div");
// });

// button.addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log("button");
// });

// stop propagation imediate

div.addEventListener("click", () => {
    console.log("div");
});

button.addEventListener("click", (event) => {
    console.log("button");
});

button.addEventListener("click", (event) => {
    console.log("button1");
});

button.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("button2");
});