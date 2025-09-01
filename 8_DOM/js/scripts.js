// moving 
console.log(document.body)

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes[1].textContent)

const listItems = document.getElementsByTagName("li")

console.log(listItems)

const title = document.getElementById("title")

console.log(title)

const product = document.getElementsByClassName("product")

console.log(product)

const productsQuery = document.querySelectorAll(".product")

console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")

console.log(mainContainer)

// insertBefore
const p = document.createElement("p")

const header = title.parentElement

header.insertBefore(p, title)

// appendChild
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)

// replaceChild
const h2 = document.createElement("h2")

h2.textContent = "My new title"

header.replaceChild(h2, title)

// createTextNode
const myText = document.createTextNode("Now let's add one more title")

console.log(myText)

const h3 = document.createElement("h3")

h3.appendChild(myText)

console.log(h3)

mainContainer.appendChild(h3)

// working with atributes
const firstLink = navLinks.querySelector("a")

console.log(firstLink)

firstLink.setAttribute("href","https://www.google.com")

console.log(firstLink.getAttribute("href"))

firstLink.setAttribute("target","_blank")

// height & width

const footer = document.querySelector("footer")

console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

console.log(footer.clientWidth)
console.log(footer.clientHeight)

// element position
const product1 = product[0]

console.log(product1.getBoundingClientRect())

// css with js
mainContainer.style.color = "Red"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "15px"

// changing styles of multiple elements
for(const li of listItems){
    li.style.backgroundColor = "Red"
}