// Implement the Chunky Monkey Algorithm
// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// Write a function named chunkArrayInGroups that takes an array as first argument and a number as second argument. The function should split the array into smaller arrays of length equal to the second argument and returns them as a two-dimensional array.
// Tests:
// Waiting:1. chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// Waiting:2. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
// Waiting:3. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// Waiting:4. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
// Waiting:5. chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
// Waiting:6. chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// Waiting:7. chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

function chunkArrayInGroups(array,size){
  const result = [];
  for (let i = 0; i < array.length; i+=size){
    let chunk = array.slice(i, i+size);
    result.push(chunk);
  }
  return result;
}