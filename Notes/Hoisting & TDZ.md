_JavaScript Hoisting & TDZ Notes:_

1. Creation Phase: JavaScript reads through the entire script, notes down all function and variable names and reserves space in memory.

2. Execution Phase: JavaScript runs the code line by line from top to bottom.

_Regular Function:_

When we write a regular function declaration, JavaScript saves both the name and the function body in memory during creation phase.

//Calling the function _before_ it is declared in code
```
console.log(addOne(5)) // 6

function addOne(num) {
    return num + 1
}
```
_Why does this work?_

JavaScript saw _function addOne_ and saved the whole function in memory in phase 1.
In phase 2, when line one calls addOne(5), JavaScript already has everything it needs to calculate and return 6.

_Arrow Functions with const or let:_

Arrow functions are stored inside variables. In phase 1, JavaScript reserves the variable name, but locks it inside a temporary state called the Temporal Dead Zone (TDZ)

```
// Calling the function _before_ initialization line
console.log(addOne(5)) // Error

const addOne = (num) => {
    return num + 1
}
```
JavaScript registers the variable name _addOne_ in memory, but marks it as Uninitialized (Locked in TDZ). It does not save the function body yet.

JavaScript tries to call addOne(5)
JavaScript finds the name _addOne_ in memory, sees it is locked in TDZ, and stops execution immediately.
_ERROR: ReferenceError: Cannot access 'addOne' before initialization_
But when function is called after the initialization, it returns the result without error.

_Arrow Functions with var:_

```
console.log(addOne(5)) // Error

var addOne = (num) => {
    return num + 1
}
```
_var_ variable are hoisted and automatically set to undefined in creation phase.
JavaScript tries to run _addOne(5)_, which translates to calling undefined(5).
_Error:_ TypeError: addOne is not a function
But when function is called after the initialization, it returns the result without error.