// Random quotes

const quotes = [
    "You Don't Have Time To Think Up There. You Think, You're Dead",
    "The Pentagon Sees To It That I Know More Than You.",
    "That Was Some Of The Best Flying I've Seen To Date — Right Up To The Part Where You Got Killed.",
    "Remember Boys, No Points For Second Place.",
    "I feel the need, the need for speed.",
    "We didn't slide into Cougar's spot. It was ours, okay?",
    "Hollywood, you look good. I'm going after Viper."
];

// pick a random number between 0 and the length of quotes
let x = Math.floor(Math.random() * quotes.length);

// log quote to the console for testing
// console.log(quotes[x]);

// add the quote to the page
document.getElementById("quote").innerHTML = quotes[x];

