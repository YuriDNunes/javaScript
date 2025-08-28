// 1 - arrays

// const list = [1,2,3,4,5]

// console.log(list)

// const items = ["yuri",2, true, 3.14,[]]

// console.log(items)

// 2 - properties

// const numbers = [5,3,4]

// console.log(numbers.length)

// console.log(numbers["length"])

// const myName = "Yuri"

// console.log(myName.length)

// 3 - methods

// const otherNumbers = [1,2,3]

// const allNumbers = numbers.concat(otherNumbers)

// console.log(allNumbers)

// const text = "text about something"

// console.log(text.toUpperCase())

// console.log(text.indexOf("b"))

// 4 - Objects
// const person ={
//     name: "Yuri",
//     age: 19,
//     job: "Desenvolvedor"
// }

// console.log(person)

// console.log(person.name)

// console.log(person.name.length)

// 5 - creating and deleting properties
// const car = {
//     engine: 2.0,
//     brand: "VW",
//     model: "Tiguan",
//     km: 20000
// }

// console.log(car)

// car.doors = 4

// console.log(car)

// delete car.km

// console.log(car)

// 6 - More about objects
// const obj = {
//     a: "Test",
//     b: true
// }

// const obj2 = {
//     c: []
// }

// Object.assign(obj2,obj)

// console.log(obj2)

// 7 - Knowing better about the objects
// console.log(Object.keys(obj))
// console.log(Object.keys(obj2))
// console.log(Object.keys(car))

// console.log(Object.entries(car))

// 8 - mutation
// const a = {
//     name: "Yuri"
// }

// const b = a

// console.log(a)
// console.log(b)

// console.log(a === b)

// a.age = 19

// console.log(a)
// console.log(b)

// delete b.age

// console.log(a)
// console.log(b)

// 9 - loop in arrays
// const users = ["Yuri","Calil", "Pedro"]

// for(let i = 0; i < users.length; i++){
//     console.log(`Listando os usúarios: ${users[i]}`)
// }

// 10 - push & pop
// const array = ["a","b","c"]

// array.push("d")

// console.log(array)

// array.pop()

// console.log(array)

// const removedItem = array.pop()

// console.log(removedItem)

// array.push("x","y","z")

// console.log(array)

// 11 - Shift & unshift
// array.unshift("u","r")

// console.log(array)

// array.shift()

// array.shift()

// console.log(array)

// 12 - indexof & lastindexof
// const myElements = ["Strawberry", "Banana", "Apple", "Pineapple", "Banana"]

// console.log(myElements.indexOf("Apple"))
// console.log(myElements.indexOf("Banana"))
// console.log(myElements.lastIndexOf("Banana"))

// console.log(myElements.indexOf("Grapes"))
// console.log(myElements.lastIndexOf("Grapes"))

// 13 - Slice
// const testSlice = ["a", "b", "c", "d", "e", "f", "g"]

// const subArray = testSlice.slice(2,4+1)

// console.log(testSlice)
// console.log(subArray)

// const subArray2 = testSlice.slice(10, 20)

// console.log(subArray2)

// const subArray3 = testSlice.slice(4)

// console.log(subArray3)

// 14 - foreach
// const nums = [1,2,3,4,5]

// nums.forEach((num)=>{
//     console.log(`O numero é ${num}`)
// })

// const posts = [
//     {title: "Primeiro post", category: "PHP"},
//     {title: "Segundo post", category: "javaScript"},
//     {title: "Terceiro post", category: "Java"},
// ]

// posts.forEach((post) => {
//     console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)
// })

// 15 - Includes
// const brands = ["BMW", "Fiat", "VW"]

// console.log(brands.includes("KIA"))
// console.log(brands.includes("Fiat"))

// if(brands.includes("BMW")){
//     console.log("There are BMW cars!")
// }

// 16 - Reverse
// const reversTest = [1,2,3,4,5]

// reversTest.reverse()

// console.log(reversTest)

// 17 - Trim
// const trimTest = "   testing  \n          "

// console.log(trimTest)

// console.log(trimTest.trim())

// console.log(trimTest.length)

// console.log(trimTest.trim().length)

// 18 - padstart
// const testPadStart = "1"

// const newNumber = testPadStart.padStart(4, 0)

// console.log(testPadStart)
// console.log(newNumber)

// const testPadEnd = newNumber.padEnd(10,0)

// console.log(testPadEnd)

// 19 - split
// const phrase = "I'm going to the college"

// const phraseArray = phrase.split(" ")

// console.log(phraseArray)

// 20 - Join
// const phraseAgain = phraseArray.join(" ")

// console.log(phraseAgain)

// const itemsToBuy = ["Mouse", "Keyboard", "Monitor"]

// const buyPhrase = `We need to buy ${itemsToBuy.join(", ")}.`

// console.log(buyPhrase)

// 21 - repeat
// const word = "Testing "

// console.log(word.repeat(3))

// // 22- Rest Operator
// const infiniteSum = (...args) => {

//     let total = 0

//     for(let i = 0; i < args.length; i++){
//         total += args[i]
//     }

//     return total
// }

// console.log(infiniteSum(1,2,3))
// console.log(infiniteSum(11,425,23,12,3,63))

// 23 - for of
// const infiniteSum2 = (...args) => {

//     let total = 0

//     for(num of args){
//         total += num
//     }

//     return total
// }

// 24 - destructing in objects
// const userDetails = {
//     firstName: "Yuri",
//     lastName: "Nunes",
//     job: "Desenvolvedor"
// }

// const {firstName, lastName, job} = userDetails

// console.log(firstName,lastName,job)

// 25 - rename variables
// const {firstName: primeiroNome} = userDetails

// console.log(primeiroNome)

// 26 - destructing in arrays
const myList = ["Plane","Submarine","Car"]

const [veiculoA,veiculoB,veiculoC] = myList

console.log(veiculoA,veiculoB,veiculoC)

// 27 - JSON
const myJson = '{"name": "Yuri", "age": 19, "skills": ["PHP","JavaScript","Java"]}'

// 28 - JSON to object & object to JSON
const myObject = JSON.parse(myJson)

console.log(myObject)

myObject.isOpenToWork = true

console.log(myObject)

const myNewJson = JSON.stringify(myObject)