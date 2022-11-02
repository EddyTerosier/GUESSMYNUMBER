"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 55;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    document.querySelector(".message").textContent = "🦍 No number!";
    document.querySelector("body").style.backgroundColor = "#FF0055";

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Bravo vous avez trouver";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // WHEN GUESS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Trop grand !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "TU PERDS FREROT";
      document.querySelector(".score").textContent = 0;
    }

    // WHEN GUESS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Trop petit !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "TU PERDS FREROT";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
