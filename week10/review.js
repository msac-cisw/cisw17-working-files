// Week 9 review.js

/*
boolean - true / false
string - use "" or '' (do not mix)
number - 1 2 7

object - 

Variables
--------
var - globally scoped
let - locally scoped
const - immutable 

Operators
---------
+   concatenate
+   add
=   assignment
==  equality
+=  addition assignment
-=  subtraction assignment
++  increment
--  decrement
%   modulo (remainder)
/   division
*   multiplication
**  Exponentiation

*/

// Use a for loop to count down from 10
for (let i = 10; i >= 1; i--) {
    console.log(i, "🍪");    
}

// Use a while loop to count all the numbers from 1 to 100 (5050)
let sum = 0;
let number = 1;

while (number <= 100) {
    sum += number; // sum = sum + number
    number++;
}
console.log(`The sum of numbers from 1 to 100 is: ${sum}`);

// Note the template variable used above (backticks are `)

// Pick a random fruit from an array of fruits
const fruits = ['🍎', '🍏', '🍌', '🍊', '🍉', '🍓'];

let wisdom = "Intelligence is knowing that a tomato is a fruit. Wisdom is to not put it in a fruit salad. 🍅"

// Math.floor() - rounds down (so you can get 0)
// Math.random() - number between 0 and 1
// fruits.length = 6
// Math.random() * fruits.length - number between 0 and 5

let x = Math.floor(Math.random() * fruits.length);
console.log(fruits[x]);

// Output three random fruits

for (let i = 3; i >= 1; i--) {
    // console.log(`This is run ${i}`);   
    x = Math.floor(Math.random() * fruits.length);
    console.log(fruits[x]); 
}








console.log(wisdom);