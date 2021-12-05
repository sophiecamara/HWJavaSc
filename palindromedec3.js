let prompt=require('prompt-sync')()

let string ='racecar';
let reversed=''


for (let i= string.length-1;  i>=0; i--)
{
reversed+=string[i]

}
if (string.toLowerCase===reversed.toLowerCase)
{
    console.log(' we have a palindrome')
}
else{
console.log('not a palindrome')
}
