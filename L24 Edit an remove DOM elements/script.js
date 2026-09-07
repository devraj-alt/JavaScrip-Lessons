{
    const addlanguage = (langName) => {
        const newEle = document.createElement('li')
        newEle.innerHTML = `${langName}`
        document.querySelector('.language').appendChild(newEle)
    }

    addlanguage("Python")
    addlanguage("Redux Toolkit")
    
}

{
    const optimizedLanguage = (langName) => {
        const newEle = document.createElement('li')
        newEle.appendChild(document.createTextNode(langName))
        document.querySelector('.language').appendChild(newEle)
    }

    optimizedLanguage("TypeScript")
    optimizedLanguage("golang")
}

//Edit:

{
    const secLang = document.querySelector('li:nth-child(2)')
    const newLi = document.createElement('li')
    newLi.textContent = "React"
    secLang.replaceWith(newLi)
}

{
    const forthLang = document.querySelector('li:nth-child(4)')
    forthLang.outerHTML = '<li>TypeScript</li>'
}

//Remove:

{
    const lastLang = document.querySelector('li:last-child')
    lastLang.remove()
}