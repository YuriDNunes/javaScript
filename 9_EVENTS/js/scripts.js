// adding eventes
const btn = document.querySelector("#my-button")

const body = document.querySelector("body")

btn.addEventListener("click",function(){
    body.style.backgroundColor = "#000"
    body.style.color = "#fff"
    console.log("You clicked me!")
})

// removing events
const secondBtn = document.querySelector("#btn")

function printMessage(){
    console.log("Test")
}

secondBtn.addEventListener("click", printMessage)

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click",printMessage)
})

// event argument
const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) =>{
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
})

// propagation
const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Event 1")
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Event 2")
})

// removing default
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault()

    console.log("Didn't change the page")
})

// key events
document.addEventListener("keyup", (e) => {
    console.log(`Released the key ${e.key}`)
})

document.addEventListener("keydown", (e) => {
    console.log(`Pressed the key ${e.key}`)
})

// mouse events
const mouseEvents = document.querySelector("#mouse")

mouseEvents.addEventListener("mousedown", (e) => {
    console.log("Pressed the button")
})

mouseEvents.addEventListener("mouseup", (e) => {
    console.log("Released the button")
})

mouseEvents.addEventListener("dblclick", (e) => {
    console.log("Double click")
})

// mouse movement
document.addEventListener("mousemove", (e) => {
    // console.log(`X: ${e.x}`)
    // console.log(`Y: ${e.y}`)
})

// scroll event
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200){
        console.log("Passed from 200px")
    }
})

// focus element
const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {
    console.log("Entered the input")
})

input.addEventListener("blur", (e) => {
    console.log("Left the input")
})

// loading event
window.addEventListener("load", (e) => {
    console.log("The page loaded")
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault()
    e.returnValue = ""
})

// debounce
const debounce = (f, delay) => {
    
    let timeout

    return(...arguments) => {
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }
}

window.addEventListener("mousemove", debounce(() => {
    console.log("Executing every 400ms")
}, 400)
)