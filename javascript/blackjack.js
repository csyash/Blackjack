let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;

let message="";
let messageEl = document.getElementById("result");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards");
let startBtn = document.querySelector("#startButton");
let newCardBtn = document.querySelector("#newCard");

newCardBtn.disabled = true;

 function renderGame()
{
    
        sumEl.textContent = "Sum : " + sum;
        cardsEl.textContent = "Cards : ";
        for(let i=0;i<cards.length;i++)
        cardsEl.textContent += cards[i] + " ";
      
    if(sum > 21)
    {
        isAlive = false;
        message = "You Lost";
        
        setTimeout(function (){
        startBtn.disabled = false;
        newCardBtn.disabled = true;
        },200);

        while(cards.length > 0)
              cards.pop();
    }
    else if(sum === 21)
    {
        isAlive = true;
        hasBlackjack = true;
        message = "Blackjack";

        setTimeout(function() {
        startBtn.disabled = false;
        newCardBtn.disabled = true;
        },200);
        while(cards.length > 0)
              cards.pop();
    }
    else
    {
        isAlive = true;
        message = "Draw another card";
        newCardBtn.disabled = false;
    }
    messageEl.textContent = message;
    
}

function gameStart()
{
    setTimeout(function() { startBtn.disabled = true;},200)
    isAlive = true;
    hasBlackjack = false;
    let firstCard = generateCard();
    let secondCard = generateCard();
    sum = firstCard+secondCard;
    cards.push(firstCard);
    cards.push(secondCard);
    renderGame();
}
function newCard()
{
  if(isAlive && hasBlackjack===false)
  {
       let newcard = generateCard();
       cards.push(newcard);
       sum+=newcard;
       renderGame();    
  }
    
}

function generateCard()
{
    let generatedCard = Math.floor(Math.random() * 11) + 1;
    return generatedCard;
}

