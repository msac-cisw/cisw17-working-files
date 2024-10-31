// roses.js
// Ask the user to input words and then display a poem using those words

/*
Roses are ADJ1
Violets are ADJ2
NOUN is ADJ3
and so are you!
*/

const adj1 = prompt("Enter an adjective:");
const adj2 = prompt("Enter another adjective:");
const noun = prompt("Enter a noun:");
const adj3 = prompt("Enter one more adjective:");

const poem = `
Roses are ${adj1}
Violets are ${adj2}
${noun} is ${adj3}
and so are you!
`;

console.log(poem);
