"use strict"; // This will treat code as a newer version of JavaScript.
/*
1. Primitive Data Types
Primitive values are immutable (cannot be changed directly) and stored by value.

Number => Numeric values (integers, floats)
let age = 25;
Note:** NaN is a special value of the number datatype.

String => Text values
let name = "Devraj";

Boolean => True or false
let isLoggedIn = true;

Undefined => Variable declared but not assigned a value
let x; console.log(x); // undefined

Null => Explicitly “no value”
let data = null;

Symbol => Unique identifiers
let sym = Symbol("id");

BigInt => Very large integers beyond Number.MAX_SAFE_INTEGER
let big = 123456789012345678901234567890n;
*/

let age = 30
let userName = 'Devraj'
let isAdmin = false
let city;
let user = null
let bigNumber = 123456789012345678901234567890n
let id = Symbol("id")

console.log(typeof age);
console.log(typeof userName);
console.log(typeof isAdmin);
console.log(typeof user); // null is object
console.log(typeof city); // undefined is a type in JavaScript.
console.log(typeof bigNumber);
console.log(typeof id);

/*2. Non-Primitive (Reference) Data Types
These are objects stored by reference, meaning the variable holds a reference to the actual object in memory.

Object => Key-value pairs
let person = {name: "Devraj", age: 25};

Array => Ordered list of values
let colors = ["red", "green", "blue"];

Function => Reusable block of code
function greet() { console.log("Hi"); }

Date => Date object
let today = new Date();

RegExp => Regular expression
let pattern = /abc/i;
*/

let person = { name: "Devraj", age: 25 };
console.table(person);

let fruits = ["apple", "banana", "mango"];
console.table(fruits);

function greet(name) {
  console.log("Hello " + name);
}
greet("Devraj");
console.log(typeof greet)

let today = new Date();
console.log(today);

let regex = /abc/i;
console.log(regex.test("ABC"));
console.log(regex.test("xyz"));



