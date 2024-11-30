const readlineSync = require('readline-sync')

function factorielle(userInput) {
    if (userInput === 0) {
        return 1;
    }
    console.log(userInput)
    return userInput * factorielle(userInput - 1);
}

let userInput = parseInt(prompt('Veuillez saisi un nombre: '))
console.log("Le factorielle de", userInput, "est", factorielle(userInput))