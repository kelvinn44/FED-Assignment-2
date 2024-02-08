// Initialise the name
const Name = document.querySelector(".Name");

// Function to toggle sign in state
function toggleSignIn() {
    var signInButton = document.getElementById('signInButton');
    if (signInButton.innerText === 'Sign In') {
        // If button is in "Sign In" state, redirect to sign in page
        window.location.href = "signin_signup.html";
    } else {
        // If button is in "Log Out" state, toggle back to "Sign In"
        signInButton.innerText = 'Sign In';

        // Change button color back to blue
        signInButton.classList.remove('btn-danger');
        signInButton.classList.add('btn-primary');

        localStorage.removeItem('isLoggedIn');

        // Remove user name when logged out
        Name.innerText = "";

        // Display alert when logging out
        alert("You have been logged out successfully!");
    }
}

// Check if user is already logged in on page load
window.onload = function() {
    var signInButton = document.getElementById('signInButton');
    if (localStorage.getItem('isLoggedIn') === 'true') {
        // If user is logged in, change button text to "Log Out"
        signInButton.innerText = 'Log Out';

        // To display user name next to btn
        let name = localStorage.getItem('Name')
        Name.innerText = `${name}`;

        // Change button color to red
        signInButton.classList.remove('btn-primary');
        signInButton.classList.add('btn-danger');
    }
};

// Game function
const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 20;
let matchedPairs = 0;

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
  score--;
  document.querySelector(".score").textContent = score;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  if (isMatch) {
    disableCards();
    matchedPairs++; // Increment matched pairs count
  } else {
    unflipCards();
  }

  // Check if all pairs are matched 
  if (matchedPairs === cards.length / 2) {
    alert("Congratulations! You've completed the game!");
    matchedPairs = 0;

    //Retrieve user ID
    if (localStorage.getItem('isLoggedIn') === 'true'){
      $.ajax({
        type: "GET",
        url: "https://fedproject-3bfe.restdb.io/rest/account",
        headers: {
          "Content-Type": "application/json",
          "x-apikey": "65b1b9947d4b3ea75e7e0415",
        },
        success: function (data) {
          let user = data.find(
            (user) => user.Email == localStorage.getItem('Email') && user.Password == localStorage.getItem('Password')
          );
          if (user) {
            let ObjID = user._id; // ObjectID
            let currentScore = user.Score;
            console.log("User ObjectID:", ObjID);
            console.log(user.Name);
            
            //Updating account
            let newScore = currentScore + score;
            console.log(newScore)
            var jsondata = { 
              "Email": user.Email,
              "Password": user.Password,
              "Name": user.Name,
              "Score" : newScore
            };
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": ("https://fedproject-3bfe.restdb.io/rest/account/" + ObjID),
                "method": "PUT",
                "headers": {
                    "content-type": "application/json",
                    "x-apikey": "65b1b9947d4b3ea75e7e0415",
                    "cache-control": "no-cache"
                },
                "processData": false,
                "data": JSON.stringify(jsondata)
            };
            
            $.ajax(settings)
                .done(function (response) {
                    console.log(response);
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.error("Error:", textStatus, errorThrown);
                    console.log("Response:", jqXHR.responseText);
                });
          } else {
            console.log("User not found");
          }

          
        },
        error: function (error) {
          console.log(error);
        },
      });
    }  
      
  }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    if (firstCard && secondCard) {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
    }
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
  score = 20;
  document.querySelector(".score").textContent = score;
  gridContainer.innerHTML = "";
  generateCards();
}
