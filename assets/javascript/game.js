// Set score variables to 0

let wins = 0;
let losses = 0;

// Set guesses remaining to 9

let guessesLeft = 9;

// Randomly choose a letter and assign to a compLett

function randomLetter() {
  var letters = "abcdefghijklmnopqurstuvwxyz";
  return letters.substr(Math.floor(Math.random() * 26), 1);
}

var compLett = randomLetter();

// Listen for user's letter choice

document.onkeyup = function(event) {
  // Determines which key was pressed.
  var userLett = event.key;

  console.log("Your Guesses so far: " + userLett);
};

console.log("App Guessed: " + compLett);

console.log("Wins: " + wins);
console.log("Losses: " + losses);
console.log("Guesses Left: " + guessesLeft);
