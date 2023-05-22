/* First synchronous program, 
1. start
2. testing
3. end
4. promise // Micro task queue are on priority
5. setTimeout // callback queue
*/
console.log("start");


function test () {
    console.log("testing");
}
test();
setTimeout(() => {
    console.log("callbacks");
}, 10);

Promise.resolve().then(()=> console.log("promise"));


// test();

console.log("end");