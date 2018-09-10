console.log('hewwo');

//set variables to DOM elements
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_h5 = document.querySelector(".result > h5");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
    let compChoice = '';

    let num = Math.round(Math.random()*2);

    if (num == 0) {
        compChoice = 'r';
    } else if (num == 1) {
        compChoice = 'p';
    } else if (num == 2) {
        compChoice = 's';
    }

    return compChoice;
}

function convertToWord(letter) {
  if (letter === "r") return "rock";
  if (letter === "p") return "paper";
  if (letter === "s") return "scissors";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_h5.innerHTML = convertToWord(user) + ' beats ' + convertToWord(computer) + ". you win!";
    // document.getElementById(user).classList.add('greenGlow');
    // const smallUserWord = 'user'.fontsize(3).sub();
    // const smallCompWord = 'comp'.fontsize(3).sub();
    // result_h5.innerHTML = convertToWord(user) + smallUserWord + ' beats ' + convertToWord(computer) + smallCompWord + ". you win!";

    // console.log(user);
    // console.log(computer);
}

function lose(user, computer) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_h5.innerHTML = convertToWord(computer) + ' beats ' + convertToWord(user) + ". you lose!";
    // console.log(compScore);
}

function tie(user, computer) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_h5.innerHTML = convertToWord(computer) + ' equals ' + convertToWord(user) + ". it's a tie!";
    // console.log(userScore, compScore);
}

function playGame(userChoice) {
    console.log('user choice: ' + userChoice);
    const compChoice = getCompChoice();
    console.log('computer choice: ' + compChoice);

    switch (userChoice + compChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            console.log("user wins");
            win(userChoice, compChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            console.log("computer wins");
            lose(userChoice, compChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            console.log("tie");
            tie(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        playGame('r');
    });
    paper_div.addEventListener('click', function() {
        playGame('p');
    });
    scissors_div.addEventListener('click', function() {
        playGame('s');
    });
}

main();
