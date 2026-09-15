// Step 1

// In this workshop, you will leverage JavaScript to build a roster of astronauts for a space mission.

// To begin, create an empty array for your roster named squad.

// Step 2

// Your roster begins with a single commander astronaut. Create an object named firstAstronaut with the following properties:

// Key	Value
// id	1
// name	"Andy"
// role	"Commander"
// isEVAEligible	true
// priority	3

// Step 3

// Mission control requires a method for adding new members to the roster. Create an empty function named addCrewMember that accepts two parameters, crew and astronaut.

// Step 4 

// Generally, it is good practice to validate your input(s) inside a function. Use a for loop to iterate through the crew array and check whether any member already has the same id as the input astronaut. If a duplicate is found, log the error message console.log("Duplicate ID: " + astronaut.id) and then call return to exit the function early.

// Here is an example of this commonly used technique:

// Example Code
// if (existingMember.id === newMember.id) {
//     console.log("Duplicate ID: " + newMember.id);
//     return;
// }

// Step 5
// Push the astronaut object into the crew array and log Added ${astronaut.name} as ${astronaut.role} to the console. You can use either template literals or string concatenation for the log message.

// Step 6
// Now you can start building your roster. Use addCrewMember() to add the firstAstronaut to your squad.

// Step 7
// The rest of your crew has been created in an array named remainingCrew with the following data:

// id	name	role	isEVAEligible	priority
// 2	"Bart"	"Pilot"	false	8
// 3	"Caroline"	"Engineer"	true	4
// 4	"Diego"	"Scientist"	false	1
// 5	"Elise"	"Medic"	true	7
// 6	"Felix"	"Navigator"	true	6
// 7	"Gertrude"	"Communications"	false	4
// 8	"Hank"	"Mechanic"	true	2
// 9	"Irene"	"Specialist"	true	5
// 10	"Joan"	"Technician"	false	1
// Loop through the remainingCrew array and add each astronaut to squad using the addCrewMember() function.

// const remainingCrew = [
//   { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
//   { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
//   { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
//   { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
//   { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
//   { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
//   { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
//   { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
//   { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
// ]; 
// Step 8
// You had previously added a console.log() call to your addCrewMember function to validate its behavior, and now the call is no longer needed. To prevent the terminal from getting cluttered in future steps, go ahead and remove the current console.log() call.

// Step 9
// Mission control needs a method to swap the positions of two crew members in a roster. Create an empty function named swapCrewMembers with three parameters:

// crew: an array of astronaut objects

// fromIndex: the index of the first astronaut to swap

// toIndex: the index of the second astronaut to swap

// Step 10
// As before, start by validating the input inside the swapCrewMembers function. Specifically, you must validate the indices of the astronauts to be swapped.

// If any of the following are true:

// fromIndex is negative

// fromIndex is greater than or equal to crew.length

// toIndex is negative

// toIndex is greater than or equal to crew.length

// then, you should log "Invalid crew indices" to the console and call return to exit the function.

// You can use the OR operator || to check multiple conditions at once:

// Example Code
// if (condition1 || condition2 || condition3 || condition4) {
//   console.log("Message");
//   return;
// }

// Step 11
// You should create a shallow copy of the crew array using the slice() method. Name the new array updatedCrew.

// Recall that calling slice() without arguments returns a copy of the entire array:

// Example Code
// const copyArray = originalArray.slice();

// Step 12
// The splice() method can modify arrays by adding or removing elements at any position, including the middle. Since splice() returns an array containing the removed elements, you can use it to swap two elements in an array without mutating the original. This can be done in one line using the following technique:

// Example Code
// // swap elements at i and j without mutating the original
// const copy = array.slice();
// copy[i] = copy.splice(j, 1, copy[i])[0];
// Here is an example:

// Example Code
// const originalArray = [12, 97, 68, 55];
// const copyArray = originalArray.slice();
// copyArray[1] = copyArray.splice(3, 1, copyArray[1])[0];
// console.log(copyArray); // [12, 55, 68, 97]
// The technique, applied in the third line, works as follows:

