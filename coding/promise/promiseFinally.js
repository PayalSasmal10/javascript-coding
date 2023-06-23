
function randomFunc(){
    return new Promise((resolve, reject) => {
        if(Math.random() < 1){
            resolve("Promise resolved");
        }else{
            reject(new Error("Failed to fulfilled the promise"));
        }
    });
}

randomFunc()
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        console.log("I am printing");
    })