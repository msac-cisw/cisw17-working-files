// What is a function in JavaScript?
// https://www.w3schools.com/js/js_functions.asp

const colors = ['Red 🟥','Orange','Yellow','Green','Blue','Indigo','Violet']

function favoriteColor() {
    // Let's pick a random color from colors
    let x = Math.floor(Math.random() * colors.length)
    console.log(`My favorite color is ${colors[x]}.`)
}

favoriteColor()
favoriteColor()
favoriteColor()

// Create a function to say hello to you by name
function greetByName(yourName) {
    console.log(`Hello, ${yourName}!`);
}

let getName = prompt("What's your name, dawg?")
greetByName(getName);












