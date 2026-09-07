const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')
const grey = document.querySelector('#grey')
const white = document.querySelector('#white')
const blue = document.querySelector('#blue')
const yellow = document.querySelector('#yellow')
const purple = document.querySelector('.purple')

buttons.forEach(button => {
    button.addEventListener('click', (e)=>{
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id
                break;
            case 'white':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id
            case 'yellow':
                body.style.backgroundColor = e.target.id
            case 'purple':
                body.style.backgroundColor = e.target.id
            default:
                break;
        }
    })
});
