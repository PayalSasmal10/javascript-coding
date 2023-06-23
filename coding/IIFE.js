(function () {
    console.log("Hi");
})();

function doSomething() {
    console.log(this);
  }
     
doSomething();