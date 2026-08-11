Scope: in JavaScript refers to the accessibility of variables, functions and objects within a specific region of code during execution. It defines where in a program a variable can be accessed or modified, amd where it is completely hidden and unreachable.

* Global Scope: Any variable declared at the top level of script outside of function or {} belongs to the global scope. It can be accessed anywhere in the script.

```
const username = "Devraj"

function showUser () {
    console.log(username) 
}

showUser()
```
    # Function can look outside the function scope.

```
if (true) {
    console.log(username)
}
```
    # Block can look outside the block scope

Rule:   
1. Any function or block in script can read or update global variables declared with let or var.
2. When a variable is declared with const in global scope function and block can access it. But can not re-assign (=) that variable to a new value.
3. Primitive values (numbers, string, booleans, null, undefined, symbol, bigint) declared with let and const in global scope, can be copied and put in completely new variable.
4. Non-primitive values (object, array, functions) declared let and const in global scope, cannot be copied, we get reference of that value.

Catch: If too many global variables are created, different parts of program might accidentally overwrite each other's data.

* Function Scope: Any variable declared within the function block can only be accessed within the function itself or its child, whether its declared with var, let or const. 

```
const parentFunction = () => {
    var parentVar = "I am var"
    let parentLet = "I am let"
    const parentConst = "I am const"

    const childFunction = () => {
        console.log(parentVar) // I am var
        console.log(parentLet) // I am let
        console.log(parentConst) // I am const

// child function can access parent function variables, but parent function cannot access child function variables.

        var childVar = "I am child"
    }

    childFunction()

    console.log(childVar)  // Cannot be access outside child function.
}

parentFunction()

console.log(parentVar) // Cannot be accessed outside parent function.
```

Rule:
1. Child -> Parent: Inner function holds a reference to their parent environment.
2. Parent -> Child: The parent function execution context termination at its own scope. It has no visibility into whats is declared inside child function.

* Block Scope: means that variables declared inside a pair of curly braces {} are only accessible within those specific curly braces. A "block" in JavaScript is created whenever we write code inside {}, such as in "if" statement, "for" loop, "while" loop, or standalone {} block.

Rule: 
1. let and const respects block scope. They are trapped inside the block where they are declared. Trying to access them outside the block throws a "ReferenceError".

2. var ignores block scope. var completely ignores curly braces {} unless it's a function. It leaks out into the parent or global scope.

```
const parentFunction = () => {

    if (true) {
      var childVar = "I am child Var and I don't obey block scope unless I'm inside a function block."
    }
    console.log(childVar);
  }

  // if we switch var with let or const it will immediately trap "childVar" inside "if" block and will give "ReferenceError"

  parentFunction()
```
  
