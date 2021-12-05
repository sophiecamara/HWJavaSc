let prompt=require('prompt-sync')()
let userInput= prompt('enter a word:').toLowerCase()
let word=0
num=0
spechars=0
for(i=0; i<userInput.length; i++)
{
    if (userInput.charCodeAt(i)>=97&& userInput.charCodeAt(i)<=122)
    { 
      word ++
    }
    else if(userInput.charCodeAt(i)>=48 && userInput.charCodeAt(i)<=57)
    { 
      num ++
    }  
    else
    {
      spechars++  
    }
      
}
    console.log('There are ' +  word + ' letters')
    console.log('There are ' +  num  +   ' numbers')
    console.log( 'There are ' + spechars + ' special characters')
