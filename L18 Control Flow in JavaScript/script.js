//Control Flow in JavaScript:

//1. Conditionals (if, else if, else) : 
/*Standard conditional logic using comparison operators:

>   :- greater than,
<   :- less than,
<=  :- less than or equal to,
>=  :- greater than or equal to,
==  :- loose equality (no type checking),
=== :- strict equality (type checking),
!=  :- not equal (no type checking),
!== :- strictly not equal (type checking)

*/

// if: Executes a block of code only if its condition is true.
// syntax: if (condition) {}

{
    if (true) {
    console.log(`if the condition is "true", only then the code inside the block will be executed.`);
    }

    if (false) {
    console.log(`if the condition is "false", the code inside the block will not be executed.`);
    }
}

{
    {
        if (2 == "2") {
        console.log(`2 = "2" : true -- here in condition we are comparing 2 a number and "2" a string with loose equality (==). loose equality does not do type checking.`);
    }
    }

    {
        if (2 === "2") {
            console.log(`2 = "2" : false -- here in condition we are comparing 2 a number with "2" a string with strict equality (===) which also does type checking.`);
        }
    }
}

// else: Executes a fallback block of code if all preceding condition were false.
/* syntax :- 
    if (condition) {
        } else {
    }
*/

{
    const minBalance = 1000

    if (minBalance < 1000) {
        console.log(`Balance is below ${minBalance}`);
    } else {
        console.log(`Minimum Balance available`);
    }

    {
        const checkAccountStatus = (currentBalance) => {
            const minRequiredBal = 1000

            if (currentBalance < minRequiredBal) {
                const shortage = minRequiredBal - currentBalance
                console.log(`Current Balance: ₹${currentBalance} | Below minium requirement by ₹${shortage}`);
            } else {
                const excess = currentBalance - minRequiredBal
                console.log(`Current Balance: ₹${currentBalance} | Minimum balance requirement met +₹${excess} surplus`);
            }
        }

        checkAccountStatus(400)
        checkAccountStatus(1500)
        checkAccountStatus(1026)
        checkAccountStatus(10455)
    }
    
}

//else if: Tests a new condition if the preceding if (or else if) condition is false.
// syntax:-
/*
    if (condition) {
    
    } else if (condition) {
    
    } else {
    
    }
*/

{
    const balance = 750

    if (balance < 500) {
        console.log(("Balance is less than 500"));
    } else if (balance < 750) {
        console.log("Balance is less than 750");
    } else if (balance <= 1000) {
        console.log("Balance is between 750 and 1000");
    } else {
        console.log("Balance is greater than 1000");
    }

    {
           {
        const userLoggedIn = true
        const debitCard = true
        const loggedInFromGoogle = false
        const loggedInFromEmail = true

        if (userLoggedIn && debitCard) {
            console.log("Allowed to buy course");
        }

        if (loggedInFromGoogle || loggedInFromEmail) {
            console.log("User logged In");
        }
    }
    }
}

//2. Switch: Compares a single value against a list of exact target values (case) using strict equality (===). The break keyword tells JavaScript to exit the switch statement immediately as soon as a matching case finishes executing. If break keyword is missing JavaScript will find a matching case and then continues executing all subsequent case blocks below it including default. 
// Syntax:-
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

{
    {
        const month = 3

        switch (month) {
        case 1:
            console.log("Jan");
            break;
        case 2:
            console.log("Feb");
            break;
        case 3:
            console.log("Mar");
            break;
        case 4:
            console.log("Apr");
            break;
        default:
            console.log("default case match");
            break;
        }
    }

    {
        const month = "Mar"

        switch (month) {
            case "Jan":
                console.log("January");
                // break;
            case "Feb":
                console.log("February");
                // break;
            case "Mar":
                console.log("March");
                console.log("From here JavaScript will execute all cases because break keyword is missing.");
                // break;
            case "Apr":
                console.log("April");
                // break;
            case "May":
                console.log("May");
                // break;
            case "Jun":
                console.log("June");
                // break;
            default:
                console.log("Month not on the list"); 
                // break;
        }
    }
}

//3. Truthy and Falsy Values: Every value in JavaScript evaluates to either true or false in boolean context.

{
    {
        const userEmail = []

        if (userEmail) {
        console.log("Got user email");
        } else {
        console.log("Don't have user email.");
        }
    }

    {
        const emptyObject = {}

        if (Object.keys(emptyObject).length === 0) {
            console.log(("Object is empty"));
        }
    }
}

// Falsy Value: false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Surprising Truthy Values: "0", "false", " " (space in string), [] (empty array), {} (empty object), function(){}

//4.1. Logical AND (&&):- && operator evaluates expressions from left to right and stops as soon as it hits the first falsy value, returning that value. If all values are truthy, it returns the last value.

{
    console.log("Apple" && "Banana");
    console.log("" && "Banana");
}

//4.2. Logical OR (||):- || operator evaluates expressions from left to right and stops as soon as it hits the first truthy value, returning that value. If all values are falsy, it returns the last value.

    //The Problem with ||: If a user has 0 messages, 0 || 5 evaluates to 5 because 0 is falsy.

{
    console.log("Apple" || "Banana");
    console.log("" || "Banana");
}

//4.3. Nullish Coalescing (??):- ?? operator is a strict version of ||. It returns the right-side value only if the left side is completely null or undefined. It treats valid but falsy values like 0 or an empty string "" as acceptable truthy values.

{
    let userMessage = 0
    console.log(userMessage || 5);
    console.log(userMessage ?? 5);
}
//4.4. Ternary (?):- The ? operator works alongside a : to create a one-line if-else
    // The format is: condition ? valueIfTrue : valueIfFalse.

{
    let age = 20
    let status = age >= 18 ? "Adult" : "Minor";
    console.log(status);
}