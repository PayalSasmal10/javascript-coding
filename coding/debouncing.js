// call function after few times of users once enter to search bar. don't call unwanted funcction call
// differnce between 2 key stroke event then make a function call called debouncing

let count = 0

const getData = () =>{
    console.log("Fetching data...." + count++);
}

const debouncer = function(fn, delay) {
    let timer;
    return function () {
        // let context = this;
        // arg = arguments;
        // console.log(arg);
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}



const betterFunc = debouncer(getData, 300);