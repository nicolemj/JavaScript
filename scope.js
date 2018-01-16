let outside = 'Hey I am outside!'

function doSomething() {
    let inside = 'Hey I am inside!'
    console.log(inside, outside)

    function doAnotherThing() {
        let deepInside = 'I am inside another function'
        console.log(deepInside, inside, outside)
    }
doAnotherThing()
}

soSomething()
console.log(inside, outside)