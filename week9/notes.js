// JavaScript

// Our first JS program
// Print "Hello, World!" to the console

console.log("Hello, World!");

// Ways to call JS
// Put in a separate file
/* <script src="script.js" defer></script> */

// Use a script tag
// <script></script>

// Variables
let firstName = "Steve";
console.log(firstName); // Steve

let steveAge = 27;
console.log(steveAge); // 27

let bertha_age = 17;

if ( bertha_age > 17 ) {
    console.log("You can see the movie");
}

if ( bertha_age <= 17 ) {
    console.log("Come back when you are older")
}

// Arrays (lists)

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "rebeccapurple",
    "violet"
  ];

// 0 indexed
// ["red", "orange", "yellow"]
//     0       1         2

// pick a random number between 0 and 6
// Math.random() gives a number between 0 and 1
// Math.floor() rounds down (ceil rounds up)
let x = Math.floor(Math.random() * 6);




