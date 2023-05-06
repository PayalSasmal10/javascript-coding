function sum () {
    // let total = 0;
    for(let i =0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}

sum(1, 2, 3);


function sum1(...num){
    for(let i = 0; i<num.length; i++){
        console.log(num[i])
    }
}

sum1(4, 5, 6);