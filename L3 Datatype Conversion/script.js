//Datatype Conversion (type casting)

//Types of Datatype Conversion
//1. Implicit Conversion (Type Casting): Done automatically by JavaScript.

let autoString = "5" + 2
console.log(typeof autoString); // output will be string. Why? In JavaScript + operator is used to concatinate two strings. When adding a string with number JavaScript automatically converts number into string.

let autoNumaric = "5" - 2
console.log(typeof autoNumaric); // output will be number. Why? Unlike + operator - , *, / operators perform mathematical operations in JavaScript. So, when using -, *, / JavaScript converts string into number.

//2. Explicit Conversion: Done manually by the programmer.
//Convert to String

let numToStr = 100
console.log(typeof numToStr) //Output: "number" → the original variable is a number

console.log(String(numToStr));
// String() is a global function that converts **any value** to a string.
// Works with numbers, booleans, null, undefined, objects, etc.
// Never throws an error

console.log(numToStr.toString());
// .toString() is a **method** of objects (numbers, booleans, arrays, etc.).
// Converts the value it is called on to a string
// Cannot be called on null or undefined → will throw an error

let newStr = numToStr.toString() // Here, we convert numToStr into a string and store it in a new variable
console.log(typeof newStr); // Output: "string" → type changes because the value is now a string

//Convert to Number

let strToNum = "123"
console.log(typeof strToNum); // Output: "string"

console.log(Number(strToNum)); // Output: 123 "number".
//Number() is a global function
//It tries to convert the entire value into a number.
//Use case: strict conversion where the entire string must be numeric.
//Example of failure: Number("123abc") // NaN

console.log(parseInt(strToNum)); // Output: 123 "number".
//parseInt() converts a string to an integer.
//It reads digits from the start and stops at the first invalid character.
//Use case: extracting integer from a string, can ignore trailing non-numeric characters.
//Example with extra characters:
//parseInt("123abc") // 123
//parseInt("abc123") // NaN

console.log(parseFloat(strToNum)); //Output: 123 "number".
//parseFloat() converts a string to a floating-point number.
//Similar to parseInt(), but supports decimal numbers.
//Use case: when the string might contain decimal numbers.
//Example with decimals: parseFloat("123.45abc") // 123.45

//Convert to Boolean
/* 
Rules:
0, "", null, undefined, NaN → false
Everything else → true
*/

console.log(Boolean(1));    // true
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false
console.log(Boolean("Devraj")); // true
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false


//Example of converting object to string:
let obj = {
    phone: 9864098640,
    age: 25
}
console.log(typeof obj) // datatype: "object"

let objToStr = String(obj)
console.log(typeof objToStr); // datatype: "string"