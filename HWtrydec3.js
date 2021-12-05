let prompt = require("prompt-sync")();
let userInput = prompt("enter a word: ");
let word = 'the' 
let repeat=0

let string= userInput.split(' ')

for ( let i = 0 ; i<string.length; i++) 
{
    if(word==string[i])
    {
    repeat++
    }
    
}

console.log(repeat)