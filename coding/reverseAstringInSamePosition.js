const str = "Let's get started with this place";

function reverseAStringwithoutSwapITPOsition(str){
  let splitToArray = str.split(" ");
  let reverseEachWord = splitToArray.map((word) => {
    return(word.split('').reverse().join(''));
  })
  let makeItString = reverseEachWord.join(' ');
  return makeItString;
}

console.log(reverseAStringwithoutSwapITPOsition(str));