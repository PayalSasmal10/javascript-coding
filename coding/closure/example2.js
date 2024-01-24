function outerFn(){
    let a=10;
    function innerFn(){
        let b=30;
        let sum = a+b;
        return sum;
    };
    return innerFn();
}

console.log(outerFn());