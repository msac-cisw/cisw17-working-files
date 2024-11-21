// darkmode.js
// Press 'd' to enable dark mode

// Create a function to enable darkmode
// when the 'd' key is pressed
// 'd' is keyCode 68
function darkMode(e) {
    // darkmode
    if (e.keyCode == 68) {
        // console.log("toggled")
        document.body.classList.toggle("darkmode");
    }
    if (e.keyCode == 66) {
        // what happens when 'b' is pressed?
        document.body.classList.toggle("hide");
        document.body.classList.toggle("show");
    }
}

document.onkeydown = darkMode;