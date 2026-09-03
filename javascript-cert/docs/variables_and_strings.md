```markdown
# Working with HTML, CSS, and JavaScript

While HTML and CSS provide website structure, JavaScript brings interactivity to websites by enabling complex functionality, such as handling user input, animating elements, and even building full web applications.

---

## Data Types in JavaScript

Data types help the program understand the kind of data it’s working with, whether it’s a number, text, or something else.

### Number

A number represents both integers and floating‑point values.  
- **Integers**: `7`, `19`, `90`  
- **Floating point**: numbers with a decimal point, e.g. `3.14`, `0.5`, `0.0001`.

### String

A string is a sequence of characters (text) enclosed in quotes.  
Examples: `"I like coding"`, `'JavaScript is fun'`.

### Boolean

A boolean represents one of two possible values: `true` or `false`.  
You can use a boolean to represent a condition, such as:
```javascript
let isLoggedIn = true;
```

### Undefined and Null

- **Undefined**: a variable that has been declared but not assigned a value.
- **Null**: an empty value; a variable intentionally assigned `null`.

### Object

An object is a collection of key‑value pairs, where the key is the property name and the value is the property value.

```javascript
let pet = {
  name: "Fluffy",
  age: 3,
  type: "dog"
};
```

Here, the `pet` object has three properties: `name`, `age`, and `type`, with values `"Fluffy"`, `3`, and `"dog"` respectively.

### Symbol

The `Symbol` data type is a unique and immutable value that may be used as an identifier for object properties. Even if two symbols are created with the same description, they are not equal:

```javascript
const crypticKey1 = Symbol("saltNpepper");
const crypticKey2 = Symbol("saltNpepper");
console.log(crypticKey1 === crypticKey2); // false
```

### BigInt

When a number is too large for the `Number` data type, you can use `BigInt` to represent integers of arbitrary length. Add an `n` to the end of the number to create a BigInt:

```javascript
const veryBigNumber = 1234567890123456789012345678901234567890n;
```

---

## Variables in JavaScript

Variables can be declared using the `let` keyword:

```javascript
let cityName;
cityName = "New York";
```

Variables declared with `let` can be reassigned:

```javascript
let cityName = "New York";
cityName = "Los Angeles";
console.log(cityName); // Los Angeles
```

You can also use `const` to declare a variable, but a `const` variable cannot be reassigned:

```javascript
const cityName = "New York";
cityName = "Los Angeles"; // TypeError: Assignment to constant variable.
```

`const` is typically used for constants that shouldn’t change, like `PI` or `MAX_SIZE`.

---

## Variable Naming Conventions

Follow these rules when naming variables:

- Use descriptive and meaningful names.
- Use **camelCase**: `cityName`, `isLoggedIn`, `veryBigNumber`.
- Do not start with a number; begin with a letter, `_`, or `$`.
- Avoid spaces and special characters except `_` and `$`.
- Do not use reserved keywords.
- Names are case‑sensitive: `age` and `Age` are different variables.

---

## Strings and String Immutability in JavaScript

Strings are sequences of characters enclosed in quotes and can be created with single or double quotes:

```javascript
let correctWay = 'This is a string';
let alsoCorrect = "This is also a string";
```

Strings are **immutable**: once created, their characters cannot be changed. However, you can reassign the variable to a new string:

```javascript
let firstName = "John";
firstName = "Jane"; // Reassigning the variable to a new value
```

---

## String Concatenation in JavaScript

Concatenation joins multiple strings or combines strings with variables.

### Using the `+` Operator

```javascript
let studentName = "Asad";
let studentAge = 25;
let studentInfo = studentName + " is " + studentAge + " years old.";
console.log(studentInfo); // Asad is 25 years old.
```

### Using the `+=` Operator

Useful for building a string incrementally:

```javascript
let message = "Welcome to programming, ";
message += "Asad!";
console.log(message); // Welcome to programming, Asad!
```

### Using the `concat()` Method

Joins two or more strings:

```javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);
console.log(fullName); // John Doe
```

---

## Logging Messages with `console.log()`

`console.log()` logs messages to the console and is helpful for debugging and testing:

```javascript
console.log("Hello, World!");
// Output: Hello, World!
```

---

## Semicolons in JavaScript

Semicolons mark the end of a statement, helping the JavaScript engine separate instructions:

```javascript
let message = "Hello, World!"; // first statement ends here
let number = 42;               // second statement starts here
```

They help prevent ambiguities and ensure statements are correctly terminated.

---

## Comments in JavaScript

Comments are ignored by the JavaScript engine and are used to explain code, make notes, or temporarily disable code.

- **Single‑line comments** use `//`:
  ```javascript
  // This is a single-line comment and will be ignored by the JavaScript engine
  ```

- **Multi‑line comments** use `/*` and `*/`:
  ```javascript
  /*
  This is a multi-line comment.
  It can span multiple lines.
  */
  ```

---

## JavaScript as a Dynamically Typed Language

JavaScript is dynamically typed: you don’t need to specify a variable’s data type when declaring it. The engine determines the type based on the assigned value:

```javascript
let error = 404;        // JavaScript treats error as a number
error = "Not Found";    // JavaScript now treats error as a string
```

