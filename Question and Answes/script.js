//Practice questions:
//Q1
{
let a = "5"
let b = 10
console.log(a + b); //"510" - type coercion.
console.log(typeof (a + b)) //string - when one side is string.
}

{
//Q2
let a = "10"
let b = "5"
console.log(a - b); // 5 - JS automatically converts both sides to numbers.
console.log(typeof (a - b)) // number
}

{
 //Q3
 let a = null //is object type but in math its value is 0
 let b = undefined // undefined is when a variable is decleared but its value is not defined so in math is becomes NaN and NaN type is number
 console.log(a + b); // NaN
 console.log(typeof (a + b)); // number
}

{
 //Q4
 console.log(0 == false); // true - type conversion allowed. 0 is number and false is boolean, loosely equal.
 console.log(0 === false); // false - type conversion is not allowed. 0 is number and false is boolean, strict equal.
 console.log("" == false); // true - type conversion allowed. "" is string and false is boolean, loosely equal.
 console.log("" === false); // false - type conversion is not allowed. "" is string and false is boolean, strict equal.
}

{
//Q5
    let name = "Devraj"
  console.log(name.length) // 6 - total length of a string
  console.log(name.toUpperCase()) // DEVRAJ - converts all characters to upper case.
  console.log(name.slice(0, 3)) // Dev - extracts index 0, 1, 2. Start with 0 and end before 3.
  console.log(name.includes("raj")) // true - it finds whether it includes the characters.
  console.log(name.replace("Devraj", "Dev")) // Dev - it replaces the the string.
}

{
//Q6
    let num = 7.859

  console.log(Math.round(num)) // 8 - rounds to nearest
  console.log(Math.ceil(num)) // 8 - rounds up
  console.log(Math.floor(num)) // 7 - rounds down
  console.log(num.toFixed(2)) // 7.86 - fixes how hown many numbers to show after decimal.
  console.log(Number.isInteger(num)) // false - decimal number are not integers.
}

{
//Q7
  const canVote = (age) => {
    if (age >= 18) {
      return "You can vote"
    } else {
      return "You cannot vote"
    }
  }

  console.log(canVote(20)) // "You can vote" 
  console.log(canVote(15)) // "You cannot vote"
  console.log(canVote(18)) // "You can vote"
  console.log(canVote("20")) // "You can vote" ** apart from + operator all other operators converts string in to number for comparision unless its === strick equal.
}

{
//Q8
  let a = 10
  let b = 3

  console.log(a % b) // 1 - returns the remainder.
  console.log(a ** b) // 1000 - returns the first operand rising to the power of the second operand.
  console.log(Math.sqrt(144)) // 12 - what number multiplied by itself.
  console.log(Math.abs(-50)) // 50 - returns absolute value. If number is negative it returns the absolute positive number.
  console.log(Math.max(10, 3, 99, 45, 2)) // 99 - returns the largest number.
}

{
  
}