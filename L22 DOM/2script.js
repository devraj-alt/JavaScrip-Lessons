// document.getElementById(id): is JavaScrip's fastest, most direct method for fetching a single HTML element from DOM using unique "id" attribute. 

// Key Component break down:-
/*
1. document: The root entry point representing the loaded web page's entire DOM tree.

2. returns an Element object: Returns a JavaScript node object corresponding to the HTML tag, allowing you to manipulate its styling, text, or attributes. If no element with that "id" exist, it returns null.

3. specified string: Pass the exact "id" value as a string parameter without a "#" symbol (e.g. 'title, not '#title').

4. id's are required to be unique: HTML standards mandate that an "id" value must be unique across the document.

5. quick access: Because id's are unique, browser engines create an internal hash index for them behind the scenes. This allows getElementById() to perform an instant lookup rather than scanning through the entire DOM tree step-by-step.
*/

{
    const heading = document.getElementById('heading');
    console.log(heading);

    //getAttribute: accessing different property of heading.
    
    console.log(heading.id);
    console.log(heading.className);
    console.log(heading.getAttribute('id'));
    console.log(heading.getAttribute('class'))

    //setAttribute:sets or updates the value of an attribute on an HTML element. If the attribute already exists, its value is overwritten; if it does not exist, a new attribute is created with the given name and value.

    console.log(heading.setAttribute('class', 'test'))
    console.log(heading.setAttribute('id', 'chai-aur-code'));

    //The .style property in JavaScript allows direct reading and writing of inline CSS styles on a DOM element.

    heading.style.backgroundColor = '#e754ca'
    heading.style.padding = '15px'
    heading.style.borderRadius = '15px'

    //textContent: property gets or sets the text content of a node and all of its descendants. It returns the raw text contained inside an element, ignoring all HTML styling and markup.

    console.log(heading.textContent);

    //innerHTML: property gets or sets the HTML markup contained within an element as a string. Unlike textContent or innerText, assigning a string to innerHTML parses standard HTML tags and converts them into real DOM elements.

    console.log(heading.innerHTML);

    //innerText: property gets or sets the rendered text content of an HTML element as it visually appears on the user's screen.

    console.log(heading.innerText);

    //Difference between innerText, textContent, and innerHTML:

    /*
    textContent: Returns all text inside the element, including content hidden by CSS (display: none).

    innerHTML: Returns the text along with all HTML tags and markup inside the element.

    innerText: Returns only the rendered, visually visible text as shown on the screen.
    */
}

//document.querySelector(): returns the first Element inside the document that matches a specified CSS selector. If no matching element is found, it returns null.

{
    const mainHeading = document.querySelector('#chai-aur-code') // since original "id" value has been updated with new "id" value
    console.log(mainHeading);

    const mainClass = document.querySelector(".test")
    console.log(mainClass);

    const myul = document.querySelector('ul')
    console.log(myul);

    const myli = myul.querySelector('li')
    console.log(myli);

     turnYellow = myli.style.color = "yellow"
     turnYellow = myli.style.padding = "10px"
     turnYellow = myli.innerText = "five"
}

//document.querySelectorAll(): returns a static NodeList containing all DOM elements that match a specified CSS selector. If no elements match, it returns an empty NodeList with length: 0 (never null).

{
    {
        const allSelector = document.querySelectorAll('li')
        console.log(allSelector[1].style.color = 'green');

        {
            allSelector.forEach(l => {
                l.style.fontSize = '25px' 
            });
        }
        
    }

    {
        const myH1 = document.querySelectorAll('h1')
        console.log(myH1[0].style.color = 'blue');
        
    }
}

//document.getElementsByClassName(): method returns a live HTMLCollection containing all child elements that match the specified class name.

{
    const getByClassName = document.getElementsByClassName('list-item')

    console.log(getByClassName);

    const htmlCollectionToArr = Array.from(getByClassName)

    console.log(htmlCollectionToArr);

    htmlCollectionToArr.forEach(li => {
        console.log(li.style.color = '#40b3d0');
    });
    
}