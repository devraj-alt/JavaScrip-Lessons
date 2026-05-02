//Comparing datatypes

//1. Loose equality : It compares values but first tries to convert them to same type.

5 == "5" // true
//JS sees a number and a string. It converts the string into number first, then compares the values. This conversion is called type coercion and it causes unexpected bugs.

0 == false // true - false becomes 0
"" == false // true - both become 0
null == undefined // true - specific rule
/* null and undefined both mean nothing, just in diffrent situations.
null: we intentionally set it to nothing on "purpose".
undefined : JS says never given a value. */

// 2. Strict equality : It compares both the type and value. No conversion.

5 === "5" // false - number vs string, diffrent types
5 === 5 // true - same value and type
0 === false // false - number vs boolean

//NOTE: Always use ===

const user = "Devraj"

const greet = (user) => {
    if (!user) { // here "!user" checks for all falsy values - "", 0, null, undefined, false, NaN
        alert("Please enter your name")
    } else {
        console.log(user);
    }
}

greet(user)

//3. Greater/less than

const greterOrLess = (paraOne, paraTwo) => {
   if (paraOne > paraTwo) {
    console.log(`${paraOne} is greater than ${paraTwo}`);
   } else if (paraTwo > paraOne) {
    console.log(`${paraTwo} is greater than ${paraOne}`);
   } else {
    console.log(`both ${paraOne} and ${paraTwo} are equal`);
   }
}

greterOrLess(10, 5)
greterOrLess(5, 7)
greterOrLess(6, 6)

//4. Greater than or equal (>=): means greater than or equal to — true if left is bigger or the same.

//5. Smaller than or equal (<=) : means less than or equal to — true if left is smaller or the same.

//6. Strictly not equal (!==) : means strictly not equal — opposite of ===