`use strict`;
//Create A Random Number Between 1 to 20
let seacretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);

document.querySelector(".check").addEventListener("click", function () {
  let guessNo = Number(document.querySelector(".guess").value);
  // When User give no input or falsy values
  if (!guessNo) displayMessage("No Number🤔");
  // When right guess number
  else if (guessNo === seacretNumber) {
    displayMessage("Correct Answer😃");
    document.querySelector(".number").textContent = seacretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    document.querySelector("body").style.background =
      "linear-gradient(90deg, hsla(0, 0%, 5%, 1) 0%, hsla(126, 82%, 33%, 1) 100%)";
  }
  //When guessNo is greater than secreat number and 1
  else if (guessNo !== seacretNumber) {
    if (score > 1) {
      displayMessage(guessNo > seacretNumber ? "Too High📈" : "Too Low📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost The Game");
      document.querySelector(".score").textContent = "0";
    }
    //When guess No is lower than secreat number and 1
  }
});

//Adding Restoration Functionality on "Again" Button

document.querySelector(".again").addEventListener("click", () => {
  seacretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector("body").style.background = `linear-gradient(
    90deg,
    hsla(235, 100%, 78%, 1) 0%,
    hsla(222, 77%, 33%, 1) 100%
  )`;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
