// badPoetry.js
// A madlibs style short poem

// A noun is a person, place or thing
// An adjective is a describing word

let greeting = "Hello, earthling. \nLet's make a poem so bad your fifth grade english teacher will roll over in their grave!"
console.log(greeting);
console.log("-----");

let adj1 = prompt("Enter an adjective:");
let adj2 = prompt("Enter another adjective:");
let adj3 = prompt("Enter one final adjective:");
let pluralNoun1 = prompt("Enter a plural noun:");
let pluralNoun2 = prompt("Enter another plural noun:");
let badPoem;

function capitalizeFirstLetter(string) {
    const firstCharUpper = string.charAt(0).toUpperCase();
    const restOfString = string.slice(1);
    return firstCharUpper + restOfString
}

badPoem = `Roses are ${adj1}.\n`;
let CapsPluralNoun1 = capitalizeFirstLetter(pluralNoun1);
badPoem += `${CapsPluralNoun1} are ${adj2}.\n`;
// I would like the first letter of pluralNoun2 to be capitalized
let CapsPluralNoun2 = capitalizeFirstLetter(pluralNoun2);
badPoem += `${CapsPluralNoun2} are ${adj3},\n`;
badPoem += `and so are you!`;

// Output your badPoem to the console
console.log("-----");
console.log(badPoem);
