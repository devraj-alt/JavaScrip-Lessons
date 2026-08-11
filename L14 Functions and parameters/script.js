//Functions - is a procedure which takes a set of statements that performs a task. It takes a input and return an outpu.

//Defining function: is decleared with a function keyword, followed by the name of the function. A list of parameters to the function, enclosed in parentheses separated by comma. The JavaScript statement that define the function, enclosed in curly braces.

const sayMyName = function() {
    console.log("D");
    console.log("E");
    console.log("V");
    console.log("R");
    console.log("A");
    console.log("J");
}

sayMyName()

//Arrow function: has shorter syntax and implicit return.
const addTwoNumbers = (num1,num2) => {
    return num1 + num2
}

console.log(addTwoNumbers(5,5));

{
    const logInUserMessage = (username) => {
        if (!username) return "Please enter a user name."
        return `${username} just logged in` 
    }

    console.log(logInUserMessage("devraj"));
    console.log(logInUserMessage());
}

