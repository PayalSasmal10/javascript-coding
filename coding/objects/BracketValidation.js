function isValid(str){
    const stack = [];
    const openingBracket = ['{', '[', '('];
    const closingBracket = ['}', ']', ')'];
    const bracketPairs = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    };
    console.log(str);
    for(let char of str){
        if(openingBracket.includes(char)){
            stack.push(char);
        }
        else if(closingBracket.includes(char)){
            const correspondingopeningbracket = bracketPairs[char];
            return stack.pop() === correspondingopeningbracket? "valid" : "invalid";
        }
    }
}

console.log(isValid("{[{{[]}}]}"));
console.log(isValid("[[}}"));
console.log(isValid("[[]]{{}}"));