//Number Methods in JavaScript:

const balance = new Number(100)
console.log(balance); //Number {100}

// 1. toString() - converts number to string
console.log(balance.toString()); //"100"
console.log((typeof balance.toString())); // "string"

// 2. toFixed() - rounds to given decimal place, returns STRING
console.log(balance.toFixed(2)); //"100.00"
console.log(balance.toFixed(0)); // "100"

const price = 99.4567
console.log(price.toFixed(2)); // "99.46" <- useful for prices

// 3. toPrecision() - total number of significant digits, returns STRING
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // "123.9"
console.log(otherNumber.toPrecision(6)); // "123.897"
console.log(otherNumber.toPrecision(2)); // "1.2e+2" <- ← scientific notation

// 4. toLocaleString() — formats number based on region
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // "10,00,000"
console.log(hundreds.toLocaleString('en-US')); // "1,000,000"

// 5. Number() — converts other types to number
console.log(Number("42"));        // 42
console.log(Number("3.14"));      // 3.14
console.log(Number(""));          // 0
console.log(Number("Devraj"));    // NaN
console.log(Number(true));        // 1
console.log(Number(false));       // 0
console.log(Number(null));        // 0
console.log(Number(undefined));   // NaN

// 6. parseInt() — grabs whole number from string, ignores rest
console.log(parseInt("42px"));    // 42
console.log(parseInt("3.99"));    // 3  ← decimals ignored
console.log(parseInt("abc"));     // NaN

// 7. parseFloat() — grabs decimal number from string
console.log(parseFloat("3.14px")); // 3.14
console.log(parseFloat("42"));     // 42

// 8. Number.isInteger() — checks if value is a whole number
console.log(Number.isInteger(42));   // true
console.log(Number.isInteger(3.14)); // false

// 9. Number.isNaN() — checks if value is NaN
console.log(Number.isNaN(NaN));      // true
console.log(Number.isNaN(42));       // false
console.log(Number.isNaN("hello"));  // false ← only true for actual NaN

// 10. Number.isFinite() — checks if value is a finite number
console.log(Number.isFinite(42));       // true
console.log(Number.isFinite(Infinity)); // false

// Math Properties:

console.log(Math.PI);
console.log(Math.E);

// 1. Math.round() — rounds to nearest whole number
console.log(Math.round(4.4));  // 4
console.log(Math.round(4.5));  // 5
console.log(Math.round(4.9));  // 5

// 2. Math.ceil() — always rounds UP
console.log(Math.ceil(4.1));   // 5
console.log(Math.ceil(4.9));   // 5
console.log(Math.ceil(-4.1));  // -4 ← negative goes toward zero

// 3. Math.floor() — always rounds DOWN
console.log(Math.floor(4.9));  // 4
console.log(Math.floor(4.1));  // 4
console.log(Math.floor(-4.1)); // -5 ← negative goes away from zero

// 4. Math.trunc() — removes decimal, keeps integer part
console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(-4.9)); // -4 ← just removes decimal, no rounding

// ── ARITHMETIC ───────────────────────────────────────────────

// 5. Math.abs() — removes negative sign
console.log(Math.abs(-10));    // 10
console.log(Math.abs(10));     // 10

// 6. Math.pow() — raises to a power
console.log(Math.pow(2, 10));  // 1024 — 2 to the power of 10
console.log(Math.pow(3, 3));   // 27

// 7. Math.sqrt() — square root
console.log(Math.sqrt(25));    // 5
console.log(Math.sqrt(144));   // 12
console.log(Math.sqrt(2));     // 1.4142135623730951

// 8. Math.cbrt() — cube root
console.log(Math.cbrt(27));    // 3
console.log(Math.cbrt(125));   // 5

// ── MIN / MAX ─────────────────────────────────────────────────

// 9. Math.max() — largest value
console.log(Math.max(1, 5, 3, 9, 2));  // 9
console.log(Math.max(10, 20, 30));     // 30

// 10. Math.min() — smallest value
console.log(Math.min(1, 5, 3, 9, 2));  // 1
console.log(Math.min(10, 20, 30));     // 10

// ── RANDOM ───────────────────────────────────────────────────

// 11. Math.random() — random decimal between 0 and 1
console.log(Math.random()); // 0.7362917263 (different every time)

// Random whole number between 1 and 10:
const random1to10 = Math.floor(Math.random() * 10) + 1;
console.log(random1to10);

// Random whole number between 1 and 100:
const random1to100 = Math.floor(Math.random() * 100) + 1;
console.log(random1to100);

// Random whole number between MIN and MAX (reusable formula):
const min = 10;
const max = 20;
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInRange); // between 10 and 20