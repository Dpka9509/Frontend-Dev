// Generate secret number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Test value for user's guess
let userGuess = 18;   // change this to test

console.log("Secret Number:", secretNumber);
console.log("Your Guess:", userGuess);

// Guessing logic
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    
    // Nested conditions for "very close"
    if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
        console.log("Very close!");
    } else {

        // Too high or too low
        if (userGuess > secretNumber) {
            console.log("Too high");
        } else {
            console.log("Too low");
        }

    }
}
