//Operations
//Use of basic math:

let a = 10;
let b = 3;

console.log(a + b); // 13 (Addition)
console.log(a - b); // 7  (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.33 (Division)
console.log(a % b); // 1 (Modulus - remainder)
console.log(a ** b); // 1000 (Exponentiation)

// 1.String Operations: Joining two strings.

let strOne = "Hello"
let strTwo = "World"
let result = strOne + " " + strTwo
console.log(result);

// 2.Comparison Operators:
// Loose Equality
5 == "5"   // true  → loose equality (only values compared, type ignored)
let x = 5 // Number
let y = "5" // String
let xy = x == y
console.log(xy); // Compares values after converting types (type coercion)

// Strict Equality
5 === "5" // false → strict equality (value + type must match)
let ax = 5 // Number
let by = "5" // String
let axby = ax === by // Compares both type and values (no type conversion)
console.log(axby); 

// Not Equal
5 != 3 // true  → not equal (loose)
let c = 5
let d = 3
let cd = c != d // Compares ony value not type
console.log(cd);

// Strict Not Equal
5 !== "3" // true  → strict not equal (value or type different)
let e = 5
let f = "3"
let ef = e !== f // Compares both type and values (no type conversion)
console.log(ef);

// Other Comparision
5 > 3      // true  → greater than
let g = 5
let h = 3
let gh = g > h
console.log(gh);

5 < 3      // false → less than
let i = 5
let j = 3
let ij = i < j
console.log(ij);

5 >= 5     // true  → greater than or equal
let k = 5
let l = 5
let kl = k >= l
console.log(kl);

5 <= 5     // true  → less than or equal
let m = 5
let n = 4
let mn = m <= n
console.log(mn);


/*Challange Problem:
Ram’s age = 15
Sam’s age = 19

Question: Who is older?

Your Task:
Store the ages in variables.
Use comparison operators (>, <, >=) to check who is older.
Print the result using console.log.
*/

let ramAge = 15
let samAge = 19

const whoIsOlder = (ramAge > samAge) ? "Ram is Older than Sam." : "Sam is Older than Ram."

console.log(whoIsOlder);


if (ramAge > samAge) {
    console.log("Ram is older than Sam");
} else {
    console.log("Sam is older than Ram");
    
}

//Increment / Decrement Operators

/*Postfix (var++ or var--)
Meaning: Use the current value first, then increment or decrement.*/
//Example:
let postX = 5;
console.log(postX++); // prints 5 → then x becomes 6
console.log(postX);   // prints 6

/* Prefix (++var or --var)
Meaning: Increment or decrement first, then use the new value.*/
//Example:
let preY = 5;
console.log(++preY); // increments to 6 → prints 6
console.log(preY);   // prints 6