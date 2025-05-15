// hover.js
// Place an emoji randomly on the page
// Change the background color when hovered over
// https://www.w3schools.com/js/js_htmldom_events.asp

// Create a constant and place the emoji randomly
const lion = document.createElement('div');
lion.innerHTML = "🦁";
lion.style.position = "absolute";
lion.style.fontSize = "72px";
lion.style.top  = Math.floor(Math.random() * 500) + "px"; 
lion.style.left = Math.floor(Math.random() * 400) + "px";
document.body.appendChild(lion);

// Create a function for emoji
function roar() {
    document.body.style.background = "lightyellow";
    document.body.innerHTML = "<h1>RRROOOOOAAAAARR!!!!</h1>";
}

// Create an event handler
lion.addEventListener("mouseover", roar)