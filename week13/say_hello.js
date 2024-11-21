// get the name from the form and output a custom message

const my_form = document.forms.sayHello;
const message = document.getElementById("message");

// function to create the custom message
// be sure to prevent default
function custom_message(e) {
    // prevent default form action
    e.preventDefault();

    // update the message div
    if ( my_form.yourName.value == "" ){
        // do nothing
    } else {
        message.innerHTML = `<h2>👋 Hi there, ${my_form.yourName.value}.`

        // clear the name field
        my_form.yourName.value = "";
    }
    
}


// add event listener
my_form.addEventListener('submit', custom_message)