In contrast, statically typed languages like C# would throw an error if you changed the type:

```csharp
int error = 404;          // value must always be an integer
error = "Not Found";      // This would cause an error in C#
```

---

## Using the `typeof` Operator

The `typeof` operator checks a variable’s data type and returns a string indicating the type:

```javascript
let age = 25;
console.log(typeof age);        // "number"

let isLoggedIn = true;
console.log(typeof isLoggedIn); // "boolean"
```

### A Known Quirk: `typeof null`

There’s a well‑known quirk where `typeof` returns `"object"` for `null`:

```javascript
let user = null;
console.log(typeof user); // "object"
```
```


```markdown
# JavaScript Strings Review

## String Basics

**Definition:** A string is a sequence of characters wrapped in either single quotes, double quotes, or backticks. Strings are primitive data types, and they are *immutable* — once a string is created, it cannot be changed.

### Accessing Characters from a String

To access a character from a string, you can use bracket notation and pass in the index number. An index is the position of a character within a string, and it is zero-based.

```javascript
const developer = "Jessica";
console.log(developer[0]); // J
```

### Newline Character (`\n`)

You can create a newline in a string by using the `\n` newline character.

```javascript
const poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);
```

### Escaping Strings

You can escape characters in a string by placing backslashes (`\`) in front of the quotes.

```javascript
const statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"
```

---

## Template Literals and String Interpolation

**Definition:** Template literals are defined with backticks (`` ` ``). They allow for easier string manipulation, including embedding variables directly inside a string — a feature known as *string interpolation*.

```javascript
const name = "Jessica";
const greeting = `Hello, ${name}!`; 
console.log(greeting); // "Hello, Jessica!"
```

---

## ASCII, Unicode, and Character Methods

**ASCII** (American Standard Code for Information Interchange) is a character encoding standard used to represent basic English characters using numeric values. Earlier lessons introduce `charCodeAt()` and `fromCharCode()` using ASCII examples.

**Unicode:** JavaScript strings use Unicode internally, specifically UTF‑16 encoding. For the first 128 characters (basic Latin letters, digits, and common symbols), the Unicode values match ASCII codes. This is why ASCII-based examples continue to work in JavaScript.

### The `charCodeAt()` Method

This method returns the UTF‑16 code unit of the character at a specified index. For basic Latin characters, this value matches the ASCII code.

```javascript
const letter = "A";
console.log(letter.charCodeAt(0)); // 65
```

### The `fromCharCode()` Method

This method converts an ASCII code into its corresponding character.

```javascript
const char = String.fromCharCode(65);
console.log(char); // A
```

---

## Common String Methods

### `indexOf()`

Used to search for a substring within a string. If found, it returns the index of the first occurrence; otherwise, it returns `-1`.

```javascript
const text = "The quick brown fox jumps over the lazy dog.";
console.log(text.indexOf("fox")); // 16
console.log(text.indexOf("cat")); // -1
```

### `includes()`

Checks if a string contains a specific substring. Returns `true` if found, otherwise `false`.

```javascript
const text = "The quick brown fox jumps over the lazy dog.";
console.log(text.includes("fox")); // true
console.log(text.includes("cat")); // false
```

### `slice()`

Extracts a portion of a string and returns a new string without modifying the original. It takes two parameters: the starting index and the optional ending index.

```javascript
const text = "freeCodeCamp";
console.log(text.slice(0, 4));  // "free"
console.log(text.slice(4, 8));  // "Code"
console.log(text.slice(8, 12)); // "Camp"
```

### `toUpperCase()` and `toLowerCase()`

Convert all characters to uppercase or lowercase, respectively.

```javascript
const text1 = "Hello, world!";
console.log(text1.toUpperCase()); // "HELLO, WORLD!"

const text2 = "HELLO, WORLD!";
console.log(text2.toLowerCase()); // "hello, world!"
```

### `replace()` and `replaceAll()`

- `replace()` finds and replaces the first occurrence of a specified value.
- `replaceAll()` replaces all occurrences.

Both return a new string because strings are immutable.

```javascript
const textA = "I like cats";
console.log(textA.replace("cats", "dogs")); 
// "I like dogs"

const textB = "I love cats and cats are so much fun!";
console.log(textB.replaceAll("cats", "dogs")); 
// "I love dogs and dogs are so much fun!"
```

### `repeat()`

Repeats a string a specified number of times.

```javascript
const text = "Hello";
console.log(text.repeat(3)); // "HelloHelloHello"
```

### Trimming Whitespace

- `trim()` removes whitespace from both ends.
- `trimStart()` removes whitespace from the beginning.
- `trimEnd()` removes whitespace from the end.

```javascript
const text1 = "  Hello, world!  ";
console.log(text1.trim());      // "Hello, world!"
console.log(text1.trimStart()); // "Hello, world!  "

const text2 = "  Hello, world! ";
console.log(text2.trimEnd());   // "  Hello, world!"
```

---

## Getting User Input: `prompt()`

The `prompt()` method (of the `window` object) displays a dialog box to get information from the user. It takes two arguments:
1. The message shown in the dialog.
2. An optional default value for the input field.

```javascript
const answer = window.prompt("What's your favorite animal?");
// Result depends on what the user enters
```

