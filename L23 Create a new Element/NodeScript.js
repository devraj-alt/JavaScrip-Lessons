const div = document.createElement('div')
console.log(div);
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute("title", "generated title")
div.style.backgroundColor = '#e754ca'
div.style.padding = "12px"
//div.innerHTML = "Chai aur Code"

const addText = document.createTextNode("Chai aur Code")
div.appendChild(addText)

document.body.appendChild(div)