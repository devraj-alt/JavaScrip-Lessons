// Events: are fired when we do any kind of activity in browser such as click, typing, mouse movement, etc. which code can detect and react to.

const wifi = document.getElementById('wifi')
const image = document.getElementById('images')
const cloud = document.getElementById('cloud')
const google = document.getElementById('google')


// {
//     wifi.addEventListener('click', (e) => {
//    console.log(e);
// })
// }
// //Study: type, timestamp, preventDefault, target, toElement, srcElement, currentTarget, clientX, clientY, screenX, screenY, altKry, ctrlKey, shiftKey, keyCode

// {
//     image.addEventListener('click', () => {
//     console.log('clicked inside ul');
// },false)

// cloud.addEventListener('click', (e) => {
//     console.log('clicked cloud');
//     e.stopPropagation()
// },false)

// google.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation()
//     console.log('google clicked');
// }, false)
// }

// {
//     image.addEventListener('click', (e) => {
//         e.stopPropagation()
//         e.preventDefault()
//         const removeIt = e.target.parentNode
//         if (removeIt) {
//             removeIt.remove()
//         }
//     }, false)
// }

{
    image.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id)
            let tagName = e.target.parentNode
            tagName.remove()
            console.log(tagName);
            
        }
    }, false)
}