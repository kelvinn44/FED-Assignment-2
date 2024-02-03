const gridContainer = document.querySelector(".grid-container");
let cards = []
let firstCard, secondCard;
let lockBoard = false;
let score = 20;

document.querySelector(".score").textContent = score;

fetch("scripts/product.json")
.then((res) => res.json()) 
.then((data)=>{
    cards = [...data, ...data];
    mix();
    createCards()
});

function mix(){
    let index = cards.length,
    randomIndex,
    temporaryValue;
    while(index != 0){
        randomIndex = Math.floor(Math.random() * index);
        index -=1 ;
        temporaryValue = cards[index];
        cards[index] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
}
function createCards(){
    for(let card of cards){
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
        cardElement.addEventListener("click",flipCard)
    }
}

function flipCard(){
    if (lockBoard) return;
    if(this === firstCard) return;
    this.classList.add("flipped")
    if(!firstCard){
        firstCard = this;
        return;
    }
    secondCard = this;
    score--;
    document.querySelector(".score").textContent = score;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch(){
    let isMatch = firstCard.dataset.name === secondCard.dataset.name; 
    isMatch  ? match() : unmatch();
}

function match(){
    firstCard.removeEventListener("click",flipCard);
    secondCard.removeEventListener("click",flipCard);
    resetBoard();
}

function unmatch(){
    setTimeout(()=>{
        firstCard.classList.remove("flipped");
        secondCard.remove("flipped");
        resetBoard();
    }, 1000)
}

function resetBoard(){
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function restart(){
    resetBoard();
    mix();
    score = 20;
    document.querySelector('.score').textContent=score;
    gridContainer.innerHTML = "";
    generateCards();
}