let gameFeildElement = document.getElementById("game-feild");
let turnLabelElement = document.getElementById("turn-label");
let restartBtnElement = document.getElementById("restart-btn");
restartBtnElement.addEventListener("click", restartGame);
gameFeildElement.addEventListener("click", takeTurn);
let randomTurn = Math.floor(Math.random() * 10) % 2;
let turn;
let popUpElement = document.getElementById("pop-up");
let messageLabel = document.getElementById("message-label");
let btn1Element = document.getElementById("btn1");
let btn2Element = document.getElementById("btn2");
let btn3Element = document.getElementById("btn3");
let btn4Element = document.getElementById("btn4");
let btn5Element = document.getElementById("btn5");
let btn6Element = document.getElementById("btn6");
let btn7Element = document.getElementById("btn7");
let btn8Element = document.getElementById("btn8");
let btn9Element = document.getElementById("btn9");
let btnArray = [
  btn1Element,
  btn2Element,
  btn3Element,
  btn4Element,
  btn5Element,
  btn6Element,
  btn7Element,
  btn8Element,
  btn9Element,
];
let moves = 0;

hidePopUp();

if (randomTurn == 1) {
  turn = "X";
} else {
  turn = "O";
}
turnLabelElement.innerText = "Turn: " + turn;
function takeTurn(event) {
  let btnElement = event.target;
  btnElement.disabled = true;
  btnElement.innerText = turn;
  moves++;
  checkResult();
  if (turn === "X") {
    btnElement.style.backgroundColor = "var(--secondary-color)";
    turn = "O";
  } else {
    btnElement.style.backgroundColor = "var(--primary-color)";
    turn = "X";
  }
  turnLabelElement.innerText = "Turn: " + turn;
}
function checkResult() {
  let btn1Text = btnArray[0].innerText;
  let btn2Text = btnArray[1].innerText;
  let btn3Text = btnArray[2].innerText;
  let btn4Text = btnArray[3].innerText;
  let btn5Text = btnArray[4].innerText;
  let btn6Text = btnArray[5].innerText;
  let btn7Text = btnArray[6].innerText;
  let btn8Text = btnArray[7].innerText;
  let btn9Text = btnArray[8].innerText;
  if (btn1Text == btn2Text && btn2Text == btn3Text && btn3Text != "") {
    showPopUp(turn + " WON");
  }
  if (btn4Text == btn5Text && btn5Text == btn6Text && btn6Text != "") {
    showPopUp(turn + " WON");
  }
  if (btn7Text == btn8Text && btn8Text == btn9Text && btn9Text != "") {
    showPopUp(turn + " WON");
  }

  if (btn1Text == btn4Text && btn4Text == btn7Text && btn7Text != "") {
    showPopUp(turn + " WON");
  }
  if (btn2Text == btn5Text && btn5Text == btn8Text && btn8Text != "") {
    showPopUp(turn + " WON");
  }
  if (btn3Text == btn6Text && btn6Text == btn9Text && btn9Text != "") {
    showPopUp(turn + " WON");
  }
  if (btn1Text == btn5Text && btn5Text == btn9Text && btn9Text != "") {
    showPopUp(turn + " WON");
  }
  if (btn3Text == btn5Text && btn5Text == btn7Text && btn7Text != "") {
    showPopUp(turn + " WON");
  }
  if (moves == 9) {
    showPopUp("It`s a DRAW.");
  }
}

function showPopUp(message) {
  messageLabel.innerText = message;
  popUpElement.style.display = "flex";
}
function restartGame() {
  moves = 0;
  if (turn == "X") {
    turn = "O";
  } else {
    turn = "X";
  }
  hidePopUp();
  clearField();
}

function hidePopUp() {
  popUpElement.style.display = "none";
}

function clearField() {
  for (let index = 0; index < btnArray.length; index++) {
    let currentBtn = btnArray[index];
    currentBtn.style.backgroundColor = "transparent";
    currentBtn.innerText = "";
    currentBtn.disabled = false;
  }
}
