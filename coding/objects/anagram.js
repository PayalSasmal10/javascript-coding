function funWithAnagram(text) {
  let anagrams = {};
  let result = [];
  const sortedString = (str) => str.split("").sort().join("");
  for (let word of text) {
    console.log(sortedString(word));
    if (!anagrams[sortedString(word)]) {
      result.push(word);
      anagrams[sortedString(word)] = true;
    }
  }
  return result.sort();
}

console.log(funWithAnagram(["code", "aaagmnrs", "anagrams", "doce"]));
