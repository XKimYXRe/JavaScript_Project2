const readlineSync = require('readline-sync')

function capitalizeWord(string){
    let capitalize = string.toUpperCase()
    return capitalize
}

let userInput = prompt("Veuillez saisie un mot ou une phrase: ")
console.log(capitalizeWord(userInput))