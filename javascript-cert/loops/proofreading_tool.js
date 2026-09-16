// Build a Proofreading Tool
// In this lab, you will build a proofreading tool that analyzes arrays of words for palindromes and repeated phrases.

// A palindrome is a word that reads the same forwards and backwards. For example, "racecar" and "level" are palindromes, but "hello" is not.

// A phrase is a sequence of consecutive words. For example, in ["the", "cat", "sat", "the", "cat"], the phrase "the cat" (a sequence of 2 words) appears at positions 0 and 3.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should define a function named isPalindrome that takes a word string as its argument. It should return true if the word reads the same forwards and backwards (case-insensitive), and false otherwise.

// You should define a function named findPalindromeBreaks that takes a words array as its argument. It should return an array of indices of words that are not palindromes. It should return an empty array if the input is empty.

// You should define a function named findRepeatedPhrases that takes a words array and a phraseLength number as arguments. It should return an array of all start indices where a sequence of phraseLength consecutive words appears more than once in the array — including the index of the first occurrence. It should return an empty array if phraseLength is greater than or equal to the length of words. Overlapping sequences should also be counted.

// You should define a function named analyzeTexts that takes a texts array and a phraseLength number as arguments. It should process each element of texts (each an array of words) and return an array of objects, each with repeatedPhrases and palindromeBreaks properties. It should return an empty array if texts is empty.

// Tests:
// Waiting:1. isPalindrome should be a function.
// Waiting:2. isPalindrome should return true for a palindrome.
// Waiting:3. isPalindrome should return true regardless of case.
// Waiting:4. isPalindrome should return false for a non-palindrome.
// Waiting:5. findPalindromeBreaks should be a function.
// Waiting:6. findPalindromeBreaks should return an empty array for empty input.
// Waiting:7. findPalindromeBreaks should return the indices of non-palindromes.
// Waiting:8. findPalindromeBreaks should return an empty array when all words are palindromes.
// Waiting:9. findRepeatedPhrases should be a function.
// Waiting:10. findRepeatedPhrases should return an empty array when phraseLength is greater than or equal to the length of words.
// Waiting:11. findRepeatedPhrases should return an empty array when phraseLength is greater than the length of words.
// Waiting:12. findRepeatedPhrases should return all start indices where the phrase repeats, including the first occurrence.
// Waiting:13. findRepeatedPhrases should return all start indices for overlapping repeated phrases.
// Waiting:14. analyzeTexts should be a function.
// Waiting:15. analyzeTexts should return an empty array for empty input.
// Waiting:16. analyzeTexts result objects should have repeatedPhrases and palindromeBreaks properties.
// Waiting:17. analyzeTexts should correctly aggregate results for each text.
// Waiting:18. analyzeTexts should process multiple texts and return a result for each.

function isPalindrome(word){
  const reversedWord = word.toLowerCase().split("").reverse().join("");
  if(reversedWord === word.toLowerCase()){
    return true;
  }
  return false;
}

function findPalindromeBreaks(words) {
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      result.push(i);
    }
  }

  return result;
}

function findRepeatedPhrases(words, phraseLength) {
  // 1. ранний выход
  if (phraseLength >= words.length) {
    return [];
  }

  // 2. группировка фраз по ключу
  const counts = {};
  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    if (!counts[phrase]) {
      counts[phrase] = [];
    }
    counts[phrase].push(i);
  }

  // 3. отбор групп с >1 индексом
  const result = [];
  for (const phrase in counts) {
    if (counts[phrase].length > 1) {
      for (const index of counts[phrase]) {
        result.push(index);
      }
    }
  }

  // 4. сортировка
  result.sort(function(a, b) { return a - b; });

  return result;
}

function analyzeTexts(texts, phraseLength) {
  const result = [];

  for (const words of texts) {
    const repeatedPhrases = findRepeatedPhrases(words, phraseLength);
    const palindromeBreaks = findPalindromeBreaks(words);

    result.push({
      repeatedPhrases: repeatedPhrases,
      palindromeBreaks: palindromeBreaks
    });
  }

  return result;
}



console.log(findPalindromeBreaks["level", "cat"]);