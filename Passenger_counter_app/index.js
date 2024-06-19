// document.getElementById("count-el").innerHTML = 5;

// let count=0

// console.log(count)

// let myAge = 20
// let humanDogRatio = 7

// console.log(myAge)

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

i





// .........Passenger Counter............. 

console.log("Hii all")
let count = 0

function increment() {
    let counter = document.getElementById("count-el");
    console.log("The button was clicked...")
    count = count + 1;
    counter.innerHTML=count
    
}

function save() {
    let prevEntries = document.getElementById("prev-entries")
    let countStr = count + " - "
    prevEntries.innerHTML  += countStr
    clearIt()

}

function clearIt() {
    let counter = document.getElementById("count-el");
    count = 0
    // counter.innerText = 0
    counter.textContent = count
}





