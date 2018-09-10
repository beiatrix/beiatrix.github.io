console.log('hewwo');

const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

rock_div.addEventListener('click', function() {
    console.log('you clicked rock!');
    playGame()
});
paper_div.addEventListener('click', function() {
    console.log('you clicked paper!');
});
scissors_div.addEventListener('click', function() {
    console.log('you clicked scissors!');
});

var userInput = '';

//const getUserChoice = choice => {
//    userInput = choice;
//    return userInput;
//}

const getUserChoice = choice => {

document.getElementById('rock').onclick = function() {
    userInput = 'rock';
    alert(userInput);
};
document.getElementById('paper').onclick = function() {
    userInput = 'paper';
    alert(userInput);
};
document.getElementById('scissors').onclick = function() {
    userInput = 'scissors';
    alert(userInput);
};    
    
    return userInput;
};
//
//
//
//  if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
//    console.log(userInput);
//    alert(userInput);
//    return userInput;  
//  } 
//  else {
//    console.log('invalid input3');
//  }
//};

getUserChoice(userInput);
console.log('user choice: ' + userInput);


function getComputerChoice() {
  var a = Math.floor(Math.random() * 2) + 1;
  
  switch (a) {
    case 0:
      text = 'rock';
      return 'rock';
      break;
    case 1:
      text = 'paper';
      return 'paper';
      break;
    case 2:
      text = 'scissors';
      return 'scissors';
      break;
  }
}

//console.log('computer\'s choice: ' + getComputerChoice());

function determineWinner(userChoice, computerChoice) {
  
  if (userChoice == computerChoice) {
    return 'tie';
  }
  
  if (userChoice == 'rock') {
    if (computerChoice == 'paper') {
      return 'computer';
    } else {
      return 'user';
    }
  }
  
  if (userChoice == 'paper') {
    if (computerChoice == 'scissors') {
      return 'computer';
    } else {
      return 'user';
    }
  }
  
  if (userChoice == 'scissors') {
    if (computerChoice == 'rock') {
      return 'computer';
    } else {
      return 'user';
    }
  }
  
  if (userChoice == 'bomb') {
    return 'user';
  }
}

function playGame() {
  var userChoice = getUserChoice(userInput);
  var computerChoice = getComputerChoice();
  console.log('user choice: ' + userChoice);
  console.log('computer choice: ' + computerChoice);
  
  console.log('winner: ' + determineWinner(userChoice, computerChoice));
}

playGame(); 
//var result = determineWinner(getUserChoice(userInput), getComputerChoice());

//console.log(result);