// grab the data from the form and create a madlibs style poem
// define the variables
// we need to get the value of the form field

const form = document.getElementById("form");
const submit = document.getElementById("submit"); 
const poemOutput = document.getElementById("poemOutput");

poemOutput.style.display="none";

// create a function to generate the poem
// output the poem to poemOutput
function generatePoem() {
    
    let adj1 = form.adj1.value;
    let adj2 = form.adj2.value;
    let adj3 = form.adj3.value;
    let noun = form.noun.value;
    poem = `Roses are <b>${adj1}</b>,<br>`;
    poem += `Violets are <b>${adj2}</b>,<br>`;
    poem += `<b>${noun}</b> are <b>${adj3}</b>,<br>`;
    poem += `and so are you!`;

    poemOutput.innerHTML = poem;

    // hide the form
    form.style.display="none";
    poemOutput.style.display="block";

}

// add an event listener on the button
submit.addEventListener("click", generatePoem);

// add an event listener for the Enter key
form.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        generatePoem();
    }
});