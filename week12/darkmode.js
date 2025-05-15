// darkmode (or very, very, very dark gray)
// Toggle the darkmode class when the 'd' is pressed

function toggleDarkMode(event) {
    // e.keyCode for 'd' is 68
    // check for the 'd' key
    if (event.keyCode == 68) {
        document.body.classList.toggle('darkmode');
    }
    // console.log(event.keyCode);
}

document.onkeydown = toggleDarkMode;