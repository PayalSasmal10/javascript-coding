let count = 0

const getData = () =>{
    console.log("Fetching data...." + count++);
}

const debouncer = function(fn, delay) {
    let timer;
    return function () {
        let context = this;
        arg = arguments;
        timer = setTimeout(() => {
            fn();
        }, delay)
    }
}

const betterFunc = debouncer(getData, 300);