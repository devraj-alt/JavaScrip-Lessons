const targetText = document.querySelector('#target-text')
const reset = document.querySelector('#reset-btn')
const userInput = document.querySelector('#input-box')
const wordsPerMin = document.querySelector('#wpm-val')
const accuracy = document.querySelector('#acy-val')
const elapsedTime = document.querySelector('#time-val') 

const sentences = [
  "var defines a function scoped or globally scoped variable that can be optionally initialized, reassigned, and redeclared anywhere within its scope.", 
  "let defines a block scoped local variable that can be reassigned to a new value but cannot be redeclared within the same block.", 
  "const defines a block scoped, read only constant that must be initialized immediately and cannot be reassigned or redeclared.",
  "arrow functions provide a concise syntax to write functions and do not have their own binding to the this keyword.",
  "closures allow an inner function to access variables from an outer enclosing function scope even after the outer function has executed.",
  "promises represent the eventual completion or failure of an asynchronous operation and return its resulting value synchronously.",
  "async and await provide a clean syntactic sugar built on top of promises to write asynchronous code that looks synchronous.",
  "destructuring assignment is a special syntax that allows us to unpack values from arrays or properties from objects into distinct variables.",
  "template literals are string literals allowing embedded expressions and multi line strings enclosed by backtick characters instead of quotes.",
  "the spread operator expands an iterable like an array or object into individual elements while the rest parameter collects multiple elements into an array."
];


let timeInterval = null
let startTime = null
let isTimerRunning = false

const initGame = () => {
    userInput.disabled = false
    clearInterval(timeInterval)
    startTime = null
    isTimerRunning = false

    elapsedTime.innerText = '0s'
    targetText.innerHTML = ''
    userInput.value = ''
    wordsPerMin.innerText = '0'
    accuracy.innerText = '100%'

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
        startTime = Date.now()
        timeInterval = setInterval(() => {
            const seconds = Math.floor((Date.now() - startTime) / 1000)
            elapsedTime.innerHTML = `${seconds}s`

            const elapsedSeconds = (Date.now() - startTime) / 1000
            const elapsedMinutes = elapsedSeconds / 60
            const correctCount = targetText.querySelectorAll('span.correct').length

            const wpmVal = elapsedMinutes > 0 
                ? Math.round((correctCount / 5) / elapsedMinutes) 
                : 0
            
            wordsPerMin.innerText = wpmVal
        },1000)
    }

    if (typedCharacters.length === allSpan.length) {
        clearInterval(timeInterval)
        isTimerRunning = false
        userInput.disabled = true
    }

    const totalTyped = typedCharacters.length
    const correctCount = targetText.querySelectorAll('span.correct').length
    const accuracyVal = totalTyped > 0
    ? Math.round((correctCount / totalTyped) * 100)
    : 100

    accuracy.innerText = `${accuracyVal}%`
})
