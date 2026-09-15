// Step 1
// In this workshop, you will build a heritage library catalog system. You will parse raw book data, search and group entries, validate data quality, and export results to different formats.

// Each catalog card is stored as a single string in the format "Title | Author | Year | Location", with fields separated by the pipe character (|).

// You will use an array of these strings throughout the workshop to build and test your catalog functions. Create an array named rawCatalogCards and add the following two strings to it:

// Example Code
// "From a Buick 8 | King, Stephen | 2002 | Shelf K7",
// "The Shining | King, Stephen | 1977 | Shelf K1"

// Step 2
// The rest of the catalog cards have been added. Notice the three entries near the end with missing fields; you will handle those in a later step.

// parseCard will take a raw catalog string and return a structured object with four properties: title, author, year, and location. For now, create a function parseCard with a parameter named rawString.

// Step 3
// The parseCard function will take a raw catalog string and return a structured object. Before building out your function, set up a way to see its output as you work.

// Call parseCard with rawCatalogCards[2] as the argument, assign the result to a variable named cardResult, and log cardResult to the console.

// Right now parseCard has no body, so it returns undefined. As you add code to the function over the next steps, the logged output will show you exactly what the function is returning at each stage.

// Step 4
// The first step in parsing a catalog card is separating the four fields. The .split() method breaks a string into an array of substrings at every occurrence of the separator you provide.

// For example:

// Example Code
// "The Shining | King, Stephen | 1977 | Shelf K1".split("|")
// // ["The Shining ", " King, Stephen ", " 1977 ", " Shelf K1"]
// Inside parseCard, call .split("|") on rawString and return the result. After this step, the console should show an array of four strings.

// Note: You may notice extra whitespace around the values. You will clean that up in the next step.

// Step 5
// As you can see from the output in the console, after splitting, each part still has extra leading and/or trailing whitespace. To clean every element, you need to process each one individually.

// This is a perfect use case for a for loop, which repeats a block of code once for each element in an iterable, such as an array:

// Example Code
// for (let i = 0; i < array.length; i++) {
//   // code to run on each iteration
// }
// i starts at 0 (the first index), the loop continues while i is less than the array's length, and i++ increases i by one after each iteration.

// Inside parseCard, declare an empty array named trimmedParts. Then add a for loop that iterates over parts. Leave the loop body empty for now, as you'll fill it in the next step.

// Step 6
// The .trim() method removes whitespace from both ends of a string. For example, " hello ".trim() returns "hello".

// Inside the loop body, push parts[i].trim() into trimmedParts. Then update the existing return statement to return trimmedParts instead of parts.

// After this step, the logged output should show clean values without extra spaces.

// Step 7
// Now that the parts are clean, you can transform them into a structured object. In JavaScript, objects use curly braces with "key: value" pairs. For example, { title: "Dune", year: 1965 }.

// Declare four variables: title, author, year, and location. Assign to each of them the corresponding element from trimmedParts. Then update the return statement to return an object with those four properties.

// Step 8
// Some catalog cards have missing fields. For example, entry 16 has a blank author, so parseCard currently returns an empty string for that field.

// The || operator provides a fallback: a || b evaluates to a when a is truthy, and b otherwise. Since an empty string is falsy, "" || "Unknown" evaluates to "Unknown".

// Update title, author, and location in the return statement to use || "Unknown" as a fallback. Leave year for the next step.

// Step 9
// The year field arrives as a string, but you need it as a number for a later calculation. Use parseInt() to convert it.

// The year can also be blank, so you need a fallback. The ternary operator condition ? valueIfTrue : valueIfFalse returns one of two values based on a condition.

// Update the year property in the return statement to:

// Example Code
// year: year ? parseInt(year) : "Unknown"

// Step 10
// parseCard has been tested and works correctly. The cardResult variable is no longer needed.

// Start by removing the const cardResult line and console.log(cardResult) line. Then create a function named parseCatalog that takes rawCards as a parameter. For now, declare an empty array named catalog inside the function and return it.

// Below the function, call parseCatalog(rawCatalogCards), assign the result to a variable named catalog, and log catalog.length.

// Step 11
// parseCatalog currently returns an empty array. To fill it, add a for loop inside the function that iterates over rawCards. Inside the loop, call parseCard on each element and push the result into catalog.

// Step 12
// With the catalog parsed, you can search it by field. findByAuthor will filter entries whose author contains a search term.

// Remove the console.log(catalog.length) statement.

// Then create a function named findByAuthor that takes catalog and author as parameters. Inside, declare a variable named searchTerm and set it to the lowercase version of author to enable case-insensitive matching later.

// Also declare a variable named results and assign it an empty array to hold the matches.

// Step 13
// To find matching authors, check each catalog entry one by one.

// Add an empty for loop inside findByAuthor to iterate over catalog. You will add the loop body in the next step.

// Step 14
// Inside the loop, check whether the current entry's author (converted to lowercase) includes searchTerm. The .includes() method returns true if a string contains another string as a substring. If the condition is true, push the entry into results. After the loop, return results

