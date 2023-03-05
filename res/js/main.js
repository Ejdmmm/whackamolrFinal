const squares = document.querySelectorAll('.square');
const score = document.getElementById("score");
const timeLeft = document.getElementById('timeleft');
const mole = document.getElementById('mole');

let result = 0;
let hitboxes;
let currentTime = 15;
let timerId = null;
let countDownTimerId = setInterval(countDown, 1000);

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole');
  })

  let randomSquare = squares[Math.floor(Math.random() * 5)]
  randomSquare.classList.add('mole');

  hitboxes = randomSquare.id;
}
function getRandom() {
  min = Math.ceil(1);
  max = Math.floor(10);
  return Math.random() * (1 - 10 +1);
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitboxes) {
      result++;
      score.textContent = result;
      hitboxes = null;
    }
  })
})
const move = randomSquare;
function moveMole() {
  timerId = setInterval(randomSquare, 450);
}

moveMole()

function countDown() {
 currentTime--;

 timeLeft.textContent = currentTime;

 if (currentTime == 0) {
   clearInterval(countDownTimerId);
   clearInterval(timerId);

   alert("Game over, please refresh the site for play again. " + " Your final score is:  " + result);
 }
}
