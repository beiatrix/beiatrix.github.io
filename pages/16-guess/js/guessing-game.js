/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

//game logic
function generateWinningNumber() {
    return Math.ceil(Math.random() * 100);
}

function shuffle(arr) {
    let m = arr.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…        
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.        
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }

    return arr;
}

class Game {
    constructor() {
        this.playersGuess = null;
        this.pastGuesses = [];
        this.winningNumber = generateWinningNumber();
    }

    difference() {
        return Math.abs(this.playersGuess - this.winningNumber);
    }

    isLower() {
        return (this.playersGuess < this.winningNumber ? true : false);
    }

    playersGuessSubmission(n) {
        //convert string to number
        n = Number(n);
        if (n < 1 || n > 100 || isNaN(n)) {
            throw "That is an invalid guess.";
        }
        this.playersGuess = n;

        return this.checkGuess();
    }

    checkGuess() {

        const message = document.getElementById("message");

        // console.log(this.pastGuesses);
        if (this.playersGuess === this.winningNumber) {
            // console.log("You Win!");
            message.innerHTML = "You Win!";
            return "You Win!";
        } 
        else if (this.pastGuesses.includes(this.playersGuess)) {
            // console.log("You have already guessed that number.");
            message.innerHTML = "You have already guessed that number.";
            return "You have already guessed that number.";
        } 
        else if (this.pastGuesses.length === 4) {
            this.pastGuesses.push(this.playersGuess);
            // console.log(`You Lose. The winning number was ${this.winningNumber}.`);
            message.innerHTML = `You Lose. The winning number was ${this.winningNumber}.`;
            return `You Lose. The winning number was ${this.winningNumber}.`;
        } 
        else if (Math.abs(this.winningNumber - this.playersGuess) < 10) {
            this.pastGuesses.push(this.playersGuess);
            // console.log("You\'re burning up!");
            message.innerHTML = "You\'re burning up!";
            return "You\'re burning up!";
        }
        else if (Math.abs(this.winningNumber - this.playersGuess) < 25) {
            this.pastGuesses.push(this.playersGuess);
            // console.log("You\'re lukewarm.");
            message.innerHTML = "You\'re lukewarm.";
            return "You\'re lukewarm.";
        }
        else if (Math.abs(this.winningNumber - this.playersGuess) < 50) {
            this.pastGuesses.push(this.playersGuess);
            // console.log("You\'re a bit chilly.");
            message.innerHTML = "You\'re a bit chilly.";
            return "You\'re a bit chilly.";
        }
        else if (Math.abs(this.winningNumber - this.playersGuess) < 100) {
            this.pastGuesses.push(this.playersGuess);
            // console.log("You\'re ice cold!");
            message.innerHTML = "You\'re ice cold!";
            return "You\'re ice cold!";
        }


    }

    provideHint() {
        let arr = [this.winningNumber];
        arr.push(generateWinningNumber(), generateWinningNumber());
        shuffle(arr);
        return arr;
    }
}

function newGame() {
    const g = new Game();
    return g;
}

function playGame() {
    const game = newGame();
    console.log('game is running my dude');


    //event handler for button click
    const userInputBtn = document.getElementById("userInputBtn");
    userInputBtn.addEventListener('click', function() {
        //capture user input in playersGuess variable
        const userInput = document.querySelector('input').value;
        //resets text field so user doesn't have to manually delete
        document.querySelector('input').value = '';
        // alert(typeof userInput);
        game.playersGuessSubmission(userInput);

        //populate guessboxes
        const guess1 = document.getElementById("guess1");
        const guess2 = document.getElementById("guess2");
        const guess3 = document.getElementById("guess3");
        const guess4 = document.getElementById("guess4");
        const guess5 = document.getElementById("guess5");
        // console.log(game.pastGuesses);
        guess1.innerHTML = game.pastGuesses[0];
        if (game.pastGuesses.length === 2) {
            guess2.innerHTML = game.pastGuesses[1];
        }        
        if (game.pastGuesses.length === 3) {
            guess3.innerHTML = game.pastGuesses[2];
        }
        if (game.pastGuesses.length === 4) {
            guess4.innerHTML = game.pastGuesses[3];
        }
        if (game.pastGuesses.length === 5) {
            guess5.innerHTML = game.pastGuesses[4];
        }
    })
    
    //event handler for enter keypress
    const userInputEnter = document.getElementById("userInput");
    userInputEnter.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            userInputBtn.click();
        }
    })

    //event handler for hint
    const hintBtn = document.getElementById("hintBtn");
    hintBtn.addEventListener('click', function() {
        const hint = document.getElementById("hint");
        hint.innerHTML = 'Try one of these: ' + game.provideHint();
        //hint disappears after 3 seconds
        setTimeout(function(){ 
            document.getElementById("hint").innerHTML = "";
        }, 3000);
        // alert('Try one of these: ' + game.provideHint());
    })

    //event handler for reset
    const reset = document.getElementById("reset");
    reset.addEventListener('click', function() {
        location.reload();
    })
}

playGame();
