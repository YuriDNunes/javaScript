// setTimeout
// console.log("not yet executed")

// setTimeout(function(){
//     console.log("asynchronous request")
// }, 2000)

// console.log("not yet executed 2")

// // setInterval
// console.log("hasn't started yet")

// setInterval(function(){
//     console.log("asynchronous interval")
// }, 3000)

// console.log("hasn't started yet")

// promises
// const promise = Promise.resolve(5 + 5)

// console.log("One code")

// promise.then(value => {
//     console.log(`The sum is ${value}`)
//     return value
// })
// .then((value) => value - 1)
// .then((value) => console.log(`Now is ${value}`))

// console.log("Other code")

// failed promise
// Promise.resolve(4 * "asd")
// .then((n) => {
//     if(Number.isNaN(n)){
//         throw new Error("Invalid values")
//     }
// })

// // rejection
// function checkNumber(n){
//     return new Promise((resolve, reject) => {

//         if(n > 10){
//             resolve("The number is higher than 10")
//         } else{
//             reject(new Error("Number to low"))
//         }

//     })
// }

// const a = checkNumber(20)
// const b = checkNumber(5)

// console.log(a,b)

// solving several promises
const p1 = new Promise((resolve,reject) =>{
    setTimeout(function(){
        resolve(10)
    }, 1000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) => {
    if(30 > 10){
        resolve(30)
    } else{
        reject("Error!")
    }
})

Promise.all([p1,p2,p3]).then((values) => console.log(values))

// async functions
async function sumWithDelay(a,b){
    return a + b
}

sumWithDelay(2,4).then((value) => {
    console.log(`Sum result: ${value}`)
})

console.log("test async")

// async await
function resolveWithDelay(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise solved")
        }, 2000)
    })
}

async function asyncCall() {
    console.log("Calling the promise, and waiting the result")
    const result = await resolveWithDelay()
    console.log(`The result arrived ${result}`)
}

asyncCall()

// generators
function* generator(){
    yield 1
    yield 2
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)