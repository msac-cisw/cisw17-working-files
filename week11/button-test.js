// Create a constant for the button
button = document.getElementById("button");

function buttonClicked() {
    console.log("You clicked the button");
}

button.addEventListener("click", buttonClicked);