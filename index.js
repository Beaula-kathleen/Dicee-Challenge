  // 1. get 2 possible outcomes
  let firstPlayer = Math.floor(6 * Math.random()) + 1;
  let secondPlayer = Math.floor(6 * Math.random()) + 1;
  console.log(firstPlayer, secondPlayer);
  // 2. set the winner based on it in the heading
  if (firstPlayer > secondPlayer)
    document.querySelector("h1").innerHTML = "&#128681; Player 1 won!";
  else if (secondPlayer > firstPlayer)
    document.querySelector("h1").innerHTML = "Player 2 won! &#128681;";
  else document.querySelector("h1").innerHTML = "Draw!";
  // 3.a.display the outcome based on no.of dots on the dice
  displayDots(firstPlayer, "dice1");
   displayDots(secondPlayer, "dice2");


function displayDots(outcome, dice) {
  switch (outcome) {
    case 1:
      clearDots(
        [
          "containerOne",
          "containerTwo",
          "containerFour",
          "containerFive",
          "containerSix",
        ],
        dice
      );
      //   c. try align the dot in the center when 1,3,5 outcome comes;
      document.querySelector(`.${dice} > .containerThree`).style.gridColumn =
        "span 2";
      break;
    case 2:
      clearDots(
        ["containerTwo", "containerThree", "containerFour", "containerFive"],
        dice
      );
      break;
    case 3:
      clearDots(["containerTwo", "containerFour", "containerSix"], dice);
      //   c. try align the dot in the center when 1,3,5 outcome comes;
      document.querySelector(`.${dice} > .containerThree`).style.gridColumn =
        "span 2";
      break;
    case 4:
      clearDots(["containerThree", "containerFour"], dice);
      break;
    case 5:
      clearDots(["containerSix"], dice);
      //   c. try align the dot in the center when 1,3,5 outcome comes;
      document.querySelector(`.${dice} > .containerThree`).style.gridColumn =
        "span 2";
      break;

    default:
      break;
  }
}

//   b. remove the unwanted dots
function clearDots(list, dice) {
  for (var i = 0; i <= (list.length) -1; i++) {
    document.querySelector(`.${dice} > .${list[i]}`).style.visibility =
      "hidden";
  }
}
