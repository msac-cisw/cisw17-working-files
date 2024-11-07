// loop.js
// Create a game loop using while
// https://www.w3schools.com/js/js_loop_while.asp

let play_again = "y";

while (play_again == "y") {
    play_again = prompt("Play again? (y/n) ")
    if (play_again == "n") {
        break;
    }
}

console.log("Goodbye");