const readlineSync = require('readline-sync')

let numbers = [1, 2, 3, 4, 5, 6, 1, 3, 1, 2, 3, 1, 2, 3, 4, 6, 4, 5, 6, 5, 6, 1, 2, 3]

let filter = []

let userInput = prompt('Veuillez entrer un nombre (1 - 6) à filtrer: ')

function filterArray(){
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] == userInput) {
            filter.push(numbers[index])
        }
    }
}

filterArray()
console.log(filter)
console.log(filter.length,"element trouvé!!!")