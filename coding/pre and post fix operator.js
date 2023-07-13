
for(var i =0; i<3; i++){
    setTimeout(() => { // i=0, i=1, i=2
        console.log("Iam from i++", i++);
    }, 100);
    console.log(i);
}

console.log("outside of the function", i);