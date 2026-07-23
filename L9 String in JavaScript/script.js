//Any text wrapped in quotes

let single   = 'Hello';        // single quotes
let double   = "Hello";        // double quotes
let template = `Hello`;        // backticks (template literal)

//String index : Every character in a string has a position number starting from 0.

let name = "Devraj";

//  D  e  v  r  a  j
//  0  1  2  3  4  5

console.log(name[0]); // "D"
console.log(name[3]); // "r"
console.log(name[6]); // undefined — doesn't exist

//String length:
let userName = "Devraj";
console.log(userName.length); // 6

//Most important string methods::

let str = "  Hello World  ";

//Case
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

//Trim whitespace
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

//Check content
console.log(str.includes("World"));
console.log(str.startsWith("  He"));
console.log(str.endsWith("  "));

//Find position
console.log(str.indexOf("World"));
console.log(str.indexOf("xyz"));

// Extract part of string
console.log(str.slice(2, 7));
console.log(str.slice(-6));

// Replace
console.log(str.replace("World", "Devraj"));

// Split into array
console.log("red,green,blue".split(","));
console.log("Hello".split(""));

// Repeat
console.log("Ha".repeat(3));

//Template literals:

const myName = "Devraj"
const city = "Guwahati"
const age = 30

//Old way - messy
console.log("My name is " + name + " and I'm from " + city);

//Template literal - clean
console.log(`My name is ${name} and I'm from ${city}.`);

//String is immutable:
//You cannot change a character directly:

let urName = "Devraj";
urName[0] = "X";          // does nothing
console.log(urName);      // "Devraj" — unchanged

//To change it you have to create a new string:
let hrName = "Devraj";
let newHrName = "X" + hrName.slice(1);
console.log(newHrName);   // "Xevraj"

//READ MORE ABOUT STRING METHODS ON MDN