// splice(3, 1, copyArray[1]) removes the element at index 3 (55)

// It inserts the element from copyArray[1] (97) into index 3

// splice() returns [55], an array containing the removed element

// [0] extracts 55 from that array

// That value (55) is assigned back to copyArray[1], completing the swap

// Use this technique with the updatedCrew array to swap the astronauts at fromIndex and toIndex.

// Step 13
// Use a for loop to log the name of every astronaut in the updatedCrew array. After the loop, return the updatedCrew array to complete your swapCrewMembers function.


// Step 14
// Mission control has requested you to swap the positions of two astronauts in your squad array, specifically members at indices 2 and 5. Use your swapCrewMembers() function to perform the swap and store the result in a new variable named updatedSquad.

// Step 15
// You had previously added a console.log() call to your swapCrewMembers function to validate its behavior, and now the call is no longer needed. To prevent the terminal from getting cluttered in future steps, go ahead and remove the current for loop that logs to the console.

// Step 16
// Mission control requires a method for copying EVA-eligible astronauts from a crew. Create an empty function named getEVAReadyCrew that accepts a crew parameter.

// Step 17
// First, create an empty array named eligible. Then loop through every astronaut in the input crew array and, if they are EVA-eligible (meaning their isEVAEligible property is true), push them into the eligible array. After the loop, return the eligible array.

// Step 18
// Mission control has alerted you that the list of EVA-eligible astronauts should also be sorted by priority descending. There are a few ways to sort an array - perhaps the most basic is bubble sort.

// Bubble sort works by repeatedly stepping through a list, comparing neighboring items, and swapping them if they’re in the wrong order. After each pass, the item that should come first based on your sort criteria moves closer to (or “bubbles” toward) its correct position in the array. Here is how you can sort crew by priority descending using bubble sort:

// Example Code
// // Outer loop: controls how many passes we make
// for (let i = 0; i < crew.length - 1; i++) {
//   // Inner loop: compares neighboring items
//   for (let j = 0; j < crew.length - 1 - i; j++) {
//     // If current member has lower priority than next, swap
//     if (crew[j].priority < crew[j + 1].priority) {
//       // Using a temp variable for the swap
//         const temp = crew[j];
//         crew[j] = crew[j + 1];
//         crew[j + 1] = temp;
//     }
//   }
// }
// Create a new helper function named sortByPriorityDescending that accepts a crew parameter. This function should directly sort the input crew array by priority descending, use two nested for loops, and should not return anything.

// Step 19
// Back inside the getEVAReadyCrew function, call sortByPriorityDescending() with the local eligible array so that it is sorted before being returned.

// Step 20
// Invoke getEVAReadyCrew() with your updatedSquad roster and store the result in a new variable named EVAReadySquad. Then, use a for loop to log the name of every astronaut in the EVAReadySquad array.

// Step 21
// You added a console.log() call to your script to validate your EVAReadySquad array, and now the call is no longer needed. To prevent the terminal from getting cluttered in future steps, go ahead and remove the current for loop that logs EVAReadySquad astronauts to the console.

// Step 22
// Mission control has requested a new function for breaking down a crew into chunks of variable sizes. Create an empty function named chunkCrew that accepts two parameters, crew and size.

// Step 23
// As before, you should validate your input. Specifically, if size is less than 1, you should log "Chunk size must be >= 1" to the console and then call return to exit the function.

// Step 24
// To create chunks of size n from an array without changing it, you can combine a for loop with the slice() method as such:

// Example Code
// const result = [];
// for (let i = 0; i < array.length; i += n) {
//   result.push(array.slice(i, i + n));
// }
// The example above:

// creates an empty array named result

// loops through the original array in steps of size n

// creates chunks from array of size n and pushes them into result using slice()

// To complete the chunkCrew function, you must:

// create an array named chunks

// loop through crew in steps of size size, creating and pushing chunks from crew into chunks using slice()

