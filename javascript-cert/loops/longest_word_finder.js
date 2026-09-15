// Build a Longest Word Finder App
// In this lab, you will build a function that returns the length of the longest word in the provided sentence.

// For example, in the sentence "The quick brown fox jumped over the lazy dog", the longest word is "jumped", which has a length of 6.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should create a function named findLongestWordLength that takes a string as an argument.
// The function should return the length of the longest word in the string.

// Tests:
// Waiting:1. You should create a function named findLongestWordLength.
// Waiting:2. findLongestWordLength should have a single parameter.
// Waiting:3. findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
// Waiting:4. findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
// Waiting:5. findLongestWordLength("May the force be with you") should return 5.
// Waiting:6. findLongestWordLength("Google do a barrel roll") should return 6.
// Waiting:7. findLongestWordLength("Googling do a barrel roll") should return 8.
// Waiting:8. findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
// Waiting:9. findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.

function findLongestWordLength(phrase){
  const words = phrase.split(" ");
  
  let longest = "";

  for (let i = 0; i < words.length; i++){
    if(words[i].length > longest.length){
      longest = words[i];
    }
  }

  return longest.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));