// Step 15
// It's time to verify that the search works. Stephen King has six books in the catalog.

// Call findByAuthor(catalog, "king") and assign the result to a variable named kingBooks. Log kingBooks.length to confirm the count.

// Then use a for loop to log each result. Use a template literal to include the title and year, like `${kingBooks[i].title} (${kingBooks[i].year})`.

// Step 16
// The kingBooks test code confirmed that findByAuthor works correctly. Before moving on to groupByDecade, clean up the console output by removing it.

// Remove the const kingBooks = ... line, console.log(kingBooks.length), and the for loop that displays the book titles and years.

// Step 17
// Now you'll build groupByDecade, which organizes the catalog by decade. Each key will be a string like "1970s" and each value an array of books from that period.

// Create a function named groupByDecade that takes catalog as a parameter. Inside, declare const grouped = {}. Add a for loop to iterate over catalog, and inside the loop declare const book = catalog[i].

// Step 18
// Some books have "Unknown" as their year. We will handle that edge case first.

// Inside the loop, check if book.year is equal to the string "Unknown". Then, check if grouped["Unknown"] doesn't exist yet and initialize it as an empty array. Push book into grouped["Unknown"].

// Finally, use continue to skip the rest of the loop body. The continue statement jumps directly to the next iteration.

// Step 19
// After the "Unknown" check, add the decade-grouping logic for books with numeric years. Declare const decade = Math.floor(book.year / 10) * 10. For example, Math.floor(1977 / 10) gives 197, times 10 gives 1970.

// Then declare const decadeKey = `${decade}s` to produce a string like "1970s".

// Use bracket notation to group the book: check if grouped[decadeKey] doesn't exist yet and initialize it as an empty array, then push book into it. Bracket notation is required here because the key is stored in a variable.

// Step 20
// The loop is complete. Return grouped from the function.

// Then, below the function, call groupByDecade(catalog) and assign the result to a variable named byDecade. Log byDecade to inspect the grouped result, and you should see an object with keys like "1950s", "1960s", "1970s", and so on, each pointing to an array of books from that decade.

// Step 21
// The byDecade log has served its purpose. Remove console.log(byDecade) from your code.

// Then, to make catalog entries easier to scan, create a function named renderEntry that takes entry as a parameter. Leave the function body empty for now. Below the function, log renderEntry(catalog[0]).

// Step 22
// Now fill in renderEntry. Declare a fallback constant for each field: const title = entry.title || "Unknown", and apply the same pattern for author, year, and location.

// Return a multi-line template literal that formats the entry as a library card. Use "-".repeat(25) for the top and bottom border, and include labeled lines for Title, Author, Year, and Location. For example, a labeled line for the title would look like Title: ${title}.

// Step 23
// Before trusting parsed data, start by validating required fields.

// Create a function named validateEntry that takes entry as a parameter. Declare let isValid = true.

// Add a validation check for title: set isValid = false if title is missing, falsy, or equals "Unknown".

// Return isValid. You will add checks for the other fields in the next steps.

// Step 24
// The same pattern applies to the other three fields. Add equivalent checks for author, year, and location.

// Note that isValid accumulates across all four checks: if any field fails, it becomes false and stays false even if the remaining checks pass. This means the function always inspects every field rather than stopping at the first problem.

// Step 26
// JSON (JavaScript Object Notation) is a standard format for sharing data between systems. JSON.stringify converts a JavaScript value into a JSON-formatted string.

// Start by removing the two validateEntry console.log calls, as they were only needed for testing. Then create a function named exportToJSON that takes catalog as a parameter. Return JSON.stringify(catalog, null, 2). The first argument is the data to convert. The second argument (null) means no custom filtering. The third (2) adds two-space indentation, making the output readable.

// Below the function, log exportToJSON(catalog.slice(0, 2)) to preview the JSON output for the first two entries.

// Step 27
// CSV (Comma-Separated Values) is a format used for spreadsheets and data import. Each line represents one entry with fields separated by commas.

// Start by removing the console.log(exportToJSON(...)) call, as it was only needed for testing. Then create a function named exportToCSV that takes catalog as a parameter. Inside, declare const header = "Title,Author,Year,Location" and const rows = [].

// Step 28
// Add a for loop over catalog. Inside the loop, declare const entry = catalog[i]. Build a row string with the four fields separated by commas and push it into rows.

// String fields need literal double-quote characters in the output (e.g. "King, Stephen"), so that commas inside values don't break the CSV format. Since year is a number, it doesn't need them.
// Step 29
// Now combine all rows into one CSV string you can export or share.

// After the first loop, declare let csv = header. Add another for loop to append each row to csv with a newline: csv = csv + "\n" + rows[i]. Return csv. Then, below the function, log exportToCSV(catalog) to preview the formatted output.

// Step 30
// Let's finish with a summary. Log catalog.length and Object.keys(byDecade).length to see total books and decade groups.

// Declare let oldestYear = Infinity and let newestYear = 0. Use a for loop over catalog: for each entry where the year is not "Unknown", update oldestYear if the year is smaller and newestYear if it is larger. Log both values.

