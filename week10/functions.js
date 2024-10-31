// functions.js
// https://www.w3schools.com/js/js_functions.asp

/* 
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).
*/

function myGreeting(name) {
    let greeting = `Howdy, ${name}!`;
    greeting = greeting.toUpperCase();
    console.log(greeting);
}

// Call the function
myGreeting("Sammy"); // HOWDY, SAMMY!
myGreeting("Sarah");
myGreeting("Shirley");

// create a function to return the remainder of a division
function remainder(x1, x2) {
    let rem1 = x1 % x2;
    console.log(rem1)
}

// Call the function
remainder(10, 3); // 1
remainder(20, 6); // 2
remainder(16, 4); // 0