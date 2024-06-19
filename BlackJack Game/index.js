
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message")
let sumEl = document.getElementById("sum")
let cardsEl = document.getElementById("cards")


let player = {
    name:"Aleena",
    chips:145,
    sayHello : function(){
        console.log("Hello");                
    }     
}


let playerChipsInfo = document.getElementById("player-chips")
playerChipsInfo.textContent = player.name + " : $" + player.chips


function startGame() {
    isAlive = true
    let firstCard = selectRandom()
    let secondCard = selectRandom()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards : "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum : " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "You've got a Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}


function newCard() {
    let card = selectRandom()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}

function selectRandom() {
    let min = 2
    let max = 12
    return Math.floor(Math.random() * (max - min) + min)
}  

     
                   

