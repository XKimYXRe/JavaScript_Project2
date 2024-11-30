const readlineSync = require('readline-sync')

let numbers = []

// let userInput1 = prompt("Veuillez entrer la 1er valeur du tableau: ")
// numbers.push(userInput1)
// let userInput2 = prompt("Veuillez entrer la 2eme valeur du tableau: ")
// numbers.push(userInput2)
// let userInput3 = prompt("Veuillez entrer la 3eme valeur du tableau: ")
// numbers.push(userInput3)
// let userInput4 = prompt("Veuillez entrer la 4eme valeur du tableau: ")
// numbers.push(userInput4)
// let userInput5 = prompt("Veuillez entrer la 5eme valeur du tableau: ")
// numbers.push(userInput5)

let i = 1
while (i<6) {
    let userInput = prompt(`Veuillez entrer la ${i}er valeur du tableau:`)
    numbers.push(userInput)
    i++
}

console.log("Le tableau:",numbers)

function maxAndMin(){
    let max = Math.max(...numbers)
    let min = Math.min(...numbers)
    return [max, min]
}

let [maxValue, minValue] = maxAndMin()

console.log("La Valeur max est:", maxValue)
console.log("La Valeur min est:", minValue)
