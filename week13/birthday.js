// Get the date and check if today is the birthday
const button = document.getElementById("submit");
let message = document.getElementById("message");

function check_birthday() {
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDate();

    // get the value from the input
    let pick = document.getElementById("bday").value;
    let bday = new Date(pick);
    let bd_month = bday.getMonth();
    let bd_day = bday.getDate();

    // check if today is the bday
    // add the message
    if (
        bd_month == month &&
        bd_day == day
    ) {
        message.innerHTML = "<h2>Happy Birthday!</h2>";
    } else {
        message.innerHTML = "<h2>It's not your birthday yet.</h2>";
    }
    // clear the date picker
    document.getElementById("bday").value = "";

    // console.log(`Today: ${today}`);
    // console.log(`Date entered: ${pick}`);
}



// add an event listener on the button
button.addEventListener("click", check_birthday);