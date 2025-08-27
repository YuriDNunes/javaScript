// function myFunction(){
//     console.log("Testing");
// }

// myFunction();


// const myFunctionInVar = function(){
//     console.log("Função em varíavel");
// }

// myFunctionInVar();

// function functionWithParameter(txt){
//     console.log(`Imprimindo: ${txt}`)
// }

// functionWithParameter("printing")

// functionWithParameter("Other function")

// retur

// const a = 10; 
// const b = 20;
// const c = 30;
// const d = 40

// function sum(n1,n2){
//     return n1 + n2;
// }

// const resultado = sum(a,b)

// console.log(resultado)

// console.log(soma(c,d))

// let y = 10

// function testingScope(){
//     let y = 20
//     console.log(`Y in function is ${y}`)
// }

// testingScope()

// console.log(`Y out of the function is ${y}`)

// nested scopes

// let m = 10

// function nestedScopes(){
//     let m = 20

//     if(true){
//         let m = 30
//         console.log(m)
        
//         if(true){
//             let m = 40
//             console.log(m)
//         }
//     }
    
//     console.log(m)
// }

// nestedScopes()

// console.log(m)

// arrow function

// const testArrow = () => {
//     console.log("This is an arrow function")
// }

// testArrow()

// const evenOrOdd = (n) =>{
//     if(n % 2 === 0){
//         console.log("it's even")
//         return
//     }
    
//     console.log("It's odd")
// }

// evenOrOdd(5)

// evenOrOdd(6)

// const squareRoot = (x) => {
//     return x * x
// }

// console.log(squareRoot(4))

// const squareRoot2 = (x) => x * x

// console.log(squareRoot2(5))

// optional parameter

// const multiply = function(m,n){

//     if(n === undefined){
//         return m *2 
//     } else {
//         return m * n
//     }

// }

// console.log(multiply(5))

// console.log(multiply(2,4))

// const greeting = (name) => {

//     if(!name){
//         console.log("Olá")
//         return
//     }

//     console.log(`Olá ${name}`)

// }

// greeting()

// greeting("Yuri")

// default value

// const customGreeting = (name, greet = "Olá") => {
//     return `${greet}, ${name}!`
// }

// console.log(customGreeting("Yuri"))

// console.log(customGreeting("Yuri","Morning"))

// const repeatText = (text, repeat = 2) => {
//     for (let i = 0; i < repeat; i++){
//         console.log(text)
//     }
// }

// repeatText("Testing")

// repeatText("Other text", 4)

// closure

function someFunction(){
    let txt = "Something"

    function display(){
        console.log(txt)
    }

    display()
}

someFunction()

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m
    }
}

const c1 = multiplicationClosure(5)

console.log(c1)

console.log(c1(5))

// recursion

const untilTen = (n,m) => {
    if(n < 10){
        console.log("The function stoped")
    } else{
        const x = n - m

        console.log(x)

        untilTen(x,m)
    }

}

untilTen(50,5)

function factorial(x) {
    if(x === 0){
        return 1
    } else{
        return x * factorial(x - 1)
    }
}

const num = 6

const result = factorial(num)

console.log(result)