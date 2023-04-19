// first way to reverse a string
function usingloop(str) {
  let new_str = "";
  for (var i = str.length - 1; i >= 0; i--) {
    new_str = new_str + str[i];
  }
  return new_str;
}

console.log(usingloop("payal"));

// 2nd way: using split
function usingSplit(str){
    return str.split("").reverse().join("");
}

console.log(usingSplit("hello"));

// 3rd way: using recursion
function usingRecursion(str){
    if(str === ''){
        return "";
    }
    else{
        return usingRecursion(str.substr(1)) + str.charAt(0);
    }
}

console.log(usingRecursion("there"));