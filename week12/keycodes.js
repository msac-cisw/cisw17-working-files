// keycodes.js
// Log the keycodes as each key is pressed
const keycodes = document.getElementById("keycodes");

// create a function to output the code
function logKeyCode(e) {
    // output the keycode
    // console.log("You pressed: ", e.key, e.keyCode);
    keycodes.innerText = "Key: " + e.key + "\n";
    keycodes.innerText += "keyCode: " + e.keyCode;
}


// add onkeydown to call the function
document.onkeydown = logKeyCode;
