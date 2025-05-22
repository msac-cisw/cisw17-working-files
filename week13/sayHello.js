// sayHello.js

const myForm = document.forms.say_hello;
const message = document.getElementById("message");

// create a function to say hello
function sayHello(e) {
    // prevent the default form action
    e.preventDefault();
    message.textContent = `👋 Hi ${myForm.name.value}.`
}

// add an event listener to the button
myForm.addEventListener('submit', sayHello);