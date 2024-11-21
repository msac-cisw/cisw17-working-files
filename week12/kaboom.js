// kaboom.js
/* 
*  Create JS that place a random bomb
*  icon on the page that goes kaboom
*  when you mouseover
*
*  create a variable for the bomb
*  position absolute, random top and left
*  64px fontsize, back
*  use the appendChild to place it on the page
*/

const kaboom = document.createElement('div');
kaboom.innerHTML = "🎉";
kaboom.style.position = "absolute";
kaboom.style.top = Math.floor(Math.random() * 350) + "px";
kaboom.style.left = Math.floor(Math.random() * 400) + "px";
kaboom.style.fontSize = "64px";
document.body.appendChild(kaboom);

// create a function when mouseover happens
function makeKaboom() {
    // console.log("mouseover");
    document.body.style.background = "dodgerblue";
    document.body.innerHTML = "<h1>You Win!!!!</h1>"
}

// add event listener for the mouseover
kaboom.addEventListener("mouseover", makeKaboom);