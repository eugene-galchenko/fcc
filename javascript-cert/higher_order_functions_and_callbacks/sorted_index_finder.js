// Implement a Sorted Index Finder
// In this lab you will create a function that returns the lowest index at which a value should be inserted into an array once it has been sorted in ascending order.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should have a getIndexToIns function that takes two arguments: an array and a number.
// You should use the sort method to sort the array in ascending order.
// Your getIndexToIns function should return the lowest index at which the number should be inserted by using the findIndex method.
// Your getIndexToIns function should always return a number.
// Hint:
// The findIndex method is a built-in array method in JavaScript. It takes a callback function and returns the index of the first element that satisfies the condition. Both findIndex and sort are higher-order functions.

// Examples:

// getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because 1.5 is greater than 1 (index 0) and less than 2 (index 1).
// getIndexToIns([20, 3, 5], 19) should return 2 because after sorting to [3, 5, 20], 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  const index = arr.findIndex((element) => element >= num);

  return index === -1 ? arr.length : index;
}

console.log(getIndexToIns([40, 60], 50));        // 1
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // 2
console.log(getIndexToIns([5, 3, 20, 3], 5));    // 2
console.log(getIndexToIns([], 1));               // 0