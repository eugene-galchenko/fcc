// Step 1
// In this workshop, you will use JavaScript to simulate the flow of attendees at a music festival.

// You will work with two datasets that describe the festival gates during morning and night shifts:

// const morningGates = [
//   { id: "North", capacity: 5, queue: [3, 6, 2, 4] },
//   { id: "East", capacity: 3, queue: [2, 4, 3, 5] },
//   { id: "South", capacity: 4, queue: [1, 2, 3, 1] },
//   { id: "West", capacity: 2, queue: [4, 1, 2, 3] },
// ];

// const nightGates = [
//   { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
//   { id: "East", capacity: 2, queue: [3, 3, 4, 2] },
//   { id: "South", capacity: 5, queue: [2, 1, 2, 3] },
//   { id: "West", capacity: 3, queue: [5, 2, 1, 4] },
// ];
// Each gate object contains the following properties:

// id: A string that identifies the gate.
// capacity: The number of attendees the gate can process per tick.
// queue: An array of numbers representing how many attendees arrive at the gate during a specific tick.
// To begin, create an empty function named initializeThroughput with a parameter gates.

// Step 2
// In this workshop, throughput refers to the total number of attendees processed by a gate across all ticks in a single simulation (morning or night). Your initializeThroughput function will prepare an object to track how many attendees each gate processes.

// First, create an empty object named summary.

// Step 3
// To complete your initializeThroughput function:

// Use a for loop to iterate through each gate in the input gates array. For each gate, add a property to summary where:
// The key is the gate's id.
// The value is 0.
// After the loop, return the summary object.
// Your initializeThroughput function should not mutate the source input array gates.

// Step 4
// During each simulation tick:

// A certain number of attendees arrive at the gate (from its queue).
// The gate processes attendees based on its capacity.
// If more attendees arrive than the gate can handle, some will remain (overflow).
// You will now build a function that handles this logic for one gate at a single tick.

// Create an empty function named processGateFlow with the following parameters:

// gate: The gate object being processed.
// tickIndex: The current tick position in the queue array.

// Step 5
// First, you need to get the number of attendees arriving during the current tick. Access the value in the input gate's queue array at index tickIndex, and assign it to a variable named currentTickQueue.

// Step 6
// Next, you need a way to track how many attendees are processed by the gate during the tick. Create a variable named processed and initialize it to 0.

// Step 7
// Create an empty while loop that continues as long as there are attendees waiting (currentTickQueue > 0) and the gate has remaining capacity (processed < gate.capacity).

// Step 8
// Now it is time to process attendees through the gate. Inside the while loop:

// Decrement currentTickQueue by 1 to show one attendee has passed. Use the decrement operator (--).
// Increment processed by 1 to track how many attendees were processed. Use the increment operator (++).

// Step 9
// To complete your processGateFlow function, return an object containing two properties:

// processed: The number of attendees the gate was able to process during this tick.
// overflow: The number of attendees left in the queue after processing (which is currentTickQueue after the loop).
// You should directly return the object as such:

// Example Code
// return {
//   firstKey: firstValue,
//   secondKey: secondValue
// }

// Step 10
// When a gate cannot process all attendees during a tick, some attendees remain in the queue. To handle this overflow, you will build a function that reroutes overflow attendees to another gate.

// Create an empty function named rerouteOverflow with the following parameters:

// gates: The full array of gate objects.
// currentGate: The gate where the overflow occurred.
// tickIndex: The current tick position in the queue array.
// overflowAmount: The number of attendees that could not be processed.

// Step 11
// First, you will find the position of a specific gate within the gates array.

// Use the indexOf() method on gates to locate the currentGate element and assign the result to a variable named currentIndex.

// Here is a refresher on how this can be done:

// Example Code
// const index = array.indexOf(element);

// Step 12
// When rerouting overflow, you should send attendees to the next gate in the gates array. To do this, you need to find the index of the next gate. Normally, you could add 1 to the current index. However, if the current gate is the last one in the array, you need to wrap back to the first gate.

// You can use the modulo operator (%) to handle this:

// Example Code
// const nextIndex = (currentIndex + 1) % array.length;
// This works because when currentIndex + 1 equals array.length, the result becomes 0.

// Using this approach, create a variable named nextGateIndex that stores the index of the next gate in the gates array.

// Step 13
// Now that you know which gate to reroute to, you can move the overflow attendees.

// Take the overflowAmount and add it to the next gate's queue at the same tickIndex.

// Specifically, you must:

// Access the next gate using nextGateIndex.
// Access its queue.
// Add the overflowAmount to the value at position tickIndex.

// Step 14
// To help track how attendees move through the system, log the following message to the console: overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id. You can use either string concatenation or template literals.

// Step 15
// Now that you have functions to process individual ticks and handle overflow, it's time to create a controller function for a single gate. This function will handle all the actions for one gate during a single tick of the simulation.

// Create an empty function named handleGateAtTick with the following parameters:

// gates: The full array of gate objects.
// gate: The current gate being processed.
// tickIndex: The current tick position in the queue array.
// throughputSummary: An object tracking total processed attendees per gate.

// Step 16
// First, log the following message to the console: "\nProcessing " + gate.id + "...".

// Step 17
// Next, log the following message to the console: gate.queue[tickIndex] + " attendees arriving.".

// Step 18
// Process the input gate for the current tick by calling processGateFlow() with gate and tickIndex and assigning the result to a variable named result.

// Step 19
// Next, update the input throughputSummary object to reflect how many attendees were successfully processed by this gate at the current tick. Specifically, take the value of processed in result and add it to the throughputSummary property with the key gate.id.

