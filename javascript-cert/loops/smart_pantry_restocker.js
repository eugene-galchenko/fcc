// Build a Smart Pantry Restocker
// In this lab, you will build a small pantry management program using basic JavaScript concepts like arrays, objects, loops, and conditionals.

// You will simulate receiving a shipment of pantry items, deciding what to do with each item, and organizing the results for storage.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// The rawData array contains pipe-separated strings with the format sku|name|qty|expires|zone, where zone is optional.

// User Stories:

// You should implement a parseShipment(rawData) function that takes an array of strings and returns an array of objects with { sku, name, qty, expires, zone } properties.

// Duplicate sku values in the shipment should be ignored.
// When the zone segment is not provided, it should default to "general".
// The qty value should be converted to a number.
// You should implement a planRestock(pantry, shipment) function that compares the current pantry with the incoming shipment and returns an array of actions in the form { type, item }, where type is one of "restock", "discard", or "donate", and item is the parsed shipment object.

// The pantry parameter is an array of objects with the same shape as a parsed shipment item ({ sku, name, qty, expires, zone }).

// If a shipment item has a qty of 0 or less, the action type should be "discard", regardless of whether the item exists in the pantry.
// Otherwise, if the shipment item's sku already exists in the pantry, the action type should be "restock".
// Otherwise (the shipment item's sku does not exist in the pantry), the action type should be "donate".
// You should implement a groupByZone(actions) function that groups the actions into storage zones based on each item's zone property. The function should return an object where each key is a zone name and the value is an array of actions belonging to that zone. For example, if actions contain items with zones "fridge" and "pantry", the result should be { fridge: [...], pantry: [...] }.

// You should implement a clonePantry(pantry) function that returns a deep copy of the pantry so planning changes do not affect the original list. A deep copy means creating a new array with new objects, so modifying the copy does not change the original pantry.

// You should use all of the functions together to process a shipment and log the final grouped result object to the console.

// Tests:
// Waiting:1. You should define a function named parseShipment that accepts one array of strings called rawData as parameter.
// Waiting:2. Your parseShipment function should convert shipment strings in the array into objects with the properties: sku, name, qty, expires, and zone.
// Waiting:3. Duplicate SKUs in the shipment should be ignored.
// Waiting:4. When zone is not present in a shipment string, you should assign it to general.
// Waiting:5. The qty value should be converted into a number.
// Waiting:6. You should define a function named planRestock that accepts two parameters: pantry and shipment.
// Waiting:7. Your planRestock function should return an array of actions with the properties of type and item.
// Waiting:8. Items with a quantity of 0 or less in shipment should create an action with type discard, regardless of whether the item is in the pantry.
// Waiting:9. When a shipment item already exists in the pantry (same sku), the action should be restock.
// Waiting:10. If a shipment item does not exist in the pantry, the action should be "donate".
// Waiting:11. You should define a function named groupByZone that accepts one parameter called actions.
// Waiting:12. Your function groupByZone should return the actions grouped by the zone property of each object.
// Waiting:13. Your groupByZone function should correctly group actions with the right content and count.
// Waiting:14. You should define a function named clonePantry that accepts one parameter called pantry.
// Waiting:15. clonePantry should return a new array instead of the original pantry array.
// Waiting:16. The objects inside the cloned pantry should also be new objects (deep copy).
// Waiting:17. The functions should work together to process a shipment and group the resulting actions.
// Waiting:18. You should log the resulting actions grouped by zones.

const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const result = [];

  for (const raw of rawData) {
    const parts = raw.split("|");

    let isDuplicate = false;
    for (const item of result) {
      if (item.sku === parts[0]) {
        isDuplicate = true;
        break;
      }
    }
    if (isDuplicate) {
      continue;
    }

    const parseResult = {
      sku: parts[0],
      name: parts[1],
      qty: Number(parts[2]),
      expires: parts[3],
      zone: parts[4] || "general"
    };

    result.push(parseResult);
  }

  return result;
}

function planRestock(pantry, shipment) {
  const actions = [];

  for (const ship of shipment) {
    if (ship.qty <= 0) {
      actions.push({ type: "discard", item: ship });
    } else {
      let existsInPantry = false;
      for (const item of pantry) {
        if (item.sku === ship.sku) {
          existsInPantry = true;
          break;
        }
      }

      if (existsInPantry) {
        actions.push({ type: "restock", item: ship });
      } else {
        actions.push({ type: "donate", item: ship });
      }
    }
  }

  return actions;
}

function groupByZone(actions) {
  const zones = {};

  for (const action of actions) {
    const zone = action.item.zone;

    if (!zones[zone]) {
      zones[zone] = [];
    }

    zones[zone].push(action);
  }

  return zones;
}

function clonePantry(pantry) {
  const copy = [];

  for (const item of pantry) {
    const newItem = {
      sku: item.sku,
      name: item.name,
      qty: item.qty,
      expires: item.expires,
      zone: item.zone
    };
    copy.push(newItem);
  }

  return copy;
}

// Собираем всё вместе
const parsed = parseShipment(rawData);
const pantryCopy = clonePantry(pantry);
const actions = planRestock(pantryCopy, parsed);
const grouped = groupByZone(actions);

console.log(grouped);