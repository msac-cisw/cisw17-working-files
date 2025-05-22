// birthday.js
const myForm = document.forms.birthday;
const button = document.getElementById("submit");
const message = document.getElementById("message");

function checkBday(e) {
    e.preventDefault();
    // console.log("You clicked");
    // console.log(document.forms.birthday.birthday.value);
    myForm.hidden = true;
    document.getElementById("h1").hidden = true;

    // get today's date
    let today = new Date();
    let month = today.getMonth();
    let day = today.getDate();

    // assign bday values
    let birthday = document.forms.birthday.birthday.value;
    let bday = new Date(birthday);
    let bd_month = bday.getMonth();
    let bd_day = bday.getDate();

    // console.log(month, day, bd_month, bd_day);
    if (
        month == bd_month && day == bd_day
    ) {
        message.textContent = `🎂 Happy Birthday! 🎈`;
        document.body.style.background = 'lightgreen';
    } else {
        message.textContent = `It's not your birthday. ☹️`
        document.body.style.background = 'pink';
    }
}

// event listener
button.addEventListener("click", checkBday);