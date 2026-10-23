const bodyElement = document.querySelector('body')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let intervalId = null

const startChangingColor = () => {
    const changeBgColor = () => {
        bodyElement.style.backgroundColor = randomColor()
    }
    
    if(!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }
}

const stopChangingBgColor = () => {
    clearInterval(intervalId)
    intervalId = null
}

start.addEventListener('click', startChangingColor)
stop.addEventListener('click', stopChangingBgColor)