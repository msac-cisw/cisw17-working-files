// This will calculate the tip and total to display

let bill = document.getElementById("bill");
let form = document.forms.amount;
let submit = document.getElementById("submit");
let results = document.getElementById("results");
let displayTotals = document.getElementById("displayTotals");
let startOver = document.getElementById("startOver");

// The money variables
let billTotal = 0;  // the amount of the bill
let tipAmount = 0;  // the amount of the tip
let total = 0;      // the billTotal + the tipAmount

// create the tipBig function
function tipBig(e) {
    e.preventDefault();

    // get the bill amount from the input field
    billTotal = Number(form.billTotal.value);
    tipAmount = billTotal * 0.2;
    total = billTotal + tipAmount;

    // hide the bill div
    bill.style.display = "none";

    // add bill details and show the div
    displayTotals.innerHTML = `The bill is $${billTotal.toFixed(2)}<br>`;
    displayTotals.innerHTML += `The tip is $${tipAmount.toFixed(2)}<br>`;
    displayTotals.innerHTML += `The total is <b>$${total.toFixed(2)}</b>`;
    
    // show the results div
    results.style.display = "block";
}

function reload() {
    // reload the window
    window.location.reload();
    // clear the bill total
    form.billTotal.value = "";
}


// add event handlers
submit.addEventListener("click", tipBig);
startOver.addEventListener("click", reload);