1. setTimeout(): Executes a callback function once after waiting a specified delay. It runs
* Frequency: Runs 1 time
* Purpose: Single delayed execution
* Stopping Method: clearTimeout(timerId)
* Queue Type: Macro task
```
const timeId = setTimeout (() => {
    console.log("This prints once after 2 seconds.")
},2000)
```

2. setInterval(): Executes a callback function repeatedly at specified time intervals until it is cleared.
* Frequency: Runs continuously (every X millisecond)
* Purpose: Repeated recurring execution
* Stopping Method: clearInterval(intervalId)
* Queue Type: Macro task
```
let counter = 0

const intervalId = setInterval(() => {
    counter++
    console.log(`Counter: ${counter}`)

    if(counter === 5) {
        clearInterval(intervalId)
        console.log("Interval Stopped")
    }
}, 1000)
```