// this Keyword: refers to the object that is executing the current piece of code.
// Implicit Binding (Object Method): When a function is called as a method of an object, this points to the object before the dot.
{
    const user = {
        username: "Devraj",
        price: 999,
        welcomeMessage: function () {
            return `${this.username}, welcome to website`; 
        }
    }

    console.log(user.welcomeMessage());
    user.username = "Tabitha"
    console.log(user.welcomeMessage());
}

//Standalone Function (Global/ Default Binding): When a regular function is called by itself without an object attached, this defaults to the global context.

{
    function showThis () {
        return this
    }
    console.log(showThis());
}

//Arrow Function (Lexical this): Arrow functions do NOT have their own this. Instead, they inherit this lexically from their enclosing parent scope (just like a normal variable).

{
    const user = {
        username: "Devraj",
        regularFunc: function () {
            return `Regular:, ${this.username}`
        },
        arrowFunc: () => {
            return `Arrow:, ${this.username}`
        }
    }

    console.log(user.regularFunc());
    console.log(user.arrowFunc());
}

//Constructor Functions (new Keyword): When a function is invoked with the new keyword, this points to the newly created empty object.

{
    function User (name) {
        this.name = name
    }

    const devraj = new User("Devraj")
    console.log(devraj.name);
}

//--------------------------------------------------------------------------------------------------------------------//

//Rules:
/*
1. Regular functions depend on how they are called.
Called on an object, this points to the left of the dot.
Called as standalone or inside callbacks, this loses its object connection.
*/

{
    //When called with an object to the left of the dot, this becomes that object.

    const user = {
        name: "Devraj",
        greet: function () {
            console.log(`Hello ${this.name}`);
        }
    }
    user.greet() // Hello Devraj
}

{
    //When passed to a callback, the function is executed on its own later, so it loses connection to user.

    const user = {
        name: "Devraj",
        startTimer: function () {
            setTimeout(function () {
                console.log(this.name);
                
            }, 10000)
        }
    }
    user.startTimer(); // undefined
}

/*
2. Arrow function depend on where they are written.
Arrow function does not have its own this.
They look outside their scope to the parent function surrounding them and borrow its this.
*/

{
    //The arrow function has no this of its own, so it looks outward to parents's scope where this is user.

   const user = {
    name: "Devraj",
    startTimer: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 10000);
    }
   }
   user.startTimer(); // Devraj
}

{
    //If an arrow function is written directly inside an object literal, its parent's scope is the Global Scope (window), not the object.

    const user = {
        name: "Devraj",
        greet: () => {
            console.log(this.name);
        }
    }
    user.greet() // undefined
}