// return the chunks array

// Step 25
// Use your chunkCrew() function to create chunks of size 3 from your EVAReadySquad array and store them in a new variable named EVAChunks.

// Step 26
// You may have noticed that EVAChunks is essentially an array with arrays inside of it, or a two-dimensional (2D) array. A nested for loop can be used to log data from a 2D array:

// Example Code
// for (let i = 0; i < rootArray.length; i++) {
//   console.log(`Group ${i + 1}:`);
//   for (let j = 0; j < rootArray[i].length; j++) {
//     console.log(rootArray[i][j].property);
//   }
// }
// In the example above, rootArray is the main array, rootArray[i] is a sub-array inside of the main array, and rootArray[i][j] is one object inside of that sub-array and .property accesses a value in that object.

// Use a nested for loop to iterate through EVAChunks and log the name of every astronaut in each chunk. Be sure to:

// use EVAChunks as your root array
// log Chunk ${i+1}: between chunks

// Step 27
// You added a console.log() call to your script to validate your EVAChunks array, and now the call is no longer needed. To keep the terminal clean for the next steps, delete the for loop block that logs data from EVAChunks.

// Step 28
// Mission Control requires one more function for logging a summary of your crew. Create an empty function named printCrewSummary that accepts a crew parameter.

// Step 29
// First, create a shallow copy of the input crew array using slice() and assign it to a variable named sorted.

// Step 30
// Directly sort the local sorted array by using your helper function sortByPriorityDescending().

// Step 31
// Use a for loop to log the name of every astronaut in the sorted array.

// Step 32
// To complete preparation for your space mission, call printCrewSummary() with your updatedSquad array!

// Здесь начинается мой код


const squad = [];

const firstAstronaut = {
  id: 1,
  name: "Andy",
  role: "Commander",
  isEVAEligible: true,
  priority: 3
};

function addCrewMember(crew, astronaut) {
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].id === astronaut.id) {
      console.log("Duplicate ID: " + astronaut.id);
      return;
    }
  }
  crew.push(astronaut);
}

addCrewMember(squad, firstAstronaut);

const remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
  { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
  { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
  { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
  { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
];

for (let i = 0; i < remainingCrew.length; i++) {
  addCrewMember(squad, remainingCrew[i]);
}

function swapCrewMembers(crew, fromIndex, toIndex) {
  if (
    fromIndex < 0 || 
    toIndex < 0 ||
    fromIndex >= crew.length ||
    toIndex >= crew.length
  ) {
    console.log("Invalid crew indices");
    return;
  }

  const updatedCrew = crew.slice();
  updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];

  return updatedCrew; 
}

const updatedSquad = swapCrewMembers(squad, 2, 5);

function sortByPriorityDescending(crew) {
  for (let i = 0; i < crew.length - 1; i++) {
    for (let j = 0; j < crew.length - 1 - i; j++) {
      if (crew[j].priority < crew[j + 1].priority) {
        const temp = crew[j];
        crew[j] = crew[j + 1];
        crew[j + 1] = temp;
      }
    }
  }
}

function getEVAReadyCrew(crew) {
  const eligible = [];
  for (const astronaut of crew) {
    if (astronaut.isEVAEligible) eligible.push(astronaut);
  }
  sortByPriorityDescending(eligible); 

  return eligible;
}

const EVAReadySquad = getEVAReadyCrew(updatedSquad);

function chunkCrew(crew, size) {
  if (size < 1) {
    console.log("Chunk size must be >= 1");
    return;
  }

  const chunks = [];
  for (let i = 0; i < crew.length; i += size) {
    chunks.push(crew.slice(i, i + size));
  }

  return chunks;
}

const EVAChunks = chunkCrew(EVAReadySquad, 3);

function printCrewSummary(crew) {
  const sorted = crew.slice();
  sortByPriorityDescending(sorted); 
  for (const astronaut of sorted) {
    console.log(astronaut.name);
  }
}

printCrewSummary(updatedSquad);