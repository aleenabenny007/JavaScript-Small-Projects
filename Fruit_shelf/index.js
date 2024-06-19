

let fruits = []

let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

let fruitBasket = document.getElementById("fruit-basket")


function sortFruit() {
    appleShelf.textContent = ""
    orangeShelf.textContent = ""
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === "🍎"){
            appleShelf.textContent += " 🍎 "
        }
        else{
            orangeShelf.textContent += " 🍊 "
        } 
    }
}

function selectApple(){
    fruitBasket.textContent += " 🍎 "
    fruits.push("🍎")
}

function selectOrange(){
    fruitBasket.textContent += " 🍊 "
    fruits.push("🍊")
}


