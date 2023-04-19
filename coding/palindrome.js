// 1st way
function usingLoopPalindrome(str) {
    let new_str = ""
    for (var i=str.length-1; i>=0; i--){
        new_str = new_str + str[i];
    }

    if(new_str === str){
        return "Palindrome";
    }
    else{
        return "Not Panlindrome";
    }
}

console.log(usingLoopPalindrome("mom"));
console.log(usingLoopPalindrome("payal"));

//2nd way: using split
function usingSplit(str){
    let latest_str = str.split("").reverse().join("");
    if(str === latest_str){
        return "Palindrome";
    }else{
        return "Not Palindrome";
    }

}
console.log(usingSplit("mom"));

// 3rd way: recursion
function usingRecursion(str){
    if(str === ""){
        return "";
    }
    else{
        var latest_str = usingRecursion(str.substr(1)) + str.charAt(0);
    }
    
    if(latest_str === str){
        return "Palindrome";
    }else{
        return "Not Palindrome";
    }
}

console.log(usingRecursion("testing"));