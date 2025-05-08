// Use the date function to compare with your birthday

// Enter your birthday (Months are 0 indexed)
// let bday = new Date(1988, 11-1, 19);
let bday = new Date(1988, 5-1, 7);

// Get the month and day
let bd_month = bday.getMonth();
let bd_day = bday.getDate();

// Get the current day and month
let today = new Date();
let month = today.getMonth();
let day = today.getDate();

// check if today is your birthday
if (
    month == bd_month && day == bd_day
) {
    console.log("Happy Birthday! 🎂🎈🎉");
} else {
    // it's not
    console.log("It's not your birthday.");
}