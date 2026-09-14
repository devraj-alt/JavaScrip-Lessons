const targetText = document.querySelector('#target-text')
const reset = document.querySelector('#reset-btn')
const userInput = document.querySelector('#input-box')
const wordsPerMin = document.querySelector('#wpm-val')
const accuracy = document.querySelector('#acy-val')
const elapsedTime = document.querySelector('#time-val') 

const sentences = ["var defines a function scoped or globally scoped variable that can be optionally initialized, reassigned, and redeclared anywhere within its scope.", "let defines a block scoped local variable that can be reassigned to a new value but cannot be redeclared within the same block.", "const defines a block scoped, read only constant that must be initialized immediately and cannot be reassigned or redeclared."]

let timeInterval = null
let starTime = null
let isTimerRunning = false

const initGame = () => {
    userInput.disabled = false
    clearInterval(timeInterval)
    starTime = null
    isTimerRunning = false

    elapsedTime.innerText = '0s'
    targetText.innerHTML = ''
    userInput.value = ''

    const randomSentence = Math.floor(Math.random() * sentences.length)
    const chosenSentence = sentences[randomSentence]
    const characters = chosenSentence.split('')
    
    for (let i = 0; i < characters.length; i++) {
        const span = document.createElement('span')
        span.innerText = characters[i]
        targetText.appendChild(span)
    }
}
initGame()

reset.addEventListener('click', initGame)
userInput.addEventListener('input', () => {
    const allSpan = targetText.querySelectorAll('span')
    const typedCharacters = userInput.value.split('')

    for (let i = 0; i < allSpan.length; i++) {
        const typedChar = typedCharacters[i]

        if (typedChar == null) {
            allSpan[i].classList.remove('correct', 'incorrect')
        } else if (typedChar === allSpan[i].innerText) {
            allSpan[i].classList.add('correct')
            allSpan[i].classList.remove('incorrect')
        } else {
             allSpan[i].classList.add('incorrect')
            allSpan[i].classList.remove('correct')
        }
    }

    if (!isTimerRunning && userInput.value.length > 0) {
        isTimerRunning = true
        starTime = Date.now()
        timeInterval = setInterval(() => {
            const seconds = Math.floor((Date.now() - starTime) / 1000)
            elapsedTime.innerHTML = `${seconds}s`
        })
    }

    if (typedCharacters.length === allSpan.length) {
        clearInterval(timeInterval)
        isTimerRunning = false
        userInput.disabled = true
    }
})
