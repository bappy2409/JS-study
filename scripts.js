let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEL = document.querySelector("#sum-el");
let isAlive = true;
let gameStarted = false;
let message = "";
let sum = 0;
let cards = [];
let hasBlackJack = false;
let player = {
  name: "",
  age: 12,
  chips: 1000,
};
let playerSet = false;
let playerEl = document.getElementById("player-el");

//////////////////////////////////////////////////////////
function ehan() {
  if (playerSet === false) {
    player.name = "Ehan";
    player.chips = 1000;
    gameStarted = true;
    playerSet = true;
  }
}
function rayan() {
  if (playerSet === false) {
    player.name = "Rayan";
    player.chips = 1000;
    gameStarted = true;
    playerSet = true;
  }
}
/////////////////////////////////////////////////////////////////function startGame()
function startGame() {
  if (gameStarted === true && isAlive === true) {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    player.chips -= 20;
    renderGame();
  } else {
    messageEl.textContent = "New Game";
  }
}
/////////////////////////////////////////////////////////////////function renderGame ()
function renderGame() {
  cardsEl.textContent = "Numbers are: ";
  for (let a = 0; a < cards.length; a++) {
    cardsEl.textContent += cards[a] + " ";
  }
  sumEL.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! Blackjack!!";
    hasBlackJack = true;
    player.chips += 20;
  } else {
    message = "Game Over";
    player.chips -= 20;
    isAlive = false;
  }
  messageEl.textContent = message;
  playerEl.textContent = player.name + ": $" + player.chips;
}

////////////////////////////////////////////////////////////////function newCards()
function newCards() {
  if (isAlive === true && hasBlackJack == false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
}

////////////////////////////////////////////////////////////////function getRandomCard()

function getRandomCard() {
  let RandomNumber = Math.random() * 16;
  let positiveNumber = Math.floor(RandomNumber) + 1;
  if (positiveNumber > 15) {
    positiveNumber = 15;
  } else if (positiveNumber === 11) {
    positiveNumber = 11;
  }

  return positiveNumber;
}
