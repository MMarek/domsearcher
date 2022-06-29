const divElement = document.querySelectorAll('div')
const navElement = document.querySelectorAll('nav')
const ulElement = document.querySelectorAll('ul')
const liElement = document.querySelectorAll('li')
const pElement = document.querySelectorAll('p')
const articleElement = document.querySelectorAll('article')
const headerElement = document.querySelectorAll('header')
const spanElement = document.querySelectorAll('span')
const sectionElement = document.querySelectorAll('section')
const h1Element = document.querySelectorAll('h1')
const h2Element = document.querySelectorAll('h2')
const h3Element = document.querySelectorAll('h3')
const altElement = document.querySelectorAll('.alt')
const innerElement = document.querySelectorAll('.inner')
const closeElement = document.querySelectorAll('.close')

let operation = prompt('Wybierz element drzewa DOM, (div, nav, ul, li, p, article, header, span, section, h1, h2, h3) lub klase css (.alt, .inner, .close )');

if (operation === 'div') {
    console.log(divElement.length) 
} else if (operation === 'nav') {
    console.log(navElement.length)
} else if (operation === 'ul') {
    console.log(ulElement.length)
} else if (operation === 'li') {
    console.log(liElement.length)
} else if (operation === 'p') {
    console.log(pElement.length)
} else if (operation === 'article') {
    console.log(articleElement.length)
} else if (operation === 'header') {
    console.log(headerElement.length)
} else if (operation === 'span') {
    console.log(spanElement.length)
} else if (operation === 'section') {
    console.log(sectionElement.length)
} else if (operation === 'h1') {
    console.log(h1Element.length)
} else if (operation === 'h2') {
    console.log(h2Element.length)
} else if (operation === 'h3') {
    console.log(h3Element.length)
} else if (operation === '.alt') {
    console.log(altElement.length)
} else if (operation === '.inner') {
    console.log(innerElement.length)
} else if (operation === '.close') {
    console.log(closeElement.length)}