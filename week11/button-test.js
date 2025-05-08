// Click the button to do something...
/* 
Three steps to making the button do something:

    1. define the button const
    2. create some function
    3. add event listener
*/
const button = document.getElementById("button");
const showHide = document.getElementById("showHide");

function buttonClicked() {
    // code here
    console.log("You clicked the button")
    showHide.classList.toggle("hide");
}

button.addEventListener("click", buttonClicked);