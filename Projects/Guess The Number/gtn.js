const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startAgain = document.querySelector('.resultParas')

let randomNumber = parseInt(Math.random() * 100 + 1)
const p = document.createElement('p')

let prevGuess = []
let playGame = true

submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (playGame) {
        const guess = parseInt(userInput.value)
        validGuess(guess)
    }
})

const validGuess = (guess) => {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100')
        return
    }

    prevGuess.push(guess)
    displayGuess(guess)
    
    if (guess === randomNumber) {
        displayMessage(`You guessed it right!`)
        endGame()
    } else if (prevGuess.length === 10) {
        displayMessage(`Game Over. Random number was ${randomNumber}`)
        endGame()
    } else {
        checkGuess(guess)
    }
}

const checkGuess = (guess) => {
    if (guess < randomNumber) {
        displayMessage(`Number is TOO low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOO high`)
    }
}

const displayGuess = (guess) => {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    remaining.innerHTML = `${10 - prevGuess.length}`
}

const displayMessage = (message) => {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

const endGame = () => {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame" style="cursor:pointer;">Start New Game</h2>`
    startAgain.appendChild(p)
    playGame = false
    newGame()
}

const newGame = () => {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', () => {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        guessSlot.innerHTML = ''
        remaining.innerHTML = '10'
        userInput.removeAttribute('disabled')
        startAgain.removeChild(p)
        displayMessage('')
        playGame = true
    })
}