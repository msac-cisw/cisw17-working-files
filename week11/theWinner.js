// theWinner.js
// Choose a number and see if you beat the computer

// console.log("Who has the highest number?");

let score1; // computer
let score2; // you
let message; // tell who won
let wins = 0;
let games_played = 0;
let play_again = "y";

while (play_again == "y") {
    // pick the random numbers
    score1 = Math.floor(Math.random() * 10); // computer
    score2 = Math.floor(Math.random() * 10); // you
    
    // increment the games_played
    games_played = games_played + 1;

    // let's find out who the winner is
    if (score1 > score2) {
        // computer wins
        message = "Computer wins!"
    } else if (score2 == score1) {
        // it's a tie
        message = "It's a tie"
    } else {
        // you win
        message = "You win!!!!!!"
        wins = wins + 1
    }
    console.log(`Computer score: ${score1}`);
    console.log(`Your score: ${score2}`);
    console.log(message);
    console.log(`Wins: ${wins}`);
    console.log(`You've played ${games_played} games.`);
    play_again = prompt("Play again? (y/n)")
    if (play_again == "n") {
        break;
    }
}

// What is the win ratio?
let win_ratio = Math.round((wins / games_played) * 100);
// Bonus - round the percent UP
console.log(`Your win ratio is: ${win_ratio}%`);
console.log("Goodbye");