// You have completed the Heritage Library Catalog workshop!

const rawCatalogCards = [
  "From a Buick 8 | King, Stephen | 2002 | Shelf K7",
  "The Shining | King, Stephen | 1977 | Shelf K1",
  "The Stand | King, Stephen | 1978 | Shelf K2",
  "It | King, Stephen | 1986 | Shelf K3",
  "Misery | King, Stephen | 1987 | Shelf K4",
  "Do Androids Dream of Electric Sheep? | Dick, Philip K. | 1968 | Shelf D5",
  "I, Robot | Asimov, Isaac | 1950 | Shelf A8",
  "Foundation | Asimov, Isaac | 1951 | Shelf A9",
  "Dune | Herbert, Frank | 1965 | Shelf H3",
  "Neuromancer | Gibson, William | 1984 | Shelf G8",
  "Snow Crash | Stephenson, Neal | 1992 | Shelf S6",
  "The Martian | Weir, Andy | 2011 | Shelf W5",
  "Ender's Game | Card, Orson Scott | 1985 | Shelf C2",
  "The Hitchhiker's Guide to the Galaxy | Adams, Douglas | 1979 | Shelf A1",
  "Ready Player One | Cline, Ernest | 2011 | Shelf C7",
  "The Dark Tower: The Gunslinger | King, Stephen | 1982 | Shelf K5",
  // edge cases: missing data
  "Unknown Title |  | 1975 | Shelf X1",
  "Mysterious Manuscript | Unknown Author |  | Shelf Z9",
  "Ancient Scroll | Anonymous | 850 | ",
];

function parseCard(rawString) {
  const parts = rawString.split("|");
  const trimmedParts = [];
  for (let i = 0; i < parts.length; i++) {
    trimmedParts.push(parts[i].trim());
  }
  const title = trimmedParts[0];
  const author = trimmedParts[1];
  const year = trimmedParts[2];
  const location = trimmedParts[3];
  return {
    title: title || "Unknown",
    author: author || "Unknown",
    year: year ? parseInt(year) : "Unknown",
    location: location || "Unknown"
  };
}

function parseCatalog(rawCards) {
  const catalog = [];
  for (let i = 0; i < rawCards.length; i++) {
    catalog.push(parseCard(rawCards[i]));
  }
  return catalog;
}

const catalog = parseCatalog(rawCatalogCards);

function findByAuthor(catalog, author) {
  const searchTerm = author.toLowerCase();
  const results = [];
  for (let i = 0; i < catalog.length; i++) {
    if (catalog[i].author.toLowerCase().includes(searchTerm)) {
      results.push(catalog[i]);
    }
  }
  return results;
}

function groupByDecade(catalog) {
  const grouped = {};
  for (let i = 0; i < catalog.length; i++) {
    const book = catalog[i];
    if (book.year === "Unknown") {
      if (!grouped["Unknown"]) {
        grouped["Unknown"] = [];
      }
      grouped["Unknown"].push(book);
      continue;
    }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
  }
  return grouped;
}

const byDecade = groupByDecade(catalog);

function renderEntry(entry) {
  const title = entry.title || "Unknown";
  const author = entry.author || "Unknown";
  const year = entry.year || "Unknown";
  const location = entry.location || "Unknown";
  return `${"-".repeat(25)}
Title: ${title}
Author: ${author}
Year: ${year}
Location: ${location}
${"-".repeat(25)}`;
}

console.log(renderEntry(catalog[0]));

function validateEntry(entry) {
  let isValid = true;
  if (!("title" in entry) || !entry.title || entry.title === "Unknown") {
    isValid = false;
  }
  if (!("author" in entry) || !entry.author || entry.author === "Unknown") {
    isValid = false;
  }
  if (!("year" in entry) || !entry.year || entry.year === "Unknown") {
    isValid = false;
  }
  if (!("location" in entry) || !entry.location || entry.location === "Unknown") {
    isValid = false;
  }
  return isValid;
}

function exportToJSON(catalog) {
  return JSON.stringify(catalog, null, 2);
}

function exportToCSV(catalog) {
  const header = "Title,Author,Year,Location";
  const rows = [];
  for (let i = 0; i < catalog.length; i++) {
    const entry = catalog[i];
    rows.push(`"${entry.title}","${entry.author}",${entry.year},"${entry.location}"`);
  }
  let csv = header;
  for (let i = 0; i < rows.length; i++) {
    csv = csv + "\n" + rows[i];
  }
  return csv;
}

console.log(exportToCSV(catalog));

console.log(catalog.length);
console.log(Object.keys(byDecade).length)

let oldestYear = Infinity;
let newestYear = 0;

for(let i = 0; i < catalog.length; i++){
  const entry = catalog[i];

  if(entry.year !== "Unknown"){
    if (entry.year < oldestYear){
      oldestYear = entry.year;
    }

    if(entry.year > newestYear){
      newestYear = entry.year;
    }
  }
}

console.log(oldestYear);
console.log(newestYear);

