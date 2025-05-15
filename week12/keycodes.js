// display the keycodes on the page
// define the document object
// write them to the page
// event handler on the document
let result = document.getElementById('result');

/* What are the following keyCodes:
* d = 68
* b = 66
* h = 72
* ? = 191
*/

function displayKeyCode(e) {
    console.log(`You pressed ${e}`);
    result.innerText = `Key: ${e.key}\n`;
    result.innerText += `keyCode: ${e.keyCode}`;

}

// The onkeydown event occurs when the user presses a key on the keyboard.
document.onkeydown = displayKeyCode;

