// birthday.js
// Is today your birthday?

// Use the Date() to get todays date
// https://www.w3schools.com/js/js_dates.asp

let message;

// Get todays date and assign the month and year
const today = new Date();
const month = today.getMonth();
const day = today.getDate();

// Manually enter a birthday
const bday = new Date(1997, 11, 6);
const bd_month = bday.getMonth();
const bd_day = bday.getDate();

// compare the month and day
if ( month == bd_month && day == bd_day ) {
    message = "Happy Birthday!"
} else {
    message = "It's not your birthday yet."
}

console.log(message);