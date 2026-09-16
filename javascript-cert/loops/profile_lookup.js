// Build a Profile Lookup
// In this lab, you will build a profile lookup that looks up information about people in a contacts list.

// For this example imagine there is a contact named Akira Laine, the lookUpProfile("Akira", "lastName") should return Laine.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should create a function named lookUpProfile that takes a name and a property as arguments.
// You should retrieve contact information from the provided contacts array.
// If the function receives a contact name and the property exists on the related contact, then the property's value should be returned.
// If the name passed to the function does not match any contacts in the contacts array, then the function should return "No such contact".
// If the property does not exist on a found contact, then the function should return "No such property".
// Tests:
// Waiting:1. The contacts array should still be present in the global scope. Reset the lesson to recover it if you deleted it.
// Waiting:2. You should have a function named lookUpProfile with two parameters.
// Waiting:3. lookUpProfile("Kristian", "lastName") should return a string.
// Waiting:4. lookUpProfile("Kristian", "lastName") should return the string Vos
// Waiting:5. lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
// Waiting:6. lookUpProfile("Harry", "likes") should return an array
// Waiting:7. lookUpProfile("Bob", "number") should return the string No such contact
// Waiting:8. lookUpProfile("Bob", "potato") should return the string No such contact
// Waiting:9. lookUpProfile("Akira", "address") should return the string No such property
// Waiting:10. The contacts array should remain unchanged after running lookUpProfile

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop){
  for(let contact of contacts){
    if(contact.firstName === name){
      if (prop in contact){
        return contact[prop];
      } else{
        return "No such property";
      }
    }
  }
  return "No such contact";
}