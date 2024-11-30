const readlineSync = require('readline-sync')

let numbers = []

let i = 1
while (i<6) {
    let userInput = prompt(`Veuillez entrer la ${i}er valeur du tableau:`)
    numbers.push(parseInt(userInput))
    i++
}

console.log(numbers)

let sum = 0

function sumArray(sum){
    for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index]  
}
    return sum
}


console.log(sumArray(sum))