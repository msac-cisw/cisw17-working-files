// Rock, Paper, Scissors - GOOOOOOO
// Run this in the cli
let greeting=`The rules:
🪨  Rock beats ✂️ Scissors
✂️ Scissors beats 📄 Paper
📄 Paper beats 🪨  Rock\n`
console.log(greeting)

// Generate the computer_choice
let x = Math.floor(Math.random() * 3);
let choices = ['r', 'p', 's'];
let computer_choice = choices[x];
// cheat code
// console.log("Computer chose: " + computer_choice);

// Get the player_choice
let player_choice = prompt("Choose Rock, Paper, or Scissors (r/p/s): ");
player_choice = player_choice[0].toLowerCase();
// console.log("You chose: " + player_choice);

// figure out win / lose / tie
if (player_choice == 'r' && computer_choice == 's' ||
    player_choice == 'p' && computer_choice == 'r' ||
    player_choice == 's' && computer_choice == 'p') {
        console.log("You Win! 😃")
    } else if ( player_choice == computer_choice ) {
        console.log("It's a tie!")
    } else {
        console.log("The computer wins.")
    }

console.log("Thanks for playing.");



