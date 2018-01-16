// Conditionals are ued to perform different actions based on different conditions 
/*
 let hungry  = true
let food

if(hungry){
    console.log('I am so hungry')
} else {
    console.log('keep on keeping on')
}


let age = 22

if(age >= 21) {
    console.log('You drink, and drive! (just not at the same time)')
} else if(age >= 18) {
    console.log('You can drive!')
} */

// let cold = true
// let sandals

// if(cold) {
//     sandals = fasle
// } else {
//     sandals = true
// } 

let cold = true
let clothing = cold ? 'It is too cold for sandals' : 'Break out the flip flops.'

console.log(clothing)

let cold = false

cold ?
console.log('It's too cold for sandals!')