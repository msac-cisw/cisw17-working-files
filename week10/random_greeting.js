// random_greeting.js
// Log a random greeting from a list of greetings

function random_greeting(name) {
    // assign the name
    let your_name = name;

    // define an array of greetings
    const greetings = [
        `👋 Hello, ${your_name}!`,
        `🤠 Howdy, ${your_name}! 🤠`,
        `Yo, ${your_name}, what's up my dude?`,
        `Ciao, ${your_name}! 👻👻`,
        `🎂 Salutaions, ${your_name}!`,
        `Hola, ${your_name}!`,
        `Hey, ${your_name}!💜`
    ];

    // pick a random greeting
    let x = Math.floor(Math.random() * greetings.length);

    // log to the console
    console.log(greetings[x]);
}

random_greeting("Sammy");
random_greeting("Friend");
random_greeting("Morlock");
random_greeting("Bob");


