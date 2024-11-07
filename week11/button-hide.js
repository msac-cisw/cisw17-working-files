// Create a constant for the button
const button = document.getElementById("button");
const box = document.getElementById("box");
const box2 = document.getElementById("box2");

box.innerHTML = "<b>Not Clicked</b>";
box2.innerHTML = "<b>Clicked!</b>";

function buttonClicked() {
    // console.log("You clicked the button");
    box2.style.display = "block";
    box.style.display = "none";
    
}

button.addEventListener("click", buttonClicked);