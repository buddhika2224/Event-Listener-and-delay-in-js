const display = document.querySelector(".circle");
const correct = document.querySelector("#correct");
const wrong = document.querySelector("#wrong");
const progress = document.querySelector("progress");
const miss = document.querySelector("#miss");
const speed = document.getElementById("speed");
let character;
let timer;

//function to display a random letter

function randomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomIndex = Math.floor(Math.random() * alphabet.length);

  character = alphabet[randomIndex];
  //convert to uppercase
  character = character.toUpperCase();
  //display the random letter
  display.innerHTML = character;
}
//display the random letter
randomLetter();

//listen for input
document.addEventListener("keyup", (e) => {
  //convert to uppercase
  key = e.key.toUpperCase();
  if (key === character) {
    correct.innerHTML++;
  } else {
    wrong.innerHTML++;
  }
  //display next letter
  randomLetter();
  startTimer();
});

//timer

let delay = 1000;

function startTimer(){
  progress.value = 0;
  clearInterval(timer);
  timer = setInterval(function(){
    progress.value += 10;
    if(progress.value >= 100){
      miss.innerHTML++;
      randomLetter();
      startTimer();
    }
  }, delay);
}
speed.onchange = function(){
  delay = 1000 - speed.value;
  startTimer();
}
