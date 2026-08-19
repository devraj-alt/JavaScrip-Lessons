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

// if:
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

// else:
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

//else if:
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
}

//2. Switch Statement:
