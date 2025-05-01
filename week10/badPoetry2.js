// badPoetry2.js - Revenge of the Rose

const button = document.getElementById("button");
const madlib = document.getElementById("madlib");
const instructions = document.getElementById("instructions");

function badPoem() {
    // hide the instructions
    instructions.style.display = "none";

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

    badPoem = `<p>Roses are ${adj1}.<br>`;
    let CapsPluralNoun1 = capitalizeFirstLetter(pluralNoun1);
    badPoem += `${CapsPluralNoun1} are ${adj2}.<br>`;
    // I would like the first letter of pluralNoun2 to be capitalized
    let CapsPluralNoun2 = capitalizeFirstLetter(pluralNoun2);
    badPoem += `${CapsPluralNoun2} are ${adj3},<br>`;
    badPoem += `and so are you!</p>`;

    madlib.innerHTML = badPoem;
    madlib.style.display = "";
}

button.addEventListener("click", badPoem);