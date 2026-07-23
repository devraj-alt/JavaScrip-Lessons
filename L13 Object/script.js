// Objects Part 1:

{
    //Declearing Objects: Objects can be declared in two ways 1. Literal 2. Constructor.

    //1.LITERAL: Direct syntax ({}, []) that instantly creates an object in memory without calling a function.
    const userLiteral = {
        name: "Devraj",
        role: "Developer"
    }
    console.log(userLiteral);
    

    //2.CONSTRUCTOR: A function called with `new` to build and initialize a new object instance from a blueprint.
    const userConstructor = new Object()
    userConstructor.name = "Devraj"
    userConstructor.role = "Developer"

    console.log(userConstructor);

    {
        //Object.create() - Method: Creates a new object linked to a specified prototype object.
        const userSingleton = Object.create({})
        userSingleton.name = "Devraj"
        userSingleton.role = "Developer"

        console.log(userSingleton);
        //Example of Prototype Inheritance:
        // SINGLETON: Ensures only ONE instance of an object exists in memory, shared across the entire app.
        // HOW: Export a single object from a module so every file imports the exact same memory reference.
        // WHEN: Use for global state, central app configs, or database connections (a single source of truth).
        const parent = {name: "Devraj"}
        const child = Object.create(parent)

        console.log(child); // child object starts empty. it doesn't has its own name property.

        console.log(child.name); // when we asked for specific property from the child object, it goes to the parent object to find that property and return the value.

        console.log(child.name = "Kim Jong Un"); // a brand new own property is created inside child object, now its shadows the parent property

        console.log(child); // now when loged child object will give an output { name: "Kim Jong Un" }, because child object has its own name property.
    }
}

{
    //Object literal with examples:

    const mySym = Symbol("key1") // for Symbols

    const jsUser = {
        name: "Devraj",
        age: 34,
        developer: true,
        location: "Guwahati",
        email: "devraj@microsoft.com",
        lastLogetIn: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], 
        [mySym]: "mykey1" //Creating the key: You must wrap the Symbol variable in []
    }

    //Accessing Objects:
    //1. Dot Notation - . : objectName.propertyName
    //2. Bracket Notation - []: objectName["propertyName"]

    console.log(jsUser.name);
    console.log(jsUser["name"]); // in javascript key are actually string (but we don't have to write it as string it works under the hood). when using bracket notation we have to put key name in quotes - "".

    const user = {
        "full name": "Devraj Roy",
        "email@domain.com": "devraj@microsoft.com"
    }
    //console.log(user.full name); // this line will imeditaly throw SyntexError. Because . notation expects a single, valid identifer and the space breaks it.
    console.log(user["full name"]);
    console.log((user["email@domain.com"]));
    // while accessing key names with sapce or special character, we have to use bracket notation.

    //Symbol:
    console.log(jsUser[mySym]); // we must use bracket notation [] with the exact Symbol variable reference (no quotes).
    console.log(typeof mySym); // Symbol

    Object.freeze(jsUser) // Prevents: Modifying existing values, Adding new properties, Deleting existing properties
    jsUser.name = "tabitha"
    console.log(jsUser);    
}

{
    const jsUser = {
        name: "Devraj",
        age: 34,
        developer: true,
        location: "Guwahati",
        email: "devraj@microsoft.com",
        lastLogetIn: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    }

    jsUser.greeting = function () {
        return `Hello JS user, ${this.name}`
    }

    console.log(jsUser.greeting());

    {
        const user = {
            name: "Devraj",
            greeting() {
                return `Hello, ${this.name}`
            }
        }
        console.log(user.greeting());     
    }
}

// Objects Part 2:

{
    {
        // Singleton:

        const instaUser = new Object()
        instaUser.id = "21bi2h1"
        instaUser.name= "Tabitha"
        instaUser.profileName = "taby.cn"
        instaUser.isLogedIn = false

        console.log(instaUser);
    }

    {
        // Nested ObJects:

        const instaFriend = {
            email: "me.devrajroy@gmail.com",
            fullName: {
                userFullName: {
                    firstName: "Devraj",
                    lastName: "Roy"
                }
            }
        }
        console.log(instaFriend.fullName.userFullName);
    }

    {
        //Merging Objects:

        const obj1 = {
            1: "a",
            2: "b"
        }

        const obj2 = {
            3: "c",
            4: "d"
        }

        const obj3 = {
            5: "e",
            6: "f"
        }

        //const obj4 = {obj1, obj2, obj3}
        const obj4 = Object.assign({}, obj1, obj2, obj3) // Object.assign(target, source1, source2, ...)
        console.log(obj4);
    }

    {
        //Spread Operator;

        const obj1 = {
            1: "a",
            2: "b"
        }

        const obj2 = {
            3: "c",
            4: "d"
        }

        const obj3 = {...obj1, ...obj2}
        console.log(obj3);
    }
}

{
    // Array of Objects:

    const users = [
        {
            id: "45vr1j",
            email: "mr.devrajroy@gmail.com"
        },
        {
            id: "21bi2h1",
            email: "ms.tabitha@gmail.com"
        }
    ]
    console.log(users[0].email);
}

{
    const instaUser = new Object()
        instaUser.id = "21bi2h1"
        instaUser.name= "Tabitha"
        instaUser.profileName = "taby.cn"
        instaUser.isLogedIn = false

        console.log(instaUser);

        console.log(Object.keys(instaUser)); // Data type is array.
        console.log(Object.values(instaUser)); // Data type is array.  
        console.log(Object.entries(instaUser)); // key value pair becomes an array elements.
        console.log(instaUser.hasOwnProperty("isLogedIn"));       
}

{
    //Object destructuring and JSIN API:

    const course = {
        courseName: "JS in Hindi",
        price: 999,
        courceInstructor: "Hitesh"
    }

    const {courceInstructor : Instructor} = course
    console.log(Instructor);
}

{/*
    // JSON Object
    // NO functions/methods allowed
    // Keys MUST be wrapped in double quotes ""
    {
        "name": "Devraj",
        "courseName": "JS in Hindi",
        "price": "Free"
    }
*/}