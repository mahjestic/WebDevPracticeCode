let maxNum = parseInt(prompt("Enter the maximum number!"));
if(!maxNum){
    maxNum = parseInt(prompt("Please enter a valid number"));
}
const targetNum = Math.floor(Math.random() * maxNum) + 1;

let guess = parseInt(prompt("Enter your guess"));
let attempts = 1;

while(guess !== targetNum){
    attempts++;
    if(guess < targetNum){
        guess = parseInt(prompt("Your guess is too low, guess again!"));
    }else{
        guess = parseInt(prompt("Your guess is too high, guess again!"));
    }
}
console.log(`Good job! ${targetNum} was the correct number. You guessed ${attempts} times`);