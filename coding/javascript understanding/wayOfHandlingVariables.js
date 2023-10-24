function test(){
    const a=b=3;
    console.log(a);
    console.log(b);
  }
  
  test();
  console.log("outside of teh func",b);
//   console.log(a);

function interchangbleObj(){

    var x = {},
        y = {'key': 'y'},
        z = {'key': 'z'};
  
  console.log(x);
  console.log(y);
  console.log(z);
  x[y] = 123;
  x[z] = 456;
  console.log("last x", x);
}
interchangbleObj();