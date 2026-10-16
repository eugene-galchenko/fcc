// Implement a Range-Based LCM Calculator
// In this lab, you will create a function that takes an array of two numbers and returns the least common multiple (LCM) of those two numbers and all the numbers between them.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should have a smallestCommons function that accepts an array of two numbers as an argument.
// The smallestCommons function should return the smallest common multiple that is evenly divisible by both numbers and all sequential numbers in the range between them.
// The function should handle input where the two numbers are not in numerical order.
// Tests:
// Passed:1. You should have a smallestCommons function.
// Passed:2. smallestCommons([1, 5]) should return a number.
// Passed:3. smallestCommons([1, 5]) should return 60.
// Passed:4. smallestCommons([5, 1]) should return 60.
// Passed:5. smallestCommons([2, 10]) should return 2520.
// Passed:6. smallestCommons([1, 13]) should return 360360.
// Passed:7. smallestCommons([23, 18]) should return 6056820.

function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const lcm = (a, b) => (a * b) / gcd(a, b);
  
  let result = min;
  for (let i = min + 1; i <= max; i++) {
    result = lcm(result, i);
  }
  return result;
}