// Methods
// const animal = {
//     name: "Bob",
//     bark: function(){
//         console.log("woof woof")
//     }
// }

// console.log(animal.name)

// animal.bark()

// More about methos
// const person = {
//     name: "Yuri",

//     getName: function(){
//         return this.name
//     },

//     setName: function(newName){
//         this.name = newName
//     }
// }

// console.log(person.name)

// console.log(person.getName())

// person.setName("João")

// console.log(person.getName())

// prototype
// const text = "asd"

// console.log(Object.getPrototypeOf(text))

// more about prototype
// const myObject = {
//     a: "b",
// }

// console.log(Object.getPrototypeOf(myObject))

// const mySecondObject = Object.create(myObject)

// console.log(mySecondObject)

// basic class
// const dog = {
//     race: null,
//     paws: 4,
// }

// const bulldog = Object.create(dog)

// bulldog.race = "Bulldog"

// console.log(bulldog)

// console.log(bulldog.paws)

// function as a class - construct function
// function createDog(name, race){

//     const dog = Object.create({})

//     dog.name = name
//     dog.race = race

//     return dog
// }

// const jack = createDog("Jack", "Rottweiler")

// console.log(jack)

// functions as class
// function Dog(name,race){
//     this.name = name
//     this.race = race
// }

// const husky = new Dog("ozzy", "Husky")

// console.log(husky)

// methods in the construct function
// Dog.prototype.howl = function() {
//     console.log("Wooooooo!")
// }

// husky.howl()

// class es6
// class DogClass{
//     constructor(name,race){
//         this.name = name
//         this.race = race
//     }
// }

// const jeff = new DogClass("Jeff", "Labrador")

// console.log(jeff)

// more about class
// class Truck {
//     constructor(axles, color){
//         this.axles = axles
//         this.color = color
//     }

//     truckInfos(){
//         console.log(`This truck has ${this.axles} axles and it's color is ${this.color}`)
//     }
// }

// const scania = new Truck(6,"Red")

// scania.truckInfos()

// override
// class Human{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
// }

// const yuri = new Human("Yuri",19)

// console.log(yuri)

// Human.prototype.age = "Undefined"

// console.log(yuri.age)

// console.log(Human.prototype.age)

// symbol
// class Plane{
//     constructor(brand,turbines){
//         this.brand = brand
//         this.turbines = turbines
//     }
// }

// const wings = Symbol()

// Plane.prototype[wings] = 2

// const boeing = new Plane("Boeing", 10)

// console.log(boeing)

// console.log(boeing[wings])

// Getter & setter
// class Post {
//     constructor(title,desciption,tags){
//         this.title = title
//         this.desciption = desciption
//         this.tags = tags
//     }

//     get showTitle(){
//         return `You're reading: ${this.title}`
//     }

//     set addTags(tags){
//         const tagsArrays = tags.split(", ")
//         this.tags = tagsArrays
//     }
// }

// const myPost = new Post("Post", "This is a post about programming")

// console.log(myPost)

// console.log(myPost.showTitle)

// myPost.addTags = "Programming, JavaScipt, Java"

// console.log(myPost)

// Inheritance
class Mammal {
    constructor(paws){
        this.paws = paws
    }
}

class Wolf extends Mammal {
    constructor(paws, name){
        super(paws,paws)
        this.name = name
    }
}

const shark = new Wolf(4, "Shark")

console.log(shark)

// instanceof
console.log(shark instanceof Wolf)

console.log(Wolf instanceof Mammal)