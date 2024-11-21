// Week 12
// Focus on events and handling events

// add an event listener to a DOM object
// https://www.w3schools.com/js/js_htmldom_events.asp

// define a variable to grab the object from the html page
const button = document.getElementById("button");

// add the event listener
//        click, mouseover, etc   some function ...
button.addEventListener("click", doSomething);

// Keycodes
// https://www.w3schools.com/jsref/event_onkeydown.asp

// Find the keycodes for 'd', 'b', 'h', '?', the escape key
// e.key    e.keyCode
// d    =   68
// b    =   66
// h    =   72
// ?    =   191
// Esc  =   27

if ( e.keyCode == 72 || e.keyCode == 63 ) {
    // some code
}