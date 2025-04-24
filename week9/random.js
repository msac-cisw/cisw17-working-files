// Generate random numbers
// Use Math.random() - between 0 and 1
let x = Math.random();
console.log(x);

// between 0 and 5
// use Math.floor() to round down
x = Math.floor(Math.random()*6);
console.log(x);

const ice_cream = [
    'chocolate',  // item 0
    'vanilla',    // item 1
    'pecan'       // item 2
];

x = Math.floor(Math.random()*3);
let fav = "My favorite ice cream is " + ice_cream[x];
console.log(fav);