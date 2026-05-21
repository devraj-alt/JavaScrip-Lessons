SORTING RULES

Numbers:
```js
const nums = [3, 1, 4, 1, 5, 9, 2]
nums.toSorted((a, b) => a - b) // [1,1,2,3,4,5,9] — small to large
nums.toSorted((a, b) => b - a)  // [9,5,4,3,2,1,1] — large to small
```
Strings:
```js
const words = ["banana", "apple", "kiwi", "mango"]

words.toSorted()                               // A to Z (default)
words.toSorted((a, b) => a.localeCompare(b))   // A to Z (explicit)
words.toSorted((a, b) => b.localeCompare(a))   // Z to A
words.toSorted((a, b) => a.length - b.length)  // shortest first
words.toSorted((a, b) => b.length - a.length)  // longest first
```
Objects:
```js
const people = [
  { name: "Devraj",  age: 34 },
  { name: "Tabitha", age: 28 },
  { name: "Rahul",   age: 19 }
]

// by number property
people.toSorted((a, b) => a.age - b.age) // age small to large
people.toSorted((a, b) => b.age - a.age) // age large to small

// by string property
people.toSorted((a, b) => a.name.localeCompare(b.name)) // name A to Z
people.toSorted((a, b) => b.name.localeCompare(a.name)) // name Z to A

// by string property length
people.toSorted((a, b) => a.name.length - b.name.length) // shortest name first
people.toSorted((a, b) => b.name.length - a.name.length) // longest name first
```
/*
Numbers/Dates  →  a - b  (small first)   b - a  (large first)
Strings        →  a.localeCompare(b)     b.localeCompare(a)
Objects        →  access property first, then apply number or string rule
toSorted() — modern, returns NEW array, original untouched
sort()     — old, MUTATES original array - avoid
*/