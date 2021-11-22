let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let player = {
    Name : "",
    Chips : "",
    playerProfile:function(){
        this.Name = prompt("Enter Player Name");
    }
}

player.playerProfile();


let message="";
let playerMessage = "";
let playerEl = document.getElementById("playerProfile");
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
        message = "You Lost! Cilck Start for New Game";
        player.Chips = "$0";

        
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
        message = "Blackjack!! Cilck Start for New Game";
        player.Chips = "$200";

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
        player.Chips = "$0";
    }
    messageEl.textContent = message;
    playerMessage = player.Name + ": " + player.Chips;
    playerEl.textContent = playerMessage;
    
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

