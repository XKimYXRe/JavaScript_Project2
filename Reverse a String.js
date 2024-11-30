const readlineSync = require('readline-sync');


function reverseString(string){
    let stringSplit = string.split('')
    let reverseString = stringSplit.reverse()
    let joinString = stringSplit.join('')
    return joinString
}

let userInput = prompt("Veuillez saisie un mot ou une phrase à inverser: ")
console.log(reverseString(userInput))