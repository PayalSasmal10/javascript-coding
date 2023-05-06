// rate limit the function call

const expensive = () => {
    console.log("Expensive");
}

const throttle = (func, limit) => {
    let flag = true;
    return function () {
        if(flag){

            func();
            flag=false;
            setTimeout(() => {
                flag=true;
            }, limit)
        }

    }
}

const betterFunction = throttle(expensive, 1000);
window.addEventListener("resize", betterFunction);
