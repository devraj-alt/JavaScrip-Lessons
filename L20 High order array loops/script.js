// High Order Array Loops:
// for of:

{
    {
        const  arr = [1, 2, 3, 4, 5]

        for (const num of arr) {
            console.log(num)
        }
    }

    {
        const greetings = "Hello world!"

        for (const greet of greetings) {
              if (greet === " ") continue
              {
                console.log(`Each char is ${greet}`);
              }
        }
    }
}

// Map:

{
    {
        const map = new Map()
        map.set('IN', "India")
        map.set('USA', "United States of America")
        map.set('FRN', "France")
        map.set('IN', "India")

        for (const [key, value] of map) {
            console.log(key, ':-', value);   
        }
        
    }

    {
        // const myObj = {
        //     game1 : "Mario",
        //     game1 : "Contra"
        // }

        // for (const [key, value] of myObj) {
        //     console.log(key, ':-', value);
        // }
        //  Objects are not iterable
    }

// for in: 
    {
        const myObj = {
            js: "JavaScript",
            cpp: "C++",
            rb: "ruby",
            swift: "swift by apple"
        }

        for (const key in myObj) { 
            console.log(`${key} shortcut for ${myObj[key]}`);
        }
    }

    {
        const programming = ["js", "rb", "'py", "java", "cpp"]

        for (const key in programming) {
           console.log(programming[key]);
        }
    }

    {
        const map = new Map()
        map.set('IN', "India")
        map.set('USA', "United States of America")
        map.set('FRN', "France")
        map.set('IN', "India")

        for (const key in map) {
            console.log(key);   
        }
    }
}

// forEach:

{
    {
        const coding = ["js", "ruby", "java", "python", "cpp"]

        coding.forEach((item) => {
            console.log(item);
        });

        {
            const printMe = (item) => {
                console.log(item);
            }

           coding.forEach(printMe)
        }

        {
            coding.forEach((item, index, arr) => {
                console.log(item, index, arr);
            })
        }
    }

    {
        const myCoding = [
            {
                languageName : "JavaScript",
                languageFileName : "js"
            },
            {
                languageName : "java",
                languageFileName : "java"
            },
            {
                languageName : "python",
                languageFileName : "py"
            },
        ]

        myCoding.forEach((item) => {
            const {languageFileName, languageName} = item
            console.log(`${languageName} file extension name for .${languageFileName}`);
        });
    }

    // {
    //      const coding = ["js", "ruby", "java", "python", "cpp"]

    //      const value = coding.forEach((item) => {
    //         return item
    //      });

    //      console.log(value);
         
    // }
}