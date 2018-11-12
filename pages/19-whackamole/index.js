let score = 0;
const scoreDisplay = document.getElementById('score');

//array of all holes
const holes = Array.from(document.getElementsByClassName('hole'));

// random mole appears every 3 seconds
setInterval(function(){
  //select a random mole
  let pickRandomMole = Math.floor(Math.random() * 9);
  //toggle mole class
  holes[pickRandomMole].classList.toggle('mole');
 }, 2000);

 //gets div containing all holes
 const gameArea = document.getElementById('whack-a-mole');
 gameArea.addEventListener('click', function(clickEvent) {
   if (clickEvent.target.matches('.mole')) {
     // we hit a mole! kill the mole
     clickEvent.target.classList.toggle('mole');

     //update score
     score++;
     scoreDisplay.innerHTML = score;
   }
 });

