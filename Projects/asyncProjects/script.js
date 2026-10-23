const title = document.querySelector('h1')
const display = document.querySelector("#display")
const start = document.querySelector("#start")
const stop = document.querySelector('#stop')
const startNxt = document.querySelector("#startnxt")
const stopNxt = document.querySelector('#stopnxt')

{
    let timerId = null

const changeText = () => {
    title.innerHTML = "Best JS series"
}

start.addEventListener('click', () => {
    if(!timerId) {
        timerId = setTimeout(changeText, 3000)
        console.log('Timer started! will change text in 3 seconds');
    }    
})

stop.addEventListener('click', () => {
    clearTimeout(timerId)
    timerId = null
    console.log('Stopped');
})
}

{
    let count = 0
    let intervalId = null

    display.innerHTML = `Count: ${count}`

    startNxt.addEventListener('click', () => {
        if(!intervalId) {
            intervalId = setInterval(() => {
                count++
                display.innerHTML = `Count: ${count}`
            }, 1000)
            console.log("Counter Started");
        }
    })

    stopNxt.addEventListener('click', () => {
        clearInterval(intervalId)
        intervalId = null
        console.log("Counter stopped");
    })
}
