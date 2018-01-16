/* function hello() {
    console.log('hello')
} */


function printInfo(first, last, title) {
return title ?  `${title} ${first} ${last}` : `${first} ${last}`
}


console.log(`My name is ${printInfo('Nicole', 'Jeffrie')}.`)
console.log(`My name is ${printInfo('Nicole', 'Jeffries', 'King')}`)

