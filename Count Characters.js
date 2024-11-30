const readlineSync = require('readline-sync');

function countCharacter(string){
    let count = string.length
    return count
}


let userInput = prompt("Entrer un mot ou un phrase: ")
console.log("Le nombre de caractère est: ", countCharacter(userInput))


