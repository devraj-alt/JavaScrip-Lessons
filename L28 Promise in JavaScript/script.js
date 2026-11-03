// A Promise is a placeholder for data that will arrive in future from an asynchronous task like fetching data from a server. It tells our code, "I don't have the data right now, but I promise to give it to you or let you know if something goes wrong when it's ready."

// Promise has three states

/*
1. Pending: The operation is still running and hasn't finished yet, like waiting for network request to load.

2. Fulfilled: The operation completed successfully, and the promise now holds the requested data.

3. Rejected: The operation failed due to an error, like network drop or server error.
*/

//Modern Asynchronous JavaScript: fetch, async/await, and try...catch


//1. fetch(): is a built in browser API used to request data from a server. It automatically returns a Promise because it takes time for data to travel across the internet.

{
    const response = fetch('https://api.github.com/users/hiteshchoudhary') // Promise {<pending>} because fetch() kicks off an asynchronous task in the background and immediately passes control to the next line (console.log()) before the network request finishes.
    console.log(response);   
}

//2. async: makes a function always return a Promise and allows await inside it.

{
   const getUserData = async () => { // Promise {<pending>}, pending because fetch() returns a Promise immediately, and console.log runs before the server replies. It is not caused by async. The missing await is the cause.
    const response = fetch('https://api.github.com/users/hiteshchoudhary')
    console.log(response);
   }
   getUserData()

   {
    // Promise{<fulfilled>}
    const test = async () => { return 5 }
    console.log(test()) // Promise {<fulfilled>: 5}
   }
}

//3. await: the await keyword pauses the execution of async function until the promise settles (success or reject)

{
    const getUserData = async () => {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary') // Pause here until the server responds
        const data = await response.json() // Pause here until the response converts to JSON
        console.log(data);
    }
    getUserData()
}

//4. try...catch: safely handles error, allowing the program to keep running smoothly.

{
    const getUserData = async () => {
        try {
            const response = await fetch('https://api.github.com/users/hiteshchoudhary')

            if(!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`); 
            }
            const data = await response.json()
            console.log("User Data:", data);
        } catch (error) {
            console.log(error);
        }
    }
    getUserData()
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

{
    const promiseOne = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Async task is complete');
            resolve()
        }, 2000)
    })

    promiseOne.then(()=>{
        console.log('Promise consume');
    })

    {
        new Promise ((resolve, reject) => {
            setTimeout(() => {
                console.log('Async task 2');
                resolve()
            }, 4000)
        }).then(() => {
            console.log('Async 2 resolved');
        })
    }
}

{
    const userData = {
        name: "Devraj",
        email: "mr.devrajroy@example.com",
        city: "Guwahati"
    }

    const promiseTwo = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(userData)
        }, 5000)
    })

    promiseTwo.then((user) => {
        console.log(user);
    })
}

{
     const userData = {
        name: "Devraj",
        email: "mr.devrajroy@example.com",
        city: "Guwahati"
    }


    const promiseThree = new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false
            if (!error) {
                resolve(userData)
            } else {
                reject('Error: Data note found')
            }
        }, 7000)
    })

    promiseThree.then((user) => {
        console.log(user);
        return user.name
    }).then((name) => {
        console.log(name);
    }).catch((error) => {
        console.log(error);
    }).finally(() => console.log('The Promise is either resolved or rejected')
    )
}

{
    const course = {
        courseName: "Chai aur Code",
        teacher: "Hitesh Choudhary",
        platform: "YouTube"
    }
    const promiseFour = new Promise ((resolve, reject) => {
        setTimeout(() => {
            let error = true
            if (!error) {
                resolve(course)
            } else {
                console.log("Error: Unable to connect to server");
            }
        }, 9000)
    })

    async () => {
        try {
            const response = await promiseFour
        console.log(response);
        } catch (error) {
            console.log(error);
            
        }   
    }

}

{
    const getAllUsers = async () => {
       try {
         const response = await fetch('https://jsonplaceholder.typicode.com/users')
         const data = await response.json()
         console.log(data);
       } catch (error) {
        console.log(error);

       }
    }

    getAllUsers()
}

{
    const url = "https://jsonplaceholder.typicode.com/users"

    fetch(url)
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log('The Promise is either resolved or rejected');
    })
}