var wins = 0;

var losses = 0; 

var guessesLeft = 9;

var computerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var computerSelection = computerLetters[Math.floor(Math.random() * computerLetters.length)];

var gameOver = false;

document.onkeyup = function(event) {

    var userGuess = event.key;

    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

        if (userGuess === computerSelection) {
            wins++;
            guessesLeft = 9;
            gameOver = true;
        } else if (userGuess != computerSelection) {
            guessesLeft--;
        }

        if ((guessesLeft === 0) && (userGuess != computerSelection)) {
            losses++;
            guessesLeft = 9;
            gameOver = true;
        }

        var html = 
           
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>";

        document.querySelector("#game").innerHTML = html;
        
        var guesses = document.querySelector('#guesses');
        var newP = document.createElement('span');
        newP.textContent = userGuess+', ';
        guesses.appendChild(newP);

        if (gameOver) {
            computerSelection = computerLetters[Math.floor(Math.random() * computerLetters.length)];
            guesses.textContent = 'Your guesses so far: ';
            gameOver = false;
        }

    }
    
};   