// This step ensures that the throughput summary accumulates attendees over multiple ticks.

// Step 20
// The final task in your handleGateAtTick function is to handle any overflow for the current tick.

// If any overflow exists (result.overflow > 0), you should:

// Log the following message "Overflow of " + result.overflow + " attendees. Rerouting...".
// Reroute the overflow by calling your rerouteOverflow() function with gates, gate, tickIndex, and result.overflow.

// Step 21
// It will be helpful to have a function for displaying a summary of throughput during a simulation. Create an empty function named printSummary with a parameter summary.

// Step 22
// First, log the following message to the console: "\nThroughput Summary".

// Step 23
// Use a for...in loop to iterate through every gate in the input summary object and log the total attendees processed.

// For each gate, log a message in this format: gate + ": " + summary[gate] + " attendees processed".

// As an example, for an input summary object defined as { North: 5, East: 3, South: 4, West: 2 }, you should log:

// Example Code
// North: 5 attendees processed
// East: 3 attendees processed
// South: 4 attendees processed
// West: 2 attendees processed

// Step 24
// Now you can build a function for simulating the festival. Create an empty function named simulateFestival with parameters gates and timeBlock

// Step 25
// First, log the following message to the console: "\n" + timeBlock + " Simulation".

// Step 26
// Before starting the simulation, you need an object to track how many attendees each gate processes over all ticks. Call initializeThroughput() with gates and assign the result to a variable named throughputSummary.

// Step 27
// You need to know how many ticks the simulation should run. Recall that:

// Each gate has a queue array that shows how many attendees arrive at each tick.
// Since all gates have the same number of ticks, you can simply use the length of the first gate's queue array.
// Create a variable named maxTicks and assign it the value of gates[0].queue.length.

// This value will be used to control your simulation loop, ensuring each tick is processed for all gates.

// Step 28
// To keep track of which tick is currently being processed during the simulation, create a variable named tickIndex and assign it an initial value of 0.

// This variable will be used to loop through all ticks in your simulation and ensure each gate is processed in the correct order.

// Step 29
// You should now implement the main simulation loop. This loop will ensure that every gate is processed for each tick in the simulation until all ticks have been completed.

// Create an empty while loop that continues as long as tickIndex is less than maxTicks.

// Step 30
// Inside your while loop:

// Log the message, "\nTick " + (tickIndex + 1).
// Loop through each gate in the gates array and call handleGateAtTick() with these arguments:
// gates: The full array of gate objects.
// gate: The current gate being processed.
// tickIndex: The current tick position in the queue array.
// throughputSummary: The local object tracking total attendees processed per gate.
// Increment tickIndex by 1 to move to the next tick.

// Step 31
// To complete your simulateFestival function, display a summary of the simulation results. Call printSummary() with your local throughputSummary object.

// Step 32
// Finally, you can run your simulations.

// Begin with the morning shift. Call simulateFestival() with morningGates and "Morning".

// Step 33
// Simulate the night shift by calling simulateFestival() with nightGates and "Night".

// With that, your simulations are complete!

const morningGates = [
  { id: "North", capacity: 5, queue: [3, 6, 2, 4] },
  { id: "East", capacity: 3, queue: [2, 4, 3, 5] },
  { id: "South", capacity: 4, queue: [1, 2, 3, 1] },
  { id: "West", capacity: 2, queue: [4, 1, 2, 3] },
];

const nightGates = [
  { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
  { id: "East", capacity: 2, queue: [3, 3, 4, 2] },
  { id: "South", capacity: 5, queue: [2, 1, 2, 3] },
  { id: "West", capacity: 3, queue: [5, 2, 1, 4] },
];

function initializeThroughput(gates) {
  const summary = {};
  for (const gate of gates) {
    summary[gate.id] = 0;
  };
  return summary;
}

function processGateFlow(gate, tickIndex) {
  let currentTickQueue = gate.queue[tickIndex];
  let processed = 0;
  while (currentTickQueue > 0 && processed < gate.capacity) {
    currentTickQueue--;
    processed++;
  }
  return {
    processed: processed,
    overflow: currentTickQueue
  };
}

function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
  const currentIndex = gates.indexOf(currentGate);
  const nextGateIndex = (currentIndex + 1) % gates.length;
  gates[nextGateIndex].queue[tickIndex] += overflowAmount;
  console.log(
    overflowAmount + " attendees rerouted to " +
    gates[nextGateIndex].id
  );
}

function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
  console.log("\nProcessing " + gate.id + "...");
  console.log(
    gate.queue[tickIndex] + " attendees arriving."
  );
  const result = processGateFlow(gate, tickIndex);
  throughputSummary[gate.id] += result.processed;
  if (result.overflow > 0) {
    console.log(
      "Overflow of " + result.overflow +
      " attendees. Rerouting..."
    );
    rerouteOverflow(gates, gate, tickIndex, result.overflow);
  }
}

function printSummary(summary) {
  console.log("\nThroughput Summary");
  for (const gateId in summary) {
    console.log(
      gateId + ": " + summary[gateId] +
      " attendees processed"
    );
  }
}

function simulateFestival(gates, timeBlock) {
  console.log("\n" + timeBlock + " Simulation");
  const throughputSummary = initializeThroughput(gates);
  const maxTicks = gates[0].queue.length;
  let tickIndex = 0;
  while (tickIndex < maxTicks) {
    console.log("\nTick " + (tickIndex + 1));
    for (const gate of gates) {
      handleGateAtTick(gates, gate, tickIndex, throughputSummary);
    }
    tickIndex++;
  }
  printSummary(throughputSummary);
}

simulateFestival(morningGates, "Morning");
simulateFestival(nightGates,"Night");