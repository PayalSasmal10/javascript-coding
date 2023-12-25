function test(){
    for(let i=30; i>=0; i--){
        // (function(currentVal){
            setTimeout(() => {
                console.log(i);
            }, 1000);
        // })(i);
    }
}
test();
