// Choose a random color for the background

const button = document.getElementById("button");

// Define our list of colors
const colors = [
    '#FAF7F5', // Subtle Warm Off-White - A very clean, almost white with a hint of warmth.
    '#E6F0F7', // Pale Sky Blue - A very light, airy blue, calming and clean.
    '#FCEEEE', // Whisper Pink - A delicate, barely-there pink, soft and modern.
    '#E0F7FA', // Light Aqua Mist - A hint of pale cyan/aqua, fresh and bright.
    '#FFF0E1', // Pale Apricot/Seashell - A very light, soft warm peachy tone.
    '#F3EFFF', // Very Light Lavender - A subtle, gentle lavender hue, serene.
    '#F5F5F5'  // White Smoke - A standard, clean, very light gray, neutral and versatile.
  ];


// Pick a random number between 0 and 6
x = Math.floor(Math.random()*6);

// Log the chosen color
// console.log("Chosen color: ", colors[x]);

// Change the background to colors[x];
document.body.style.background = colors[x];

// Write a function to change the color on click
function changeColor() {
    // Pick a new random number
    x = Math.floor(Math.random()*6);

    // change the background color
    document.body.style.background = colors[x];
}

// Add an event listener to the button that runs the changeColor function when clicked
button.addEventListener("click", changeColor);