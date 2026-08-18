//Immediately Invoked Function Expression (IIFE): is a JavaScript function that is defined and executed immediately after its creation.

//Notes:
//1. The Two Parentheses ()():The First set wraps the function to turn it into an expression; the second set executes it immediately.
//2. The Semicolon ; : Always end an IIFE with a semicolon or JavaScript will throw a TypeError when it reads the next statement.
//3. Global Scope Isolation: variables declared inside an IIFE stay completely private and don't pollute the global window object.

const dbStatus = (() => {
    console.log(`DB CONNECTED`);
})()

const iife = (() => {
    console.log(`Immediately Invoked Function Expression`);
})()

const paraIife = ((name) => {
    console.log(name);
})("Devraj")

//# A function call cannot be followed by the const keyword. To prevent a syntax crash, JavaScript automatically inserts a semicolon.

{
    (()=> {
    console.log("Devraj")
})() //Forgot to write semicolon.

    (() => {
        console.log("Roy")
    })() // TypeError: (intermediate value)(...) is not a function
}
