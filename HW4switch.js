let prompt = require('prompt-sync')()
let menu = Number(prompt('choose from 1-5:'))

let userInput = Number(prompt('enter a number:'))
let userInput2 = Number(prompt('enter another number:'))
let result;

switch (menu) {
    case 1:
        result = userInput + userInput2;
        console.log('The result is' + result)
        break;

    case 2:
        result = userInput - userInput2;
        console.log('The result is' + result)
        break;

    case 3:
        result = userInput * userInput2;
        console.log('The result is' + result)
        break;

    case 4:
        result = userInput / userInput2;
        console.log('The result is ' + result)
        break;

    case 5:
        console.log('Exit')
    default:
        console.log("Invalid option");
}