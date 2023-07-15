/*
Async, await keyword enabled asynchornous operation, promise behavior. 
*/


function Example() {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve("Resolved");
    }, 2000);
  });
}

async function callBackFn() {
    console.log("starting");
    let result = await Example();
    console.log(result);
}
callBackFn();