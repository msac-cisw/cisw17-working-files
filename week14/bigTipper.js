// Tip Big!
// assign variables for form, submit button, results
let form = document.forms.amount;
let submit = document.getElementById('submit');
let results = document.getElementById('results');
let startOver = document.getElementById('startOver');
let billTotal = 0;
let tipAmount = 0;
let newTotal = 0;

// create the bigTipper function
function bigTipper(event) {
    // prevent the default
    event.preventDefault();

    // get the billTotal from the form
    billTotal = Number(form.billTotal.value);

    // get the tipAmount 0.2 is 20%
    tipAmount = billTotal * 0.2;

    // round up for cash tip
    tipAmount = Math.ceil(tipAmount);

    // get the newTotal
    newTotal = billTotal + tipAmount;

    // hide the form
    form.style.display = "none";

    // build the results div
    results.innerHTML = `<h2>New Total: $${newTotal.toFixed(2)}</h2>`;
    results.innerHTML += `<p>The bill is $${billTotal.toFixed(2)}<br>`;
    results.innerHTML += `The tip is $${tipAmount.toFixed(2)}</p>`;
    // results.innerHTML += `<p><small><i>The tip has been rounded up</i></small></p>`;
    
    // show the results and reload button
    results.style.display = "block";
    startOver.style.display = "block";

    // clear the total for the next bill
    form.billTotal.value = "";

}
// create the reload function when start over is clicked
function reload() {
    window.location.reload();
}


// add event handlers
submit.addEventListener("click", bigTipper);
startOver.addEventListener("click", reload);