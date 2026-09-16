// Implement the Mutations Algorithm
// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// Create a function named mutation that takes an array as its argument.
// mutation should return true if the string in the first element of the array contains all of the letters of the string in the second element of the array, and false otherwise. For example:
// mutation(["hello", "Hello"]), should return true because all of the letters in the second string are present in the first, ignoring case.
// mutation(["hello", "hey"]) should return false because the string hello does not contain a y.
// mutation(["Alien", "line"]), should return true because all of the letters in line are present in Alien.
// Tests:
// Waiting:1. mutation(["hello", "hey"]) should return false.
// Waiting:2. mutation(["hello", "Hello"]) should return true.
// Waiting:3. mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// Waiting:4. mutation(["Mary", "Army"]) should return true.
// Waiting:5. mutation(["Mary", "Aarmy"]) should return true.
// Waiting:6. mutation(["Alien", "line"]) should return true.
// Waiting:7. mutation(["floor", "for"]) should return true.
// Waiting:8. mutation(["hello", "neo"]) should return false.
// Waiting:9. mutation(["voodoo", "no"]) should return false.
// Waiting:10. mutation(["ate", "date"]) should return false.
// Waiting:11. mutation(["Tiger", "Zebra"]) should return false.
// Waiting:12. mutation(["Noel", "Ole"]) should return true.

function mutation(array){
  let firstWord = array[0].toLowerCase();
  let secondWord = array[1].toLowerCase();
  for (const char of secondWord){
    if (!firstWord.includes(char)){
        return false;
    }
  }
  return true;
}