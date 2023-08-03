function fibonacci(n){
    if(n <=1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

let n = 6;
for(let i =0; i<n; i++){
    console.log(fibonacci(i));
    console.log("i data", i);

}
