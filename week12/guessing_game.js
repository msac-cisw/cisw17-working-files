// guessing_game
// try to guess the computers number in 3 tries

// comp will pick a number between 1 and 10
let comp_num = Math.ceil( Math.random() * 10) ;
let player_num = 0;
let message = "";
let guesses = 0;    // iterate with each attempt
let attempts = 3;
let greeting = "Can you guess my number?";

console.log(greeting);
console.log("Cheat code: ", comp_num);

// Create a game loop to guess numbers
while (player_num != comp_num) {
    player_num = prompt("Enter a number between 1 and 10: ");
    guesses += 1;
    
    // Did you pick the right number?
    if ( player_num == comp_num ) {
        console.log("You win!");
        break
    } else if ( player_num < comp_num ) {
        // if you run out of guesses
        if (guesses == attempts) {
            console.log("You lose");
            break
        }
        console.log("Too low");
    } else if ( player_num > comp_num ) {
        if (guesses == attempts) {
            console.log("You lose");
            break
        }
        console.log("Too high");
    }
    
}  

console.log("Thank you for playing");




