// strict
"use strict"

// ops = "test"
const ops = "test"

// const undefined = 10

// delete [].length

// console.log
// let a = 1
// let b = 2

// if(a == 1){
//     a = b + 2
// }

// console.log(a)

// for(let i = 0; i < b; i++){
//     a = a + 2
//     console.log(a)
// }

// if(a > 5){
//     a = 25
// }

// console.log(a)

// debugger
// let c = 1
// let d = 2

// if(c == 1){
//     c = d + 2
// }

// debugger

function checkNumber(number){
    const result = Number(number)

    if(Number.isNaN(result)){
        console.log("Invalid value")
        return
    }

    console.log("Valid value")
    return result
}

checkNumber(5)
checkNumber("7")
checkNumber({})
checkNumber("Test")

// 

let x = 10

// if (x != 11){
//     throw new Error ("X cannot be different from 11")
// }

// 

try{
    const soma = x + y
} catch(error){
    console.log(`Error: ${error}`)
}

// 
try{
    const value = checkNumber("asd")

    if(!value) {
        throw new Error("Invalid values")
    }
} catch(error){
    console.log(`Error: ${error}`)
} finally{
    console.log("success")
}

// 
function checkArray(arr){
    if(arr.length === 0) {
        throw new Error("Array need elements")
    } else{
        console.log(`Array have ${arr.length} elements`)
    }
}

// checkArray([])
checkArray([1,2,3])