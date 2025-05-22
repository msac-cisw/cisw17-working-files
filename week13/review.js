// review

/* 

What is a keyCode and how do you use it?
d = 68
h = 72
? = 191

How do you "grab it" from the web page?
document.onkeydown = someFunction; // no ()

How do you make decisions based on the key pressed?
get the even in the function 

function someFunction(event) {
    // your code here
    if (
        event.key == 'h'
        ) {
        console.log("You pressed h!")
    }
}

"mouseover" or a "hover" event...

How do we "listen" for the mouseover?
const myElement = document.getElementById('something');
myElement.addEventListener("mouseover", myFunction); // no ()

Does it matter where you put the event listener or the function on the page?

E.g. - will this work?  // yes

console.log(myHelloFunction("Sammy"));

function myHelloFunction(name) {
    console.log(`Hello, ${name}!`)    
}

myFunc(5, 7);  // no
let myFunc = (a, b) { return a * b};


*/