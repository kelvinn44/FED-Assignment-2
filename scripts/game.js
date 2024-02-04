// Function to toggle sign in state
function toggleSignIn() {
    var signInButton = document.getElementById('signInButton');
    if (signInButton.innerText === 'Sign In') {
        // If button is in "Sign In" state, redirect to sign in page
        window.location.href = "signin_signup.html";
    } else {
        // If button is in "Log Out" state, toggle back to "Sign In"
        signInButton.innerText = 'Sign In';
        localStorage.removeItem('isLoggedIn');
    }
}

// Check if user is already logged in on page load
window.onload = function() {
    var signInButton = document.getElementById('signInButton');
    if (localStorage.getItem('isLoggedIn') === 'true') {
        // If user is logged in, change button text to "Log Out"
        signInButton.innerText = 'Log Out';
    }
};

// Game function
const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector(".score").textContent = score;

fetch("scripts/product.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data];
    shuffle();
    generateCards();
  });

function shuffle() {
    let Index = cards.length,
        randomIndex,
        temporaryValue;
    while (Index !== 0) {
        randomIndex = Math.floor(Math.random() * Index);
        Index -= 1;
        temporaryValue = cards[Index];
        cards[Index] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
}

function generateCards() {
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} />
      </div>
      <div class="back"></div>
    `;
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
  }
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  score++;
  document.querySelector(".score").textContent = score;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
}

function resetBoard() {
  firstCard = null; 
  secondCard = null;
  lockBoard = false;
}

function restart() {
  resetBoard();
  shuffle();
  score = 0;
  document.querySelector(".score").textContent = score;
  gridContainer.innerHTML = "";
  generateCards();
}
