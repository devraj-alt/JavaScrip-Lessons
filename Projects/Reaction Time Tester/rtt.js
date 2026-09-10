const card = document.querySelector('#card')
const start = document.querySelector('#main-text')
const guide = document.querySelector('#sub-text')
const lastScore = document.querySelector('#last-score')
const bestScore = document.querySelector('#best-score')
const scoreHistory = document.querySelector('#history')

let gameState = 'idle'
let startTime = 0
let timerTimeout = null
let history = []

card.addEventListener('click', ()=>{
    if (gameState === 'idle') {
        gameState = 'waiting'
        card.style.backgroundColor = 'orange'
        start.innerHTML = 'waiting for green'

        const delay = (Math.random() * 3000) + 2000

        timerTimeout = setTimeout(() => {
            gameState = 'active'
            card.style.backgroundColor = 'green'
            start.innerHTML = 'CLICK NOW'
            startTime = Date.now()
        }, delay)   
    } else if (gameState === 'waiting') {
        clearTimeout(timerTimeout)
        gameState = 'idle'
        card.style.backgroundColor = 'red'
        start.innerHTML = 'Too early! Click to try again'
    } else if (gameState === 'active') {
        const score = Date.now() - startTime
        history.push(score)
        console.log(history);
        
        const best = Math.min(...history)
        lastScore.innerHTML = `${score} ms`
        bestScore.innerHTML = `${best} ms`
        scoreHistory.innerHTML = history.join(', ')

        gameState = 'idle'
        card.style.backgroundColor = 'red'
        start.innerHTML = `${score} ms! Click to try again.`
    }
})