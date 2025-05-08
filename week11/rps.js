// Rock, Paper, Scissors
// Rock > Scissors, Paper > Rock, Scissors > Paper

let greeting = `Welcome to Rock 🪨, Paper 📄, Scissors ✂️ – a game of chance 🎲. 

I'll pick one and then you pick one. Here are the rules:

Rock beats Scissors
Paper beats Rock
Scissors beats Paper\n`
console.log(greeting)

// Generate the computers choice
let x = Math.floor(Math.random() *3 );
let choices = ['r','p','s'];
let computer_choice = choices[x];
// Debug and test only
// console.log(computer_choice);

// Get the players choice
let player_choice = prompt("Choose Rock, Paper, or Scissors (r/p/s):");
player_choice = player_choice[0].toLowerCase();

// Show the choices
console.log(`You picked ${player_choice}.`);
console.log(`The computer picked ${computer_choice}.`)

// Did you win?
if (
    player_choice == 'r' && computer_choice == 's' ||
    player_choice == 'p' && computer_choice == 'r' ||
    player_choice == 's' && computer_choice == 'p'
) {
    console.log("🏆 You Win! 🏆");
} else if (
    player_choice == computer_choice
) {
    console.log("======> It's a tie! <======");
} else {
    console.log("🎮 The computer wins. 🎮");
}

console.log("👋 Thanks for playing.");