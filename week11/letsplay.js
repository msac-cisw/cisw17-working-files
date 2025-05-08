// letsplay.js
// Use a while loop

let play_again = 'y';
let games_played = 0;

while (play_again == 'y') {
    // increment games_played
    games_played++

    // write a message
    console.log("You played a game. I hope you won! 🏆")

    play_again = prompt("Play again? (y/n)")
}
// Thank the player
console.log("Thank you for playing.");
console.log(`You played ${games_played} games.`);