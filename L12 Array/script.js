//Array - array is a object in which we can store collection multiple item in a single variable. Javascript arrays are resizable and can contain mix of data types. Array are 0-indexed. Array create copy of source object.

{
const arr = [1, 2, 3, 4, 5]
const hero = ["ironman", "captain america"]
const arr2 = new Array(1, 2, 3, 4)
console.log(arr[0]);
}

{
    //Array methods-
//1. push() :
let pushMethod = [1,2,3,4,]
pushMethod.push(5)
console.log(pushMethod);

//2. pop() :
let popMethod = [1,2,3,4,5]
popMethod.pop()
console.log(popMethod);

//3. unshift() :
let unshiftMethod = [1,2,3,4,5]
unshiftMethod.unshift(0)
console.log(unshiftMethod);

//4. shift() :
let shiftMethod = [0,1,2,3,4,5]
shiftMethod.shift()
console.log(shiftMethod);

//5. includes() :
let includesMethod = [0,1,2,3,4,5]
console.log(includesMethod.includes(4));

//6. indexOf() :
let indexOfMethod = [1,2,3,4,5]
console.log(indexOfMethod.indexOf(3));

//7. join() :
let arrA = ["devraj", "roy"]
console.log(arrA.join().replace(/,/g, ""));

//6. slice() :
let sliceMethod = [1,2,3,4,5]
console.log(sliceMethod);

console.log(sliceMethod.slice(1, 3));

//7. splice() :
let spliceMethod = [1,2,3,4,5]
console.log(spliceMethod);
console.log(spliceMethod.splice(1, 3));
}

{
const marvelHeros = ["thor", "irinman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

marvelHeros.push(dcHeros) //this will create nested array
console.log(marvelHeros);
}

{
const marvelHeros = ["thor", "irinman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]
const allHeros = marvelHeros.concat(dcHeros) //concat merge two or more arrays.
console.log(allHeros);
}

{
//spread operator:
const marvelHeros = ["thor", "irinman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]
const allHeros = [...marvelHeros, ...dcHeros] //
console.log(allHeros);
}

{
    // flat()
    const nestedArr = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
    const flatArr = nestedArr.flat(Infinity)
    console.log(flatArr);   
}

{
    console.log(Array.isArray("devraj"));
    console.log(Array.from("devraj"));
    console.log(Array.from({length: 5}, (_, i) => i++));
    console.log(Array.from({length: 1}, () => "devraj"))

    let score1 = 100
    let score2 = 200
    let score3 = 300

    console.log(Array.of(score1, score2, score3));
    console.log(Array.of("devraj"));
    
{
    //notes:
    // Array.from()  vs  .split()
// ── split() ──────────────────────────────────────────────────
// - STRING method only
// - Breaks a string into an array based on a separator
// - Cannot be used on numbers, objects, or Sets directly

"devraj".split("")      // ["d","e","v","r","a","j"] — every character
"a,b,c".split(",")      // ["a","b","c"] — split by comma
"Hello World".split(" ")// ["Hello","World"] — split by space


// ── Array.from() ─────────────────────────────────────────────
// - More GENERAL purpose — works on strings, Sets, Maps,
//   and array-like objects
// - Can also GENERATE arrays using a mapping function

// same result as split, but works because strings are iterable
Array.from("devraj")    // ["d","e","v","r","a","j"]

// converts a Set into an array (alternative to spread operator)
Array.from(new Set([1,2,2,3]))   // [1, 2, 3]
// same as: [...new Set([1,2,2,3])]

// GENERATE an array of a given size with custom values
// this is something split() can NEVER do
Array.from({length: 5}, (_, i) => i + 1)
// [1, 2, 3, 4, 5]

Array.from({length: 3}, () => "hi")
// ["hi", "hi", "hi"]


// ── WHEN TO USE WHICH ────────────────────────────────────────
//
// Splitting a STRING by a separator (space, comma, etc)
//   → use .split()            ✅ simplest, most common
//
// Converting a Set/Map to an array
//   → use spread [...set]     ✅ shorter
//   → or Array.from(set)      ✅ same result, more explicit
//
// Generating a NEW array with a specific length + pattern
//   → use Array.from({length: n}, callback)   ✅ only option
//
// ============================================================
// SIMPLE RULE
// ============================================================
// Splitting existing string text        → split()
// Converting Set/Map/array-like to array → Array.from() or spread
// Creating a brand new array from scratch → Array.from() with callback
// ============================================================
}
}