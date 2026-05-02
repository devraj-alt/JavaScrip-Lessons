/* Declaring Variables -
1. Variables can be declared using 3 methods: var, let, and const.
2. Variables are named memory locations used to store data in memory. 
3. Variable names are case sensitive.
4. Variables can store different types of data: Numbers, Strings (text), Boolean values (true/false), Objects, Arrays.
*/
/* Diffrence between var, let and const
var – A variable that can be redeclared and updated, and has function scope.
let – A variable that can be updated but cannot be redeclared in the same scope.
const – A variable whose value cannot be updated or redeclared after it is assigned.
*/
//Syntax
const userName = 'Devraj';
console.log(userName)

var x = 10;
var x = 20; // redeclared
x = 30;     // updated
console.log(x);

let y = 10;
// let y = 20; // ❌ cannot redeclare
y = 20;       // ✅ can update
console.log(y);

const z = 10;
// const z = 20; // ❌ cannot redeclare
// z = 20;       // ❌ cannot update
console.log(z);

const accountId = 144553
let accountEmail = 'devraj@gmail.com'
var accountPassord = '12345'
accountCity = 'Guwahati' //In Javascript we can declater key and value without useing let, const, and var. But its not safe. why? 1. Harder to debug: other scripts could overwrite it without warning. 2. Can create security and maintenance issues. 3. Breaks “strict mode”.
let accountState; // Vraiable decleared but value not assigned.

//accountId = 212563
console.log(accountId); //TypeError: Assignment to constant variable not allowed.

accountEmail = 'dr@gmail.com'
accountPassord = '54321'
accountCity = 'Hydrabad'

console.table([accountEmail, accountPassord, accountCity, accountState])

//  Note: We don't use var in JavaScript anymore. Var does not respect scope { }. Use only