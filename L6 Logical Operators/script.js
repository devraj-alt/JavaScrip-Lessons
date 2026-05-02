// Logical operators : NOT (!), OR (||), AND (&&)

// NOT (!) : Flips true to false and false to true.

console.log(!true);
console.log(!false);
console.log(Boolean(!"")); //0 is falsy, flipped to true
console.log(Boolean(!0)); //"" is falsy, flipped to true

// OR (||) : Only one condition needs to be true.

const hasCard = false
const hasCash = true

if (hasCard || hasCash) {
    console.log("You can pay");
} else {
    console.log("You can't pay");   
}

//NOTE:
true  || true   // true
true  || false  // true
false || true   // true
false || false  // false


// AND (&&) : Both conditions must be true for the result to be true.

const age = 20
const hasID = true

if (age >= 18 && hasID) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

// NOTE: If either one is false — the whole thing is false.

true  && true   // true
true  && false  // false
false && true   // false
false && false  // false




const canDrive = (driverAge, hasLicence) => {
    if (driverAge >= 18 && hasLicence) {
        console.log("Can drive");
    } else {
        console.log("Cannot drive");
    }
}

canDrive(17, false)
canDrive(20, true)
