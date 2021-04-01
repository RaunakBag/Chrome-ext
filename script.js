replaceText(document.body)

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType == Text.TEXT_NODE) { 
        if (element.textContent.match(/coronavirus/gi)) {
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, 
            '<span class = "rainbow">$1</span>')
            element.replaceWith(newElement)//only the word coronavirus will be blackout

            //element.parentElement.style.color = 'black'
            //element.parentElement.style.backgroundColor = 'black'
            //element.parentElement.remove();//will remove all the coronavirus word
        }//turns all text inside coronavirus to black
        //element.textContent = element.textContent.replace(/coronavirus/gi,'')//replaces the word coronavirus with blank space
    }
}