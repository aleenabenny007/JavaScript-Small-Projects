
let myLeads = []
const inputBox = document.getElementById("input-box")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const displayList = document.getElementById("display-list")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

let tabs = [
    {
    url:"https://www.typingclub.com/"
    }
]


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    display(myLeads)
}



inputBtn.addEventListener("click", function () {
    if (inputBox.value != "")
        myLeads.push(inputBox.value)
    inputBox.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    display(myLeads)

})

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({active : true, currentWindow : true},function(tabs){
        let activeTab = tabs[0]
        let activeTabUrl = activeTab.url
        myLeads.push(activeTabUrl)
        display(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    display(myLeads)
})



function display(leads) {
    displayList.innerHTML = ""
    for (let i = 0; i < leads.length; i++) {
        displayList.innerHTML += `<li><a target='_blank' href='${leads[i]}'> ${leads[i]}</a></li>`
    }
}










