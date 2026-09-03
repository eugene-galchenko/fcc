/*

In this workshop, you will practice using for...of loops by building a function that counts how often a string appears in an array of strings.

Before you write that function, you will create a simpler one that logs each character of a string to the console.

*/

function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}
printCharacters("hello");

function getMatchedWordCount(sentence, match) {
  let count = 0;
  
  for (const word of sentence) {
    if (word === match) {
      count++;
    }
    console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
  }
  
  return count;
}

console.log(
  getMatchedWordCount(
    ["I", "really", "really", "really", "like", "to", "code"],
    "really"
  )
);

console.log(getMatchedWordCount(["Do", "not", "fear", "the", "dandy", "lion"],"dandy"));