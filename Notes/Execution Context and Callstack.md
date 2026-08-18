_Execution Context_

1. _Global Execution Context (GEC):_ Created by default when a script starts. It binds this to global object (window in browser, {} in Node.js).

2. _Function Execution Context(FEC):_ A new context created every time a function is invoked.

_There is two Phases of Execution_
1. _Memory Creation Phase:_ JavaScript scans the code and allocates memory space for variables and function before executing any line.
    Variables (var, let, const) --> _undefined_ (or placed in the TDZ for let / const).

    Function Declaration --> stored entirely in memory with their full function definitions.

2. _Code Execution Phase:_ JavaScript executes the code line by line. 
    Variables get assigned their actual values.
    Function are called, triggering a new function Execution Context.

  ```
    let val1 = 10
    let val2 = 5
    const addNum = (num1, num2) => {
        let total = num1 + num2
        return total
    }
    let result1 = addNum(val1, val2)
    let result2 = addNum(10, 2)
    ```

    Global Execution (Global Environment)     
        |
        |---> this.
        |
        Memory Phase
            |
            |---> val1 => undefined
            |---> val2 => undefined
            |---> addNum => definition
            |---> result1 => undefined
            |---> result2 => undefined
            |
        Execution Phase
            |
            |---> val1 => 10
            |---> val2 => 5
            |---> addNum ----(will creates a new variable environment and executional thread)---> Memory Phase and Execution Phase will repeat every time the function is called. This phase will be deleted after completing its execution.
            |            |
            |            |--> Memory Phase
            |            |    |
            |            |    |-> num1 => undefined (Parameter)
            |            |    |-> num2 => undefined
            |            |    |-> total => undefined (Local Variable)
            |            |
            |            |--> Execution Phase
            |            |    |
            |            |    |-> num1 => 10 (from val1)
            |            |    |-> num2 => 5 (frm val2)
            |            |    |-> total => 15 (returned to global executional context)
            |            |
            |         DELETED
            |
            |---> result1 => 15
            |---> result2 ----(new variable environment and executional thread)
            |            |
            |            |---> Memory Phase
            |            |
            |            |---> Execution Phase

_Call Stack:_ The Call Stack is the machanism JavaScript uses to track function execution order. It works on LIFO (Last In, First Out) structure. The last function is pushed onto the stack os the first one executed and popped off.

_Core Mechanics: Push & Pop_
    PUSH (Add): When a function is invoked, its Execution Context is pushed onto the top of the stack.

    POP (Remove): When a function completes or hits a return statement, its Execution Context is popped off the stack, and control returns to the function below it.

```
    function third() {
  console.log("3. Third function done");
}

function second() {
  third();
  console.log("2. Second function done");
}

function first() {
  second();
  console.log("1. First function done");
}

first();
```
_Call Stack Visualization:_

1. Script Starts        2. first() Called       3. second() Called      4. third() Called
+------------------+    +------------------+    +------------------+    +------------------+
|                  |    |                  |    |                  |    | third()          |
|                  |    |                  |    | second()         |    | second()         |
|                  |    | first()          |    | first()          |    | first()          |
| Global Context   |    | Global Context   |    | Global Context   |    | Global Context   |
+------------------+    +------------------+    +------------------+    +------------------+

5. third() Popped       6. second() Popped      7. first() Popped       8. Script Ends
+------------------+    +------------------+    +------------------+    +------------------+
|                  |    |                  |    |                  |    |                  |
|                  |    |                  |    |                  |    |                  |
| second()         |    | first()          |    |                  |    |                  |
| Global Context   |    | Global Context   |    | Global Context   |    | Stack Empty      |
+------------------+    +------------------+    +------------------+    